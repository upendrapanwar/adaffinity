import React from 'react';
import { BrowserRouter } from "react-router-dom";
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
  <BrowserRouter>
    <ErrorBoundary FallbackComponent={ErrorPage} onReset={() => (window.location.href = '/')}>
        <App />
    </ErrorBoundary>
  </BrowserRouter>
);

reportWebVitals();
