import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { AppDatabaseProvider } from './Components/Database';

ReactDOM.render(
  <BrowserRouter>
    <AppDatabaseProvider>
      <App />
    </AppDatabaseProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
