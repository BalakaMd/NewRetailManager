import { useEffect } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from './theme';

// Global styles with RTL support
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    direction: rtl;
    font-size: 16px;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily.hebrew};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    color: ${({ theme }) => theme.colors.text.primary};
    background-color: ${({ theme }) => theme.colors.background.secondary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    min-height: 100vh;
    width: 100%;
  }

  /* RTL support for logical properties */
  button, input, textarea, select {
    direction: rtl;
    text-align: right;
  }

  /* Custom scrollbar for WebKit browsers */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background.tertiary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray[400]};
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.gray[500]};
  }
`;

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  useEffect(() => {
    // Ensure HTML has correct direction
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'he');
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        {/* Application pages will be here */}
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h1 style={{ color: theme.colors.primary.main }}>
            Shva Arena - Retail Manager
          </h1>
          <p style={{ color: theme.colors.text.secondary, marginTop: '1rem' }}>
            Project configured. Design system ready to use.
          </p>
        </div>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

