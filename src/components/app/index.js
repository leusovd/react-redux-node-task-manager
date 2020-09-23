import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./app.scss";

import AlertStore from '../alert-store';
import Header from "../header";
import Routes from "../routes";

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <AlertStore />
                    <Header />
                    <Routes />
                </div>
            </Router>
        );
    }
}
