import { GM_SCREEN_PRESETS } from '../templates/gm-screen-presets.js';

export const SETTINGS = {
  MODULE_NAME: 'trinium-chat-gm-screen',
  WINDOW_MODULE_NAME: 'triniumChatGmScreen',

  LOG_LEVEL: 'logLevel',

  ENABLE_GM_SCREEN: 'enableGMScreen',

  GM_SCREEN_CONTENT_TAB1: 'gmScreenContent_tab1',
  GM_SCREEN_CONTENT_TAB2: 'gmScreenContent_tab2',
  GM_SCREEN_CONTENT_TAB3: 'gmScreenContent_tab3',
  GM_SCREEN_CONTENT_TAB4: 'gmScreenContent_tab4',
  GM_SCREEN_CONTENT_TAB5: 'gmScreenContent_tab5',
  GM_SCREEN_CONTENT_TAB6: 'gmScreenContent_tab6',
  GM_SCREEN_CONTENT_TAB7: 'gmScreenContent_tab7',
  GM_SCREEN_CONTENT_TAB8: 'gmScreenContent_tab8',
  GM_SCREEN_CONTENT_TAB9: 'gmScreenContent_tab9',
  GM_SCREEN_CONTENT_TAB10: 'gmScreenContent_tab10',
  GM_SCREEN_CONTENT_TAB11: 'gmScreenContent_tab11',
  GM_SCREEN_CONTENT_TAB12: 'gmScreenContent_tab12',

  GM_SCREEN_CONTENT_MENU: 'gmScreenContentMenu',
  NUMBER_OF_COLUMNS: 'numberOfColumns',
  GM_SCREEN_MODE: 'gmScreenMode',
  DEFAULT_COLUMN_WIDTH: 'defaultColumnWidth',
  GM_SCREEN_HEIGHT: 'gmScreenHeight',
  GM_SCREEN_LEFT_MARGIN: 'gmScreenLeftMargin',
  GM_SCREEN_RIGHT_MARGIN: 'gmScreenRightMargin',
  EXPAND_BOTTOM_MODE: 'expandBottomMode',
  GM_SCREEN_LAYOUT: 'gmScreenLayout',
  GM_SCREEN_DEFAULT_TABS: 'gmScreenDefaultTabs',
};

export const DEFAULT_COLUMN = {
  rows: 1,
  width: 0,
};

export function registerGMScreenSettings() {
  game.settings.register(SETTINGS.MODULE_NAME, SETTINGS.GM_SCREEN_LAYOUT, {
    name: game.i18n.localize('TCB_SETTINGS.GMScreenLayout'),
    hint: game.i18n.localize('TCB_SETTINGS.GMScreenLayoutHint'),
    scope: 'world',
    config: false,
    type: Object,
    default: {},
  });

  game.settings.register(SETTINGS.MODULE_NAME, SETTINGS.GM_SCREEN_DEFAULT_TABS, {
    name: game.i18n.localize('TCB_SETTINGS.GMScreenDefaultTabs'),
    hint: game.i18n.localize('TCB_SETTINGS.GMScreenDefaultTabs'),
    scope: 'world',
    config: false,
    type: Object,
    default: {},
  });

  game.settings.register(SETTINGS.MODULE_NAME, SETTINGS.ENABLE_GM_SCREEN, {
    name: game.i18n.localize('TCB_SETTINGS.EnableGMScreen'),
    hint: game.i18n.localize('TCB_SETTINGS.EnableGMScreenHint'),
    scope: 'world',
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(SETTINGS.MODULE_NAME, SETTINGS.NUMBER_OF_COLUMNS, {
    name: game.i18n.localize('TCB_SETTINGS.NumberOfColumns'),
    hint: game.i18n.localize('TCB_SETTINGS.NumberOfColumnsHint'),
    scope: 'world',
    config: false,
    type: Number,
    range: {
      min: 1,
      max: 4,
      step: 1,
    },
    default: 1,
  });

  game.settings.register(SETTINGS.MODULE_NAME, SETTINGS.DEFAULT_COLUMN_WIDTH, {
    name: game.i18n.localize('TCB_SETTINGS.DefaultColumnWidth'),
    hint: game.i18n.localize('TCB_SETTINGS.DefaultColumnWidthHint'),
    scope: 'world',
    config: false,
    type: Number,
    default: 300,
  });

  game.settings.register(SETTINGS.MODULE_NAME, SETTINGS.GM_SCREEN_HEIGHT, {
    name: game.i18n.localize('TCB_SETTINGS.GMScreenHeight'),
    hint: game.i18n.localize('TCB_SETTINGS.GMScreenHeightHint'),
    scope: 'world',
    config: false,
    type: Number,
    range: {
      min: 10,
      max: 100,
      step: 5,
    },
    default: 50,
  });

  game.settings.register(SETTINGS.MODULE_NAME, SETTINGS.GM_SCREEN_MODE, {
    name: game.i18n.localize('TCB_SETTINGS.GMScreenMode'),
    hint: game.i18n.localize('TCB_SETTINGS.GMScreenModeHint'),
    scope: 'world',
    config: false,
    type: String,
    choices: {
      'right-side': game.i18n.localize('TCB_SETTINGS.RightSideMode'),
      'left-side': game.i18n.localize('TCB_SETTINGS.LeftSideMode'),
      bottom: game.i18n.localize('TCB_SETTINGS.BottomMode'),
    },
    default: 'right-side',
  });

  game.settings.register(SETTINGS.MODULE_NAME, SETTINGS.GM_SCREEN_LEFT_MARGIN, {
    name: game.i18n.localize('TCB_SETTINGS.GMScreenLeftMargin'),
    hint: game.i18n.localize('TCB_SETTINGS.GMScreenLeftMarginHint'),
    scope: 'world',
    config: false,
    type: Number,
    default: 20,
  });

  game.settings.register(SETTINGS.MODULE_NAME, SETTINGS.GM_SCREEN_RIGHT_MARGIN, {
    name: game.i18n.localize('TCB_SETTINGS.GMScreenRightMargin'),
    hint: game.i18n.localize('TCB_SETTINGS.GMScreenRightMarginHint'),
    scope: 'world',
    config: false,
    type: Number,
    default: 20,
  });

  game.settings.register(SETTINGS.MODULE_NAME, SETTINGS.EXPAND_BOTTOM_MODE, {
    name: game.i18n.localize('TCB_SETTINGS.ExpandBottomMode'),
    hint: game.i18n.localize('TCB_SETTINGS.ExpandBottomModeHint'),
    scope: 'world',
    config: false,
    type: Boolean,
    default: true,
  });

  // Hidden

  game.settings.register(SETTINGS.MODULE_NAME, SETTINGS.GM_SCREEN_CONTENT_TAB1, {
    name: game.i18n.localize('TCB_SETTINGS.GMScreenContentTab1'),
    scope: 'world',
    config: false,
    type: String,
    default: GM_SCREEN_PRESETS.nameGenerators.content,
  });

  game.settings.register(SETTINGS.MODULE_NAME, SETTINGS.GM_SCREEN_CONTENT_TAB2, {
    name: game.i18n.localize('TCB_SETTINGS.GMScreenContentTab2'),
    scope: 'world',
    config: false,
    type: String,
    default: GM_SCREEN_PRESETS.dnd5eActionsInCombat.content,
  });

  game.settings.register(SETTINGS.MODULE_NAME, SETTINGS.GM_SCREEN_CONTENT_TAB3, {
    name: game.i18n.localize('TCB_SETTINGS.GMScreenContentTab3'),
    scope: 'world',
    config: false,
    type: String,
    default: GM_SCREEN_PRESETS.dnd5eConditions.content,
  });

  game.settings.register(SETTINGS.MODULE_NAME, SETTINGS.GM_SCREEN_CONTENT_TAB4, {
    name: game.i18n.localize('TCB_SETTINGS.GMScreenContentTab4'),
    scope: 'world',
    config: false,
    type: String,
    default: GM_SCREEN_PRESETS.dnd5eExhaustionTravel.content,
  });

  game.settings.register(SETTINGS.MODULE_NAME, SETTINGS.GM_SCREEN_CONTENT_TAB5, {
    name: game.i18n.localize('TCB_SETTINGS.GMScreenContentTab5'),
    scope: 'world',
    config: false,
    type: String,
    default: GM_SCREEN_PRESETS.dnd5eTaskDifficulty.content,
  });
  game.settings.register(SETTINGS.MODULE_NAME, SETTINGS.GM_SCREEN_CONTENT_TAB6, {
    name: game.i18n.localize('TCB_SETTINGS.GMScreenContentTab6'),
    scope: 'world',
    config: false,
    type: String,
    default: GM_SCREEN_PRESETS.dnd5eMagicItems.content,
  });
  game.settings.register(SETTINGS.MODULE_NAME, SETTINGS.GM_SCREEN_CONTENT_TAB7, {
    name: game.i18n.localize('TCB_SETTINGS.GMScreenContentTab7'),
    scope: 'world',
    config: false,
    type: String,
    default: '',
  });
  game.settings.register(SETTINGS.MODULE_NAME, SETTINGS.GM_SCREEN_CONTENT_TAB8, {
    name: game.i18n.localize('TCB_SETTINGS.GMScreenContentTab8'),
    scope: 'world',
    config: false,
    type: String,
    default: '',
  });
  game.settings.register(SETTINGS.MODULE_NAME, SETTINGS.GM_SCREEN_CONTENT_TAB9, {
    name: game.i18n.localize('TCB_SETTINGS.GMScreenContentTab9'),
    scope: 'world',
    config: false,
    type: String,
    default: '',
  });
  game.settings.register(SETTINGS.MODULE_NAME, SETTINGS.GM_SCREEN_CONTENT_TAB10, {
    name: game.i18n.localize('TCB_SETTINGS.GMScreenContentTab10'),
    scope: 'world',
    config: false,
    type: String,
    default: '',
  });
  game.settings.register(SETTINGS.MODULE_NAME, SETTINGS.GM_SCREEN_CONTENT_TAB11, {
    name: game.i18n.localize('TCB_SETTINGS.GMScreenContentTab11'),
    scope: 'world',
    config: false,
    type: String,
    default: '',
  });
  game.settings.register(SETTINGS.MODULE_NAME, SETTINGS.GM_SCREEN_CONTENT_TAB12, {
    name: game.i18n.localize('TCB_SETTINGS.GMScreenContentTab12'),
    scope: 'world',
    config: false,
    type: String,
    default: '',
  });
}
export function registerSettings() {
  game.settings.register(SETTINGS.MODULE_NAME, SETTINGS.LOG_LEVEL, {
    name: game.i18n.localize('TCB_SETTINGS.LogLevel'),
    hint: game.i18n.localize('TCB_SETTINGS.LogLevelHint'),
    scope: 'client',
    config: true,
    type: String,
    choices: {
      debug: game.i18n.localize('TCB_SETTINGS.LogLevelDebug'),
      info: game.i18n.localize('TCB_SETTINGS.LogLevelInfo'),
      warn: game.i18n.localize('TCB_SETTINGS.LogLevelWarn'),
      error: game.i18n.localize('TCB_SETTINGS.LogLevelError'),
    },
    default: 'warn',
  });
}
