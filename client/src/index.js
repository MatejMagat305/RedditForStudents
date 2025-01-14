import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./user/Login";
import Signup from "./user/Signup";
import Welcome from "./Welcome";
import Posts from "./Posts";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> // toto nehaj lebo to robi problemi v developmente na locale a vola useeffect 2x aj ked by malo iba 1x
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Welcome/>} />
            <Route path="/app" element={<App/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/posts" element={<Posts />} />
        </Routes>
    </BrowserRouter>
  // </React.StrictMode>  // toto nehaj lebo to robi problemi v developmente na locale a vola useeffect 2x aj ked by malo iba 1x
);

