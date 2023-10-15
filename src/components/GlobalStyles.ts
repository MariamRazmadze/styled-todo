import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 2.4rem;
  font-family: sans-serif;
  color: white;
  background-color:${({ theme }) => theme.background};
  font-family: "Quicksand";
  font-weight: 500;
  overflow-x: hidden;
  font-family: "Quicksand";
}


.app {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: auto auto 1fr auto;
}

h3 {
  margin-right: 1.6rem;
  font-size: 2.4rem;
}



`;

export default GlobalStyles;
