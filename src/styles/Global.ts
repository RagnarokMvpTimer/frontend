import { css } from '@linaria/core';

export const globals = css`
  :global() {
    *,
    *::after,
    *::before {
      padding: 0;
      margin: 0;
      outline: 0;
      box-sizing: border-box;
      font-family: 'Jost', sans-serif;
    }

    #root {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    :root,
    html[data-theme='light'] {
      color-scheme: light;
      --primary: #f89200;
      --secondary: #f6f8fa;

      --text: #000;
      --header_text: #fff;

      --warning_header_bg: #1b1c1d;
      --warning_header_text: #fff;

      --scrollbar_bg: #f6f8fa;
      --scrollbar_thumb: #f89200;

      --mvpCard_id: #421411;
      --mvpCard_name: #f89200;
      --mvpCard_bg: #fff;
      --mvpCard_text: #421411;
      --mvpCard_killButton: #d10000;
      --mvpCard_editButton: #f89200;

      --mvpCard_controls_showMap: #00a8ff;
      --mvpCard_controls_edit: #f89200;
      --mvpCard_controls_delete: #d10000;

      --timers_passed: #d10000;
      --timers_normal: #421411;
      --timers_respawning: #62831f;

      --switch_bg: #ffa800;
      --switch_handle: #f6f8fa;

      --modal_bg: #fff;
      --modal_text: #421411;
      --modal_hl: #1b1c1d;
      --modal_name: #ffa800;
      --modal_time: #ffa800;
      --modal_button: #f89200;

      --modal_datePicker_border: #000;

      --modal_serverSelect_bg: #f6f8fa;
      --modal_serverSelect_bgActive: #f89200;
      --modal_serverSelect_text: #000;
      --modal_serverSelect_textActive: #fff;
      --modal_serverSelect_border: #f89200;

      --modal_changeMap_border: #00a8ff;
      --modal_changeMap_text: #000;
      --modal_changeMap_selectedMapBorder: #ffa800;

      --filterSearch_bg: #fff;
      --filterSearch_border: #f89200;
      --filterSearch_text: #000;
      --filterSearch_border_focus: #000;

      --languagePicker_bg: #f6f8fa;
      --languagePicker_border: #f89200;
      --languagePicker_text: #421411;

      --footer_text: #000;
      --footer_link: #53338d;

      --pulse_color: #e5e5e5;

      color: var(--text);
    }

    html[data-theme='dark'] {
      color-scheme: dark;
      --primary: #1b1c1d;
      --secondary: #2e2e2e;

      --text: #fff;
      --header_text: #fff;

      --warning_header_bg: #f89200;
      --warning_header_text: #000;

      --scrollbar_bg: #2e2e2e;
      --scrollbar_thumb: #f89200;

      --mvpCard_id: #fff;
      --mvpCard_name: #fff;
      --mvpCard_bg: #262626;
      --mvpCard_text: #fff;
      --mvpCard_killButton: #d10000;
      --mvpCard_editButton: #f89200;
      --mvpCard_controls_showMap: #00a8ff;
      --mvpCard_controls_edit: #f89200;
      --mvpCard_controls_delete: #d10000;

      --timers_passed: #d10000;
      --timers_normal: #fff;
      --timers_respawning: #62831f;

      --switch_bg: #fff;
      --switch_handle: #000;

      --modal_bg: #262626;
      --modal_text: #fff;
      --modal_hl: #fff;
      --modal_name: #f89200;
      --modal_time: #f89200;
      --modal_button: #f89200;

      --modal_datePicker_border: #fff;

      --modal_serverSelect_bg: #454545;
      --modal_serverSelect_bgActive: #f89200;
      --modal_serverSelect_text: #fff;
      --modal_serverSelect_textActive: #fff;
      --modal_serverSelect_border: transparent;

      --modal_changeMap_border: #00a8ff;
      --modal_changeMap_text: #fff;
      --modal_changeMap_selectedMapBorder: #ffa800;

      --filterSearch_bg: #262626;
      --filterSearch_border: #1b1c1d;
      --filterSearch_text: #fff;
      --filterSearch_border_focus: #fff;

      --languagePicker_bg: #454545;
      --languagePicker_border: #1b1c1d;
      --languagePicker_text: #fff;

      --footer_text: #fff;
      --footer_link: #f89200;

      --pulse_color: #404040;

      color: var(--text);
    }

    html {
      font-size: 62.5%;
    }

    body,
    button,
    input,
    textarea {
      font-size: 1.6rem;
    }

    a {
      text-decoration: none;
    }

    button,
    input {
      border: 0;
    }

    button {
      cursor: pointer;
    }

    *:not(body, html)::-webkit-scrollbar-track {
      background-color: var(--scrollbar_bg);
    }

    *:not(body, html)::-webkit-scrollbar {
      width: 1.6rem;

      @media (max-width: ${1000 / 16}em) {
        width: 1.2rem;
      }
    }

    *:not(body, html)::-webkit-scrollbar-thumb {
      border-radius: 8px;
      border: 4px solid transparent;
      background-clip: content-box;
      background-color: var(--scrollbar_thumb);

      @media (max-width: ${1000 / 16}em) {
        border-radius: 10px;
      }
    }
  }
`;
