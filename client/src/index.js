import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> // toto nehaj lebo to robi problemi v developmente na locale a vola useeffect 2x aj ked by malo iba 1x
    <App />
  // </React.StrictMode>  // toto nehaj lebo to robi problemi v developmente na locale a vola useeffect 2x aj ked by malo iba 1x
);

