import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

serviceWorker.unregister();