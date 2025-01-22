import { SETTINGS, registerSettings, registerGMScreenSettings } from './module/settings.js';
import { TriniumLogger } from './module/logger.js';

class TriniumChatButtonsInit {
  static init() {
    registerSettings();
    registerGMScreenSettings();

    this.logger = new TriniumLogger(SETTINGS.MODULE_NAME);
    this.addSettingsHeaders();
    this.wrapChatControls();
  }

  static wrapChatControls() {
    Hooks.on('renderChatLog', (chatLog, html) => {
      const chatControls = html.find('#chat-controls');
      if (chatControls.length && !chatControls.parent().hasClass('chat-controls-wrapper')) {
        chatControls.wrap('<div class="chat-controls-wrapper"></div>');
      }
    });
  }

  static addSettingsHeaders() {
    Hooks.on('renderSettingsConfig', (app, html, data) => {
      $('<div>')
        .addClass('form-group group-header trinium-settings-header')
        .html(game.i18n.localize('TRINIUMCB.GMScreenHeader'))
        .insertBefore($('[name="trinium-chat-gm-screen.enableGMScreen"]').closest('div.form-group'));
      $('<div>')
        .addClass('form-group group-header trinium-settings-header')
        .html(game.i18n.localize('TRINIUMCB.DebugHeader'))
        .insertBefore($('[name="trinium-chat-gm-screen.enableCSSTweaks"]').closest('div.form-group'));
    });
  }
}

Hooks.once('init', () => {
  TriniumChatButtonsInit.init();
  if (game.settings.get(SETTINGS.MODULE_NAME, SETTINGS.ENABLE_GM_SCREEN)) {
    import('./module/gm-screen.js').then((module) => module.init());
  }
});
