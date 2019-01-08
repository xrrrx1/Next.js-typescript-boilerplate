import React, { useContext, Fragment } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import Title from "../components/Title";
import { TextColorContext } from "../context/context";

type Theme = {
  fontFamily: string;
};

type Styles = {
  textColor: string;
  theme: Theme;
};

const GlobalStyle = createGlobalStyle<Styles>`
  body {
    color: ${props => props.textColor};
    font-family: ${props => props.theme.fontFamily};
    overflow-y: scroll;
  }
`;

export const App: React.FunctionComponent = () => {
  const TextColor = useContext(TextColorContext);

  return (
    <ThemeProvider theme={{ fontFamily: "Georgia, Times New Roman, Times, serif" }}>
      <Fragment>
        <GlobalStyle textColor={TextColor} />

        <Title />

        <span>default</span>
      </Fragment>
    </ThemeProvider>
  );
};
