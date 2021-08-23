import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';
import { hydrate } from 'react-dom';
import { loadableReady } from '@loadable/component';

import App from './App';


// import ErrorFallback from './components/Shared/ErrorFallback/ErrorFallback';





console.log(pooja)


const render = Component => {
  hydrate(
    // <ErrorBoundary FallbackComponent={ErrorFallback}>


    <BrowserRouter>

      <Component />


    </BrowserRouter>,
    // </ErrorBoundary>,
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
