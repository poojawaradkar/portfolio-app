import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { hydrate } from 'react-dom';
import { loadableReady } from '@loadable/component';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from 'Components/Shared/Theme';

import App from './App';

const render = Component => {
  hydrate(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </ThemeProvider>,
    document.getElementById('root'),
  );
};

loadableReady().then(() => {
  render(App);
});

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}
