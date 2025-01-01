import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/styles/output.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorPage from './components/error-page';
import config from './config.json';

axios.defaults.baseURL = config.apiURI;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorPage} onReset={() => (window.location.href = '/')}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
