import React from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import { SceneType } from '../../types';

interface CharacterProps {
  size?: number;
  selected?: boolean;
}

// Shared CSS animation keyframes as a style string
const globalAnimations = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-4px); }
  }
  @keyframes blink {
    0%, 42%, 58%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(0.1); }
  }
  @keyframes bounce-select {
    0% { transform: scale(1); }
    30% { transform: scale(1.25); }
    60% { transform: scale(0.95); }
    100% { transform: scale(1); }
  }
  @keyframes wave-hand {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(20deg); }
    75% { transform: rotate(-10deg); }
  }
  @keyframes row-motion {
    0%, 100% { transform: rotate(-5deg); }
    50% { transform: rotate(5deg); }
  }
  @keyframes eat-chop {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
  }
  @keyframes walk {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
  }
  @keyframes bag-swing {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(15deg); }
    75% { transform: rotate(-15deg); }
  }
  @keyframes sparkle {
    0%, 100% { opacity: 0; transform: scale(0); }
    50% { opacity: 1; transform: scale(1); }
  }
  @keyframes scarf-flow {
    0%, 100% { transform: skewX(0deg); }
    50% { transform: skewX(5deg); }
  }
  @keyframes steam {
    0% { transform: translateY(0); opacity: 0.6; }
    100% { transform: translateY(-8px); opacity: 0; }
  }
  @keyframes keyboard-tap {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(2px); }
  }
  @keyframes nap-breathe {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  @keyframes map-wave {
    0%, 100% { transform: rotate(0deg) translateX(0); }
    50% { transform: rotate(-8deg) translateX(-2px); }
  }
  @keyframes foot-kick {
    0%, 100% { transform: rotate(0deg); }
    30% { transform: rotate(15deg); }
  }
  @keyframes head-look {
    0%, 100% { transform: rotate(0deg); }
    30% { transform: rotate(8deg); }
    70% { transform: rotate(-8deg); }
  }
`;

// Base face SVG that all characters share
export function renderBaseFace(hasGlasses?: boolean) {
  return `
    <!-- Face base -->
    <circle cx="60" cy="55" r="30" fill="#FFD93D" stroke="#E8A317" stroke-width="2"/>

    <!-- Eyes with blink animation -->
    <g style="animation: blink 4s ease-in-out infinite;">
      <circle cx="50" cy="50" r="4" fill="#333"/>
      <circle cx="70" cy="50" r="4" fill="#333"/>
      <circle cx="51" cy="49" r="1.5" fill="white"/>
      <circle cx="71" cy="49" r="1.5" fill="white"/>
    </g>

    <!-- Cheeks (blush) -->
    <ellipse cx="42" cy="58" rx="5" ry="3" fill="#FFB6C1" opacity="0.5"/>
    <ellipse cx="78" cy="58" rx="5" ry="3" fill="#FFB6C1" opacity="0.5"/>

    ${hasGlasses ? `
    <!-- Glasses -->
    <rect x="43" y="45" width="14" height="10" rx="3" fill="none" stroke="#333" stroke-width="2"/>
    <rect x="63" y="45" width="14" height="10" rx="3" fill="none" stroke="#333" stroke-width="2"/>
    <line x1="57" y1="50" x2="63" y2="50" stroke="#333" stroke-width="2"/>
    ` : ''}
  `;
}

// Render character as HTML for WebView
export function renderCharacterHTML(content: string, extraStyles: string = ''): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        * { margin: 0; padding: 0; }
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          background: transparent;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        svg {
          width: 100%;
          height: 100%;
        }
        ${globalAnimations}
        .char-container {
          animation: float 3s ease-in-out infinite;
          ${extraStyles}
        }
        .char-container.selected {
          animation: float 3s ease-in-out infinite, bounce-select 0.4s ease-out;
        }
      </style>
    </head>
    <body>
      ${content}
    </body>
    </html>
  `;
}

// Render character as inline SVG for web
export function renderCharacterSVG(content: string): string {
  return `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" style="animation: float 3s ease-in-out infinite;">
      <defs>
        <style>
          ${globalAnimations}
        </style>
      </defs>
      ${content}
    </svg>
  `;
}

export { globalAnimations };
