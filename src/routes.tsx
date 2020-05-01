import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Calendario from './pages/Calendario';
import Login from './pages/Login';
import Register from './pages/Register';
import Inicio from './pages/inicio/Inicio';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/calendario" component={Calendario} />
                <Route path="/inicio" component={Inicio} />
            </Switch>
        </Router>
    );
}