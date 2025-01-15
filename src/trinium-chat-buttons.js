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
        chatControls.parent().append('<div id="tcb-midi-controls"></div>');
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
    import('./module/chat-buttons/gm-screen.js').then((module) => module.init());
  }
  if (game.settings.get(SETTINGS.MODULE_NAME, SETTINGS.ENABLE_CSS_TWEAKS)) {
    const style = document.createElement('style');
    style.id = 'trinium-chat-gm-screen-css-tweaks';
    style.innerHTML = `
      /* Darker sidebar, no gap to the edge of the screen */
      #sidebar.app {
          background-color: rgba(25,25,25,0.6);
          margin: 0px;
          height: 100%;
          border-radius: 0;
      }

      /* No gap below sidebar tab buttons */
      #sidebar-tabs.tabs {
          margin-bottom: 0px;
      }
    `;
    document.head.appendChild(style);
  }
});
