import React from 'react';
import ReactDOM from 'react-dom/client'; // Cambia la importación aquí
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/goit-react-hw-05-movies'>
      <CssBaseline />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
