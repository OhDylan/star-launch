import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.js';
import LaunchPage from './pages/LaunchPage.js';
import StarLinkPage from './pages/StarLinkPage.js';
import 'antd/dist/antd.min.css';
import './App.css';

const App = () => {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<LandingPage />} ></Route>
                <Route exact path="/launch" element={<LaunchPage />} ></Route>
                <Route exact path="/starlink" element={<StarLinkPage />} ></Route>
            </Routes>
        </div>
    );
}

export default App;