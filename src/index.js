import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import meraStore from './store/store';

// import i18n (needs to be bundled ;))
import './i18n';

const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={meraStore}>
      <App />
    </Provider>
  </>,
);
