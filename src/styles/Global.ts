import { createGlobalStyle, css } from 'styled-components';
import { mobile } from '@/utils/media';

export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
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

  :root, html[data-theme='light'] {
    color-scheme: light;
    --primary: #f89200;
    --secondary: #F6F8FA;

    --text: #000;
    --header_text: #FFF;

    --warning_header_bg: #1B1C1D;
    --warning_header_text: #fff;

    --scrollbar_bg: #F6F8FA;
    --scrollbar_thumb: #f89200;

    --mvpCard_id: #421411;
    --mvpCard_name: #f89200;
    --mvpCard_bg: #FFF;
    --mvpCard_text: #421411;
    --mvpCard_killButton: #D10000;
    --mvpCard_editButton: #f89200;

    --mvpCard_controls_showMap: #00a8ff;
    --mvpCard_controls_edit: #f89200;
    --mvpCard_controls_delete: #D10000;

    --timers_passed: #D10000;
    --timers_normal: #421411;
    --timers_respawning: #62831f;

    --switch_bg: #ffa800;
    --switch_handle: #F6F8FA;

    --modal_bg: #FFF;
    --modal_text: #421411;
    --modal_hl: #1B1C1D;
    --modal_name: #ffa800;
    --modal_time: #ffa800;
    --modal_button: #f89200;

    --modal_datePicker_border: #000;

    --modal_serverSelect_bg: #F6F8FA;
    --modal_serverSelect_bgActive: #f89200;
    --modal_serverSelect_text: #000;
    --modal_serverSelect_textActive: #FFF;
    --modal_serverSelect_border: #f89200;


    --modal_changeMap_border: #00a8ff;
    --modal_changeMap_text: #000;
    --modal_changeMap_selectedMapBorder: #ffa800;

    --filterSearch_bg: #FFF;
    --filterSearch_border: #f89200;
    --filterSearch_text: #000;
    --filterSearch_border_focus: #000;

    --languagePicker_bg: #F6F8FA;
    --languagePicker_border: #f89200;
    --languagePicker_text: #421411;

    --footer_text: #000;
    --footer_link: #53338D;

    color: var(--text);
  }

  html[data-theme='dark'] {
    color-scheme: dark;
    --primary: #1B1C1D;
    --secondary: #2e2e2e;

    --text: #fff;
    --header_text: #fff;

    --warning_header_bg:  #f89200;
    --warning_header_text: #000;

    --scrollbar_bg: #2e2e2e;
    --scrollbar_thumb: #f89200;

    --mvpCard_id: #fff;
    --mvpCard_name: #fff;
    --mvpCard_bg: #262626;
    --mvpCard_text: #fff;
    --mvpCard_killButton: #D10000;
    --mvpCard_editButton: #f89200;
    --mvpCard_controls_showMap: #00a8ff;
    --mvpCard_controls_edit: #f89200;
    --mvpCard_controls_delete: #D10000;

    --timers_passed: #D10000;
    --timers_normal: #fff;
    --timers_respawning: #62831f;

    --switch_bg: #FFF;
    --switch_handle: #000;

    --modal_bg: #262626;
    --modal_text: #FFF;
    --modal_hl: #FFF;
    --modal_name: #f89200;
    --modal_time: #f89200;
    --modal_button: #f89200;

    --modal_datePicker_border: #FFF;

    --modal_serverSelect_bg: #454545;
    --modal_serverSelect_bgActive: #f89200;
    --modal_serverSelect_text: #FFF;
    --modal_serverSelect_textActive: #FFF;
    --modal_serverSelect_border: transparent;


    --modal_changeMap_border: #00a8ff;
    --modal_changeMap_text: #FFF;
    --modal_changeMap_selectedMapBorder: #ffa800;

    --filterSearch_bg: #262626;
    --filterSearch_border: #1B1C1D;
    --filterSearch_text: #FFF;
    --filterSearch_border_focus: #fff;

    --languagePicker_bg: #454545;
    --languagePicker_border: #1B1C1D;
    --languagePicker_text: #FFF;

    --footer_text: #FFF;
    --footer_link: #f89200;

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

  button, input {
    border: 0;
  }

  button {
    cursor: pointer;
  }

  *:not(body,html)::-webkit-scrollbar-track {
    background-color: var(--scrollbar_bg);
  }

  *:not(body,html)::-webkit-scrollbar {
    width: 1.6rem;

    ${mobile(css`
      width: 1.2rem;
    `)}
  }

  *:not(body,html)::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border: 4px solid transparent;
    background-clip: content-box;
    background-color: var(--scrollbar_thumb);

    ${mobile(css`
      border-radius: 10px;
    `)}
  }
`;
