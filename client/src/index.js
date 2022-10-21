import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> // toto nehaj lebo to robi problemi v developmente na locale a vola useeffect 2x aj ked by malo iba 1x
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<SignupPage />} />
        </Routes>
    </BrowserRouter>
  // </React.StrictMode>  // toto nehaj lebo to robi problemi v developmente na locale a vola useeffect 2x aj ked by malo iba 1x
);

