import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./app.scss";

import AlertStore from '../alert-store';
import Header from "../header";
import Routes from "../routes";

const App = ({ logoutIfTokenExpired }) => {
    return (
        <Router>
            <div className="app">
                <AlertStore />
                <Header />
                <Routes />
            </div>
        </Router>
    );
};

export default App;