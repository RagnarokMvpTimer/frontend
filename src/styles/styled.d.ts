import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    id: string;

    colors: {
      primary: string;
      secondary: string;

      text: string;

      mvpCard: {
        name: string;
        bg: string;
        text: string;
      };

      switch: {
        bg: string;
        handle: string;
      };
    };
  }
}
