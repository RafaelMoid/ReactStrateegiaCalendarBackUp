import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './pages/home';
import Logado from './pages/logado';

export default () => {
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/logado">
            <Logado />
        </Route>
    </Switch>
}