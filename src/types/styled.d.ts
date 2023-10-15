import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    primaryColor: string;
    formColor: string;
    formTextColor: string;
    allTextsColor: string;
    buttonsHoverColor: string;
    customCheckboxColor: string;
  }
}
