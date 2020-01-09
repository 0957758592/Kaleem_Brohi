import { convertHexToRgba } from '@/utils';

const corePalette = {
  clrBackground: '#020518',
  clrChartBackground: '#080924',
  clrMainWindow: '#0d112b',
  clrOrderFormInputBG: '#131A42',
  clrPurple: '#7f8bc2',
  clrBlue: '#2780ff',
  clrDarkBlue: '#1f67bc',
  clrRed: '#b71e1e',
  clrLightRed: '#b41e1e',
  clrMouseClick: '#454c73',
  clrBorder: '#454c73',
  clrSubBorder: '#20233C',
  clrBorderLight: convertHexToRgba('#454c73', 0.5),
  clrBorderHover: '#747ba6',
  clrOnBackDisabled: '#454c73',
  clrLightGray: '#999999',
  clrYellow: '#faea05',
  clrPureRed: '#ff0000',
  cyanBlue: '#4cadd6',
  chambray: '#4e5782',
  paua: '#1a2042',
  darkGreen: '#02071f',
  navyBlue: '#0061b8',
  transparent: 'transparent',

  // order book
  fern: '#68B168',
  dodgerBlue: '#09f',
  malibu: '#0a84d6',
  olive: '#4c9201',
  cobalt: '#0057a3',

  btnPositiveGradientText: '#70cd70',
  btnNegativeGradientText: '#0099ff',
  btnOrderformHoverBg: '#000',

  // ****** new
  white: '#ffffff',
  black: '#000000'
};

export default {
  muiTheme: 'dark',

  tradePalette: {
    primaryBuy: '#01B067'
  },

  borderRadius: '3px',

  palette: {
    ...corePalette,

    contrastText: corePalette.white,
    clrlinePDark: '#41486D' /* portfolio dark text color */,

    confirmTradeModalHeaderBackground: convertHexToRgba('#020820', 0.2),
    modalCloseButton: '#A2AACE',
    // New reports section
    reportsBackground: '#010722',
    reportsButton: '#141b44',
    reportsButtonHighlight: '#41486d',
    reportsButtonText: convertHexToRgba(corePalette.white, 0.7),
    reportsTableHeaderBackground: '#10163B',
    reportsTableHeaderText: corePalette.clrPurple,

    orderBookHeaderText2: corePalette.clrPurple,
    orderBookTableCellText: corePalette.clrPurple,
    orderBookTableCellTextAmount: '#A2B1ED',
    orderBookTableCellTextBuy: corePalette.fern,
    orderBookTableCellTextBuyPriceInteger: '#5a975b',
    orderBookTableCellBuyColor: '#7ED321',
    orderBookTableCellSellColor: '#B62537',
    orderBookTableCellTextSell: corePalette.dodgerBlue,
    orderBookTableCellTextSellBright: corePalette.malibu,
    orderBookTableCellTextSellPriceInteger: corePalette.malibu,
    orderBookTableCellBuyProgress: corePalette.olive,
    orderBookTableCellSellProgress: corePalette.cobalt,

    depthChartBuy: '#7ED321',
    depthChartSell: '#B62537',
    depthChartSellsLineAdv: '#B62537',
    depthChartTickColor: '#7F8BC2',
    depthChartMidLineColor: '#262B4B',
    depthChartSliderHandle: '#41486D',
    depthChartSliderRail: '#131A42',

    orderBookIconFilter: 'invert(51%) sepia(41%) saturate(369%) hue-rotate(192deg) brightness(101%) contrast(90%)',
    orderBookBuyIconFilter: 'invert(80%) sepia(11%) saturate(4698%) hue-rotate(62deg) brightness(98%) contrast(40%)',
    orderBookAdvancedSellIconFilter:
      'invert(17%) sepia(65%) saturate(6102%) hue-rotate(322deg) brightness(96%) contrast(113%)',
    orderBookTooltipInternalLine: convertHexToRgba(corePalette.clrBorderHover, 0.3),
    orderBookTableSellCellTextNewColor: '#B62537',
    orderBookTableBuyCellTextNewColor: '#80C33B',

    orderFormBg: '#0C0F2A',
    orderFormBuyColor: '#80c33b',
    orderFormSellColor: '#b62537',

    depositBackground: corePalette.clrMainWindow,
    depositBorder: corePalette.clrBorderHover,
    depositText: corePalette.clrMouseClick,

    coinPairSelectBg: corePalette.clrBackground,
    coinPairSellArrow: corePalette.dodgerBlue,
    coinPairBuyArrow: corePalette.fern,
    coinPairSelectText2: corePalette.clrBorder,

    coinPairLightTextColor: '#41486d',
    coinPairSwitchBtnHoverFill: corePalette.white,

    coinPairNextBtnBg: corePalette.clrBlue,
    coinPairNextBtnText: corePalette.white,
    coinPairNextBtnActiveBg: corePalette.clrDarkBlue,
    coinPairNextBtnActiveText: corePalette.white,

    coinPairText: corePalette.clrPurple,

    coinPairBg: '#0c0f2a',
    coinPairBorder: convertHexToRgba('#7d8cbe', 0.3),
    coinPairSettingsMenuBg: '#0f1435',
    coinPairChartBtcText: '#41486d',

    // Gradient Btns
    gradientBtnNextBg:
      'linear-gradient(to right, rgb(14,113,184) 0%, rgb(14,113,184) 15%, rgb(0,157,225) 45%, rgb(0,157,225) 55%, rgb(14,113,184) 85%, rgb(14,113,184) 100%)',
    gradientBtnNextHoverBg:
      'linear-gradient(to right, rgb(16,129,210) 0%, rgb(16,131,214) 15%, rgb(0,157,225) 45%, rgb(0,157,225) 55%, rgb(16,131,214) 85%, rgb(16,129,210) 100%)',

    gradientBtnCloseBg:
      'linear-gradient(to right, rgb(205,36,36) 0%, rgb(205,36,36) 15%, rgb(255,31,31) 45%, rgb(255,31,31) 55%, rgb(205,36,36) 85%, rgb(205,36,36) 100%)',
    gradientBtnCloseHoverBg:
      'linear-gradient(to right, rgb(205,36,36) 0%, rgb(255,31,31) 15%, rgb(255,31,31) 45%, rgb(255,31,31) 55%, rgb(255,31,31) 85%, rgb(205,36,36) 100%)',

    settingsHoverColor: '#00C6C0',
    settingsText: corePalette.clrPurple,

    loginFormInputBackgroundColor: '#141B44',

    // ******* new

    defaultText: '#A2AACE',

    // --------------- Advanced Mode ----------------- //
    exchangeListBackground: '#131a42',
    exchangeListItemCoinName: '#41486d',
    exchangeListItemBoxShadow: '#4cadd6',
    exchangeListItemBackground: '#0c0f2a',
    coinPairAdvancedHeaderBackground: '#0c0f2a',
    coinPairAdvancedTickerItemTitle: '#41486d',
    coinPairAdvancedTickerItemValue: '#d4d4d4',
    settingPanelWrapperBackground: convertHexToRgba('#000', 0.5),
    settingMenuItemWrapperBackground: '#41486d',
    settingMenuItemWrapperBackgroundHover: '#5b638c',
    settingMenuItemLabelTooltip: '#7d8cbe',
    settingsInputTextBackground: '#41486d',
    settingsButtonBorder: '#7f8bc2',
    settingsFooterBackground: '#49517b',

    settingsExchangeListSearchWrapperBackground: '#41486d',
    settingsExchangeListSearchWrapperSvg: '#7d8cbe',
    settingsExchangeListItemWrapper: '#c8cee6',
    settingsExchangeListApiActiveIconSyncedBorder: '#41486d',
    settingsExchangeListApiActiveIconSynced: '#41486d',
    settingsExchangeListApiActiveIconBorder: '#4cadd6',
    settingsExchangeListApiActiveIconBackground: '#4cadd6',
    settingsExchangeListCheckIconActiveBorder: '#41486d',
    settingsExchangeListCheckIconBorder: '#4cadd6',
    settingsExchangeListCheckIconBackground: '#4cadd6',
    settingsExchangeListApiFormContentBackground: '#5b638c',
    settingsExchangeListCloseIcon: '#7d8cbe',
    settingsExchangeListInputFieldBackground: '#41486d',
    settingsExchangeListNextButton: '#7f8bc2',

    settingsAffiliateBoardWrapperBackround: '#141C44',
    settingsAffiliateBoardHeaderBackground: convertHexToRgba('#020820', 0.2),
    settingsAffiliateBoardHeaderText: '#A2AACE',
    settingsAffiliateBoardTableRow: '#7f8bc2',

    settingsPrivacySubmitButtonBackground: '#4CADD6',
    settingsPrivacySMSVerificationCodeInputBackground: '#10163B',
    settingsPrivacySMSVerificationCodeInput: '#7F8BC2',

    settingsViewModeItemSelectedBackground: '#49517b',
    settingsViewModeItemHoverBackground: '#5b638c',
    settingsViewModeItemBoxShadow: '#4cadd6',

    settingsCustomSelectedItemBackground: '#41486d',
    settingsCustomSelectedItemArrow: '#7d8cbe',
    settingsCustomOptionBackground: '#41486d',
    settingsCustomOptionSelectedBackground: '#3b4163',
    settingsCustomOptionHoverBackground: '#49517b',

    settingsLanguageDropdownPanelBackground: '#353b5e',
    settingsLanguageDropdownPanelBoxShadow: convertHexToRgba('#000000', 0.5),
    settingsLanguagePanelAfterBorder: '#131a42',
    settingsLanguagePanelItemHover: '#4cadd6',
    settingsLanguagePanelItemHoverBorderBottom: convertHexToRgba('#4cadd6', 0.5),

    orderBookRowHoverAdvancedBuyBackground: '#091316',
    orderBookRowHoverAdvancedSellBackground: '#23141c',
    orderBookRowAdvancedBuyBackground: '#091316',
    orderBookRowAdvancedSellBackground: '#071544',
    orderBookCellTooltipItemOwnPriceBuy: '#80C33B',
    orderBookCellTooltipItemOwnPriceSell: '#B62537',

    depthChartWrapperBorderLeft: convertHexToRgba('#41486d', 0.5),
    depthChartCustomTooltipContainerBackgroundNotArbMode: '#5d3540',
    depthChartControlsSliderThumbBackground: '#7d8cbe',
    depthChartControlSliderTrackBackground: '#41486d',
    depthChartControlTitle: '#41486d',
    depthChartControlSVGDisable: '#7f8bc2',

    orderFormCustomSelectedItemBackground: '#41486d',
    orderFormTabWrapperCurrentTabBorderBottom: '#0C0F2A',
    orderFormTabWrapperCurrentTabBackground: '#41486D',
    // --------------- Advanced Mode ----------------- //

    // --------------- Basic Mode ----------------- //
    orderHistoryWrapperBackground: '#010722',
    priceChartToolbarSelectedOptionBorderTop: '#41486d',
    priceChartTollbarPulsateDotBeforeBackground: '#01a4e9',
    priceChartTollbarPulsateDotAfterBoxShadow: convertHexToRgba('#000000', 0.3),

    billsWrapperBackground: '#080b21',
    billsColumnBorderLeft: '#41486d4c',
    billsColumnHoverBalanceWrapperBoxShadow: '#4cadd6',
    billsBalanceActive: '#a2aace',
    billsBalanceInActive: convertHexToRgba('#a2aace', 0.2),
    billsBalanceBorderRight: convertHexToRgba('#41486d', 0.5),
    billsSelectedCoinBalanceBackground: convertHexToRgba('#000000', 0.8),
    billsChipWrapperBoxShadow: convertHexToRgba('#000000', 0.5),
    billsChipWrapperDisabledAfterBackground: convertHexToRgba('#01030f', 0.8),
    billsChipBGImgBoxShadow: '#666769',

    loginButtonBackground: '#4cadd6',
    loginInInputBorder: '#141b44',
    loginInputHasErrorFocusBoxShadow: convertHexToRgba('#4cadd6', 0.35),
    loginSendButton: '#4cadd6',
    loginSubmitButtonBackground: '#41486d',
    loginSubmitButtonDisabledBackground: convertHexToRgba('#41486d', 0.5),

    logOutButtonHoverBackground: '#4cadd6',

    countrySelectedWrapperOpenedBackground: '#141b44',
    countrySelectedWrapperBackground: '#41486d',
    countrySelectArrow: '#41486d',
    countrySelectDropdownBackground: '#41486d',
    countrySelectDropdownBoxShadow: convertHexToRgba('#000000', 0.4),
    countrySelectOptionWrapperHoverBackground: '#4b537f',
    countrySelectOptionWrapperHoverBoxShadow: '#4cadd6',

    modeSwitchCustomSelectItemOpenedColor: '#7f8bc2',
    modeSwitchCustomSelectItemBackgroundColor: '#141b44',
    modeItemSelectedInModalBackground: '#49517B',
    modeItemSelectedBackground: '#41486d',
    modeItemSelectedHoverBackground: '#474f76',
    modeItemInModalBackground: '#5B638C',
    modeItemBackground: '#474f76',
    modeItemBoxShadow: '#4cadd6',
    modeItemDemoBackground: '#b62537',
    modePopupContent: '#7f8bc2',
    modePopupContentIsSMSViewOpenBackground: '#454c73',
    modePopupContentBackground: '#080a19',
    modePopupContentBoxShadow: convertHexToRgba('#000000', 0.5),
    modeCompareSectionBackground: '#131a42',
    modeInputWrapperForm: '#7986cb',
    modeInputWrapperFocused: '#3f51b5',
    modeInputWrapperError: '#f44336',
    modeInputWrapperOutlinedBorder: '#7e8ac0',
    modeValidationError: '#f44336',
    modeExchangeButtonDepositBackgroundLinearValue1: '#B4EC51',
    modeExchangeButtonDepositBackgroundLinearValue2: '#429321',
    modeExchangeButtonBackgroundLinearValue1: '#4A90E2',
    modeExchangeButtonBackgroundLinearValue2: '#50E3C2',
    modeExchangeButtonHoverDepositBackground: '#80C33B',
    modeExchangeButtonHoverBackground: '#4CADD6',
    modeInputWrapperLabelAfter: convertHexToRgba('#ffffff', 0.45),
    modeInput: '#7f8bc2',
    modeInputPlaceholder: convertHexToRgba('#ffffff', 0.23),

    selectDropDownSelectedItemBackground: '#141b44',
    selectDropDownArrowIcon: '#41486d',
    selectDropDownBackground: '#141b44',
    selectDropDownBoxShadow: convertHexToRgba('#000000', 0.2),
    selectDropDownOptionSelectedBackground: convertHexToRgba('#ffffff', 0.05),
    selectDropDownOptionColor: '#4cadd6',
    selectDropDownOptionBackground: '#10163b',

    orderHistoryTableHeaderColumn: '#7f8bc2',
    orderHistoryItem: '#7f8bc2',
    orderHistoryItemSpan: '#70a800',

    reportToolbarDatePickerHeader: '#454c73',
    reportToolbarDatePickerBorder: '#454c73',
    reportTollbarDatePickerMonthContainerBorderBottom: '#454c73',

    coinPairDropDownButtonActiveBackground: '#4CADD6',
    coinPairDropDownButtonBackground: '#41486D',
    coinPairDropDownButtonHoverBackground: '#4cadd6',
    coinPairDropDownContentWrapperBackground: '#0c0f2a',
    coinPairDropDownFilterButtonActiveBackground: '#5B638C',
    coinPairDropDownSearchInputWrapperBackground: '#141b44',
    coinPairDropDownSearchInputWrapperSVG: '#41486d',
    coinPairDropDownCustomTableHeaderBackground: '#10163B',
    coinPairDropDownCustomTableCell: '#7F8BC2',
    coinPairDropDownCheckIconBorder: '#41486d',
    coinPairDropDownCheckIconBackground: convertHexToRgba('#7d8cbe', 0.07),
    coinPairDropDownCheckIconCheckedBorder: '#41486d',
    coinPairDropDownCheckIconUnCheckedBorder: convertHexToRgba('#4cadd6', 0.5),
    coinPairDropDownCheckIconUnCheckedAfterBorder: '#4cadd6',

    coinSearchWrapperBackground: '#41486d',
    coinSearchInputCaret: '#a0a8cc',
    coinSearchInputPlaceholder: '#7f8bc2',
    coinSearchDropdownBackground: '#41486d',
    coinSearchDropDownBorderTop: convertHexToRgba('#ffffff', 0.15),
    coinSearchDropDownBoxShadow: convertHexToRgba('#000000', 0.3),
    coinSearchItemWrapperHoverBackground: '#474f76',
    coinSearchItemWrapperHoverBoxShadow: '#4cadd6',

    confirmTradeModalCoinName: '#41486d',
    confirmTradeModalSubmitButtonBackground: '#81C53C',

    autoConvertSliderTrackStyleDefaultBackground: '#4CADD6',
    autoConvertSliderTrackStyleCoinPairActive: '#4cadd6',

    topETFWrapperBackground: '#0c0f2a',
    topETFCoinsWrapperHoverBackground: '#10163b',
    topETFCoinLabelBackground: '#41466d',
    topETFCoinWrapperBorderNonZero: '#e2e3e4',

    orderBookExchangeCellInnerAfterEffectBuyValue1: '#091316',
    orderBookExchangeCellInnerAfterEffectBuyValue2: convertHexToRgba('#020518', 0),
    orderBookExchangeCellInnerAfterEffectSellValue1: '#23141c',
    orderBookExchangeCellInnerAfterValue1: '#0C0F2A',

    orderBookPriceCellResultNumberAfterBuy: '#94e441',
    orderBookPriceCellResultNumberAfterSell: '#ea3249',

    orderBookRowBackground: '#0c0f2a',
    orderBookMidRowHeaderBackground: '#10163b',

    orderBookAdvancedHeaderLabel: '#d4d4d4',
    orderBookAdvancedHeaderBackground: '#010722',

    walletTableRowWrapperAfterBacgkround: convertHexToRgba('#1a2042', 0.5),
    walletTableSymbol: '#a349a3',

    checkBoxWrapper: '#7f8bc2',
    checkBoxIconCheckedBorder: '#41486d',
    checkboxIconCheckedBackground: convertHexToRgba('#7d8cbe', 0.07),
    checkBoxIconUnchecked: '#4cadd6',

    connectionLostWrapperBackground: convertHexToRgba('#000000', 0.4),

    gradientButtonContentGlowBackgroundValue1: convertHexToRgba('#ffffff', 0.5),
    gradientButtonContentGlowBackgroundValue2: '#ffffff',

    modalOverlayerBackground: convertHexToRgba('#000000', 0.4),
    modalPanelBackground: '#141c44',
    modalPanelBoxShadow: convertHexToRgba('#000000', 0.5),
    modalCloseButtonBackground: '#2780ff',
    orderBookViewModeIconActiveBackground: '#141B44',

    scrollUpButton: '#7f8bc2',
    scrollUpButtonBackground: convertHexToRgba('#0d112b', 0.5),
    scrollUpButtonHoverBackground: '#0d112b',

    switchWrapperBackground: '#41486D',
    switchWrapperBeforeUncheckedBackground: '#4cadd6',

    enableEmail2FAInputWrapperBorder: '#2780ff',
    twofaModalWrapperBackground: convertHexToRgba('#000000', 0.435)
    // --------------- Basic Mode ----------------- //
  }
};
