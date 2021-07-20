import React from 'react';

import Login from './Login';
import Inventory from './Inventory';
import NotFound from './NotFound';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path = "/login" exact component = { Login } />
                    <Route path = "/inventory" exact component = { Inventory } />
                    <Route component = { NotFound } />
                </Switch>
            </Router>
        </>
    )
}

export default App;
