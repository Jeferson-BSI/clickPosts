import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
  colors: {
      lightGray:  string;
      background:  string;
      textTitleHeader: string;
      cardBackground: string;
      userBackground: string;
      userTitle: string;
      timeColor: string;
      text_primary: string;
      text_secondary: string;
      banner: string;
      label: string;
      icons: string;
      iconsProfile: string;
      bottomSheetBackground: string;
      titleModal: string;
      textInput: string;
      modeBackground: string,
      modeBorde: string;
      modeText: string;
      confirmationModal: string,
      confirmationModalWhite: string,
      confirmationModalBody: string,

      
      blue: string;
      blueLight: string;
      white: string;
      black: string;

      textTitle: string;
      textBody: string;


      brand: string;
      surface_primary: string;
      surface_secondary: string;


      text_on_brand_color: string;

      stroke: string;
      border: string;
      line: string;
      DotsThreeVertical: string;
  },
  
  fonts: {
    regular: string;
    medium: string;
    bold: string;
  }

  }
}