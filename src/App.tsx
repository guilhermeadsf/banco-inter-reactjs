import React from 'react';

import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <h1>Teste</h1>
    <GlobalStyles />
  </ThemeProvider>
);

export default App;
