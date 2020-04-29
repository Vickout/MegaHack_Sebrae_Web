import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        </Router>
    );
}