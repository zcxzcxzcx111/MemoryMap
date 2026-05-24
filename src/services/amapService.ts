// 高德地图 REST API 服务
// 逆地理编码: 经纬度 → 中文地址

const AMAP_KEY = '6497833e61ed45dec43ba26f3c03d167';
const AMAP_BASE = 'https://restapi.amap.com/v3';

export interface AmapRegeocodeResult {
  address: string;       // 格式化地址
  placeName: string;     // POI 名称（最近的兴趣点）
  adCode: string;        // 行政区划代码
  city: string;          // 城市名
  district: string;      // 区县名
}

/**
 * 高德逆地理编码：经纬度 → 地址
 * https://lbs.amap.com/api/webservice/guide/api/georegeo
 */
export async function reverseGeocode(lat: number, lng: number): Promise<AmapRegeocodeResult | null> {
  try {
    const url = `${AMAP_BASE}/geocode/regeo?key=${AMAP_KEY}&location=${lng},${lat}&poitype=&radius=1000&extensions=base&batch=false&roadlevel=0`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.status !== '1' || !data.regeocode) {
      console.warn('Amap regeocode failed:', data.info);
      return null;
    }

    const rc = data.regeocode;
    const pois = rc.pois || [];

    // 取最近的 POI 名称，没有则用地址组件
    let placeName = '';
    if (pois.length > 0) {
      placeName = pois[0].name;
    } else if (rc.addressComponent) {
      const ac = rc.addressComponent;
      placeName = ac.neighborhood?.name || ac.building?.name || ac.township || ac.district || ac.city;
    }

    return {
      address: rc.formatted_address || '',
      placeName: placeName || rc.formatted_address || '',
      adCode: rc.addressComponent?.adcode || '',
      city: Array.isArray(rc.addressComponent?.city)
        ? rc.addressComponent.city[0] || ''
        : rc.addressComponent?.city || '',
      district: rc.addressComponent?.district || '',
    };
  } catch (err) {
    console.warn('Amap regeocode error:', err);
    return null;
  }
}

/**
 * 批量逆地理编码（限速：每 200ms 一个请求，避免触发限流）
 * 返回 Map<photoId, AmapRegeocodeResult>
 */
export async function batchReverseGeocode(
  items: Array<{ id: string; lat: number; lng: number }>
): Promise<Map<string, AmapRegeocodeResult>> {
  const results = new Map<string, AmapRegeocodeResult>();

  for (const item of items) {
    const result = await reverseGeocode(item.lat, item.lng);
    if (result) {
      results.set(item.id, result);
    }
    // 限速：200ms 间隔
    await new Promise((r) => setTimeout(r, 200));
  }

  return results;
}
