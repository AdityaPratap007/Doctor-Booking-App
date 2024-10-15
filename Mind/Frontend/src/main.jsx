import React from 'react';
import { createRoot } from 'react-dom';
import App from './App.jsx';
import './index.css';
// require('dotenv').config();
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext.jsx';
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
    <ToastContainer theme="dark" position='top-right' autoClose={3000} closeOnClick pauseOnHover={false} />
      <App />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);