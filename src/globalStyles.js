import { createGlobalStyle } from 'styled-components/macro';
import 'react-tippy/dist/tippy.css';

export default () => createGlobalStyle`
  @font-face {
    font-family: 'open_sans';
    src: url('/fonts/Opensans/opensans-light-webfont.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'open_sans';
    src: url('/fonts/Opensans/opensans-regular-webfont.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'open_sans';
    src: url('/fonts/Opensans/opensans-semibold-webfont.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'open_sans';
    src: url('/fonts/Opensans/opensans-bold-webfont.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'open_sans';
    src: url('/fonts/Opensans/opensans-extrabold-webfont.woff') format('woff');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 100;
    src: local('Roboto Thin'), local('Roboto-Thin'), url('/fonts/Roboto/Roboto-Thin.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    src: local('Roboto Light'), local('Roboto-Light'), url('/fonts/Roboto/Roboto-Light.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: local('Roboto Regular'), local('Roboto-Regular'), url('/fonts/Roboto/Roboto-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    src: local('Roboto Medium'), local('Roboto-Medium'), url('/fonts/Roboto/Roboto-Medium.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 800;
    src: local('Roboto Bold'), local('Roboto-Bold'), url('/fonts/Roboto/Roboto-Bold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    src: local('Roboto Black'), local('Roboto-Black'), url('/fonts/Roboto/Roboto-Black.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 100;
    src: local('Roboto Thin Italic'), local('Roboto-ThinItalic'), url('/fonts/Roboto/Roboto-ThinItalic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 200;
    src: local('Roboto Light Italic'), local('Roboto-LightItalic'), url('/fonts/Roboto/Roboto-LightItalic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 400;
    src: local('Roboto Regular Italic'), local('Roboto-RegularItalic'), url('/fonts/Roboto/Roboto-RegularItalic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 500;
    src: local('Roboto Medium Italic'), local('Roboto-MediumItalic'), url('/fonts/Roboto/Roboto-MediumItalic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 800;
    src: local('Roboto Bold Italic'), local('Roboto-BoldItalic'), url('/fonts/Roboto/Roboto-BoldItalic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 900;
    src: local('Roboto Black Italic'), local('Roboto-BlackItalic'), url('/fonts/Roboto/Roboto-BlackItalic.ttf') format('truetype');
  }

  html,
  body {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    padding: 0;
    height: 100% !important;
    -webkit-font-smoothing: auto !important;
    font-family: 'Roboto';
    overflow: hidden;
  }

  * {
    user-select: none;
    outline: none;

    scrollbar-width: none;        /* hide scrollbar (firefox) */
    -ms-overflow-style: none;     /* hide scrollbar (ie, edge) */
  }

  /* hide scrollbar (chrome, safari) */
  ::-webkit-scrollbar {
    display: none;
  }

  #root {
    height: 100% !important;

    .fullscreen {
      height: 100%;
    }
  }

  .landscape {
    display: flex;
    align-items: center;
    justify-content: center;

    #root {
      transform: rotate(-90deg);
      height: 100vw !important;
      width: 100vh !important;
    }
  }

  input {
    user-select: text;
    box-sizing: border-box;
    min-width: 0;
  }

  /* hide arrows on all inputs of type number */
  input[type=number] {
    appearance: textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    appearance: none;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    background-color: transparent !important;
    box-shadow: 0 0 0 1000px #fff inset !important;
    transition: background-color 5000s ease-in-out 0s !important;
  }

  /* MS supports */
  @supports (-ms-overflow-style: none) {
    .ps {
      overflow: auto !important;
    }
  }

  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    .ps {
      overflow: auto !important;
    }
  }

  .tippy-tooltip {
    &.tippy-tooltip {
      padding: 4px 8px;
      font-size: 14px;
      box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
      pointer-events: none;
      text-align: left;
    }

    &.bct-theme {
      background: #080924;
      border-radius: 3px;
      border: 1px solid #454c73;
      color: #7f8bc2 !important;
      max-width: 300px;

      .arrow-regular {
        border-color: transparent;
      }

      .volume-tooltip {
        font-size: 20px !important;
      }
    }

    &.settings-theme {
      background: #49517b;
      border-radius: 3px;
      max-width: 250px;
    }

    &.orderbook-theme,
    &.orderbook-sell-theme,
    &.orderbook-advanced-sell-theme {
      margin-left: -9px;
      background: #41486d;
      border-radius: 4px;
      color: #7f8bc2 !important;

      .volume-tooltip {
        font-size: 20px !important;
      }
    }

    &.wallet-theme {
      background: #0d112b;
      border: 1px solid #747ba6;
      color: #7f8bc2 !important;

      .arrow-regular {
        border-color: transparent;
      }
    }

    .advanced-tooltip {
      list-style-type: none;
      padding: 6px 8px;
      margin: 0;

      &.text-left {
        text-align: left !important;
      }
    }

    .advanced-tooltip.orderbook-tooltip {
      padding: 0 8px;

      li span {
        padding-top: 3px;
        padding-bottom: 3px;
      }

      li:first-child span {
        padding-top: 10px;
      }

      li:last-child span {
        padding-bottom: 10px;
      }
    }

    &.coin-list-theme {
      padding: 8px 10px;
      background: #41486d;
      opacity: 0.95;
      border-radius: 3px;
      box-shadow: 0 3px 3px rgba(0, 0, 0, 0.35);
      color: #d4d4d4 !important;
      text-align: left;

      &:not(.full-width-theme) {
        max-width: 300px;
      }

      .arrow-regular {
        border-color: transparent;
      }

      .volume-tooltip {
        font-size: 14px !important;
      }
    }

    @media (max-width: 1500px) {
      .advanced-tooltip.text-left span {
        font-size: 13px !important;
        transform: unset !important;
      }
    }

    @media (max-width: 1080px) {
      transform: scale(0.75) !important;
    }

    @media (max-width: 940px) {
      transform: scale(0.75) !important;
    }

    @media (max-width: 790px) {
      transform: scale(0.75) !important;
    }

    @media (max-width: 700px) {
      transform: scale(0.75) !important;
    }
  }

  .basic-table .tippy-tooltip .tippy-content {
    white-space: pre-line;
  }

  .tippy-popper {
    z-index: 10000001 !important;
    max-width: initial !important;
    pointer-events: none;
    opacity: 0.95;

    &[x-placement^=bottom] .settings-theme [x-arrow] {
      border-bottom-color: #49517b;
    }
  }

  .tippy-popper[x-placement^=right] .tippy-tooltip.bct-theme .arrow-regular {
    border-right: 7px solid !important;
    margin-top: 4px;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .tippy-popper[x-placement^=left] .tippy-tooltip.bct-theme .arrow-regular {
    border-left: 7px solid !important;
    margin-top: 4px;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .tippy-popper[x-placement^=top] .tippy-tooltip.bct-theme .arrow-regular {
    border-top: 7px solid !important;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .tippy-popper[x-placement^=bottom] .tippy-tooltip.bct-theme .arrow-regular {
    border-bottom: 7px solid !important;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .tippy-popper[x-placement^=right] .tippy-tooltip.wallet-theme .arrow-regular {
    border-right: 7px solid !important;
    border-right-color: #747ba6 !important;
    margin-top: 4px;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .tippy-popper[x-placement^=left] .tippy-tooltip.wallet-theme .arrow-regular {
    border-left: 7px solid !important;
    border-left-color: #747ba6 !important;
    margin-top: 4px;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .tippy-popper[x-placement^=top] .tippy-tooltip.wallet-theme .arrow-regular {
    border-top: 7px solid !important;
    border-top-color: #747ba6 !important;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .tippy-popper[x-placement^=bottom] .tippy-tooltip.wallet-theme .arrow-regular {
    border-bottom: 7px solid !important;
    border-bottom-color: #747ba6 !important;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .tippy-popper[x-placement^=right] .tippy-tooltip.orderbook-theme .arrow-small,
  .tippy-popper[x-placement^=right] .tippy-tooltip.orderbook-sell-theme .arrow-small {
    border-right: 7px solid !important;
    border-right-color: #41486d !important;
    margin-top: 4px;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .tippy-popper[x-placement^=left] .tippy-tooltip.orderbook-theme .arrow-small,
  .tippy-popper[x-placement^=left] .tippy-tooltip.orderbook-sell-theme .arrow-small {
    border-left: 7px solid !important;
    border-left-color: #41486d !important;
    margin-top: 4px;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .tippy-popper[x-placement^=top] .tippy-tooltip.orderbook-theme .arrow-small,
  .tippy-popper[x-placement^=top] .tippy-tooltip.orderbook-sell-theme .arrow-small {
    border-top: 7px solid !important;
    border-top-color: #41486d !important;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .tippy-popper[x-placement^=bottom] .tippy-tooltip.orderbook-theme .arrow-small,
  .tippy-popper[x-placement^=bottom] .tippy-tooltip.orderbook-sell-theme .arrow-small {
    border-bottom: 7px solid !important;
    border-bottom-color: #41486d !important;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .tippy-popper[x-placement^=right] .tippy-tooltip.orderbook-sell-theme .arrow-regular {
    border-right-color: #0a84d6 !important;
  }

  .tippy-popper[x-placement^=left] .tippy-tooltip.orderbook-sell-theme .arrow-regular {
    border-left-color: #0a84d6 !important;
  }

  .tippy-popper[x-placement^=top] .tippy-tooltip.orderbook-sell-theme .arrow-regular {
    border-top-color: #0a84d6 !important;
  }

  .tippy-popper[x-placement^=bottom] .tippy-tooltip.orderbook-sell-theme .arrow-regular {
    border-bottom-color: #0a84d6 !important;
  }

  .tippy-popper[x-placement^=right] .tippy-tooltip.orderbook-advanced-sell-theme .arrow-small {
    border-right-color: #41486d !important;
  }

  .tippy-popper[x-placement^=left] .tippy-tooltip.orderbook-advanced-sell-theme .arrow-small {
    border-left-color: #41486d !important;
  }

  .tippy-popper[x-placement^=top] .tippy-tooltip.orderbook-advanced-sell-theme .arrow-small {
    border-top-color: #41486d !important;
  }

  .tippy-popper[x-placement^=bottom] .tippy-tooltip.orderbook-advanced-sell-theme .arrow-small {
    border-bottom-color: #41486d !important;
  }

  /* Custom tooltip arrow style for coin list */
  .tippy-popper[x-placement^=top] .tippy-tooltip.coin-list-theme .arrow-regular {
    border-top-color: #41486d !important;
  }

  .tippy-popper[x-placement^=bottom] .tippy-tooltip.coin-list-theme .arrow-regular {
    border-bottom-color: #41486d !important;
  }

  .tippy-popper[x-placement^=left] .tippy-tooltip.coin-list-theme .arrow-regular {
    border-left-color: #41486d !important;
  }

  .tippy-popper[x-placement^=right] .tippy-tooltip.coin-list-theme .arrow-regular {
    border-right-color: #41486d !important;
  }

  .exch-dropdown__icon {
    border-radius: 50% !important;
    flex-shrink: 0;
  }

  .animate-appear {
    display: block;
  }

  .animate-disappear {
    display: none;
  }

  .full-width {
    width: 100% !important;
  }
`;
