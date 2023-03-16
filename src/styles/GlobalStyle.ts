import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    border: 0;
    box-sizing: border-box;
    cursor: default;
    font-variant-numeric: tabular-nums;
    margin: 0;
    outline: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
    -webkit-touch-callout: none;
    user-select: none;
  }
  ::selection {
      background: $color;
      color: #fff;
  }
  ::-moz-selection {
      background: $color;
      color: #fff;
  }
  html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    background-size: cover;
    height: 100%;
    overflow: hidden;
  }
  body {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    overscroll-behavior: none;
    height: 100%;
  }

`
export { GlobalStyle };
