import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './globalStyles/globalStyles.style.js';

import theme from './globalStyles/Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter basename='/store-web'>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <App />
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);


