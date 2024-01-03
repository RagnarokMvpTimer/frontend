import { COLORS } from './colors';

export const Themes = {
  dark: {
    id: 'dark',

    colors: {
      primary: COLORS.zinc900,
      secondary: '#2e2e2e',

      headerTexts: COLORS.white,
      text: COLORS.white,

      scrollbar: {
        bg: '#2e2e2e',
        thumb: COLORS.orange,
      },

      mvpCard: {
        id: COLORS.white,
        name: COLORS.white,
        bg: COLORS.zinc8002,
        text: COLORS.white,
        killButton: COLORS.red,
        editButton: COLORS.orange,

        controls: {
          showMap: COLORS.blue,
          edit: COLORS.orange,
          delete: COLORS.red,
        },
      },

      timers: {
        passed: COLORS.red,
        normal: COLORS.white,
        respawning: COLORS.green,
      },

      switch: {
        bg: COLORS.white,
        handle: COLORS.black,
      },

      modal: {
        bg: COLORS.zinc8002,
        text: COLORS.white,
        hl: COLORS.white,
        name: COLORS.orange,
        time: COLORS.orange,
        button: COLORS.orange,

        datePicker: {
          border: COLORS.white,
        },

        serverSelect: {
          bg: COLORS.zinc700,
          bgActive: COLORS.orange,
          text: COLORS.white,
          textActive: COLORS.white,
        },

        changeMap: {
          border: COLORS.blue,
          text: COLORS.white,
          selectedMapBorder: COLORS.yellow,
        },
      },

      filterSearch: {
        bg: COLORS.zinc8002,
        border: COLORS.zinc900,
        text: COLORS.white,
      },

      languagePicker: {
        bg: COLORS.zinc700,
        border: COLORS.zinc900,
        text: COLORS.white,
      },

      footer: {
        text: COLORS.white,
        link: COLORS.orange,
      },
    },
  },

  light: {
    id: 'light',

    colors: {
      primary: COLORS.orange,
      secondary: COLORS.white2,

      headerTexts: COLORS.white,
      text: COLORS.black,

      scrollbar: {
        bg: COLORS.white2,
        thumb: COLORS.orange,
      },

      mvpCard: {
        id: COLORS.red2,
        name: COLORS.orange,
        bg: COLORS.white,
        text: COLORS.red2,
        killButton: COLORS.red,
        editButton: COLORS.orange,

        controls: {
          showMap: COLORS.blue,
          edit: COLORS.orange,
          delete: COLORS.red,
        },
      },

      timers: {
        passed: COLORS.red,
        normal: COLORS.red2,
        respawning: COLORS.green,
      },

      switch: {
        bg: COLORS.yellow,
        handle: COLORS.white2,
      },

      modal: {
        bg: COLORS.white,
        text: COLORS.red2,
        hl: COLORS.zinc900,
        name: COLORS.yellow,
        time: COLORS.yellow,
        button: COLORS.orange,

        datePicker: {
          border: COLORS.black,
        },

        serverSelect: {
          bg: COLORS.white2,
          bgActive: COLORS.orange,
          text: COLORS.black,
          textActive: COLORS.white,
        },

        changeMap: {
          border: COLORS.blue,
          text: COLORS.black,
          selectedMapBorder: COLORS.yellow,
        },
      },

      filterSearch: {
        bg: COLORS.white,
        border: COLORS.orange,
        text: COLORS.black,
      },

      languagePicker: {
        bg: COLORS.white2,
        border: COLORS.orange,
        text: COLORS.red2,
      },

      footer: {
        text: COLORS.black,
        link: COLORS.purple,
      },
    },
  },
};
