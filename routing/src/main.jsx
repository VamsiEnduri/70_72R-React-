// index.jsx
import React from 'react';               // React import
import ReactDOM from 'react-dom/client'; // ReactDOM import for createRoot
import './index.css';
import App2 from './App2.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    
    <App2 />

    
  </React.StrictMode>
);
