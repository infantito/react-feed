import React, { memo } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  background: '#1b2e46' ,
  border: '#80bdff',
  black: '#393939',
  blue: '#4d90d8',
  text: '#fff',
  submit: '#007bff',
  maxWidth: '600px',
  bs: '0 0 0 0.2rem rgba(0,123,255,.25)',
};

const StyledPage = styled.div`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
`;

const Inner = styled.div`
  height: 100%;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

const GlobalStyles = createGlobalStyle`
  html {
    background-color: ${theme.background};
    box-sizing: border-box;
    font-size: 10px;
    min-height: 100%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: ${theme.submit};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  ::-webkit-scrollbar {
    background-color: ${theme.border};
    border-left: 1px solid ${theme.submit};
    width: 12.5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${theme.submit};
    outline: 10px solid transparent;
  }
`;

const App = props => (
  <ThemeProvider theme={theme}>
    <StyledPage>
      <GlobalStyles />
      <Inner>
        {props.children}
      </Inner>
    </StyledPage>
  </ThemeProvider>
);

export default memo(App);
