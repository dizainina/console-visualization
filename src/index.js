import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Consolas from "./Consolas/consolas.ttf";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: consolas;
}
@font-face{
  font-family: consolas;
  src: url(${Consolas}) format('truetype');
}
`;

//глобальные темы, используем ThemeProvider, а также можно прописать стили для разных экранов
const theme = {
  colors: {
    primary: "green",
    secondary: "red",
  },
  media: {
    phone: "(max-width: 425px)",
    tablet: "(max-width: 768px) and (min-width: 425px)",
  },
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <Global />
    <App />
  </ThemeProvider>
);
