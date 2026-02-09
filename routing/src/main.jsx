// index.jsx
import React from 'react';               // React import
import ReactDOM from 'react-dom/client'; // ReactDOM import for createRoot
import './index.css';
import App from './App.jsx';

import {BrowserRouter} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
  </React.StrictMode>
);
