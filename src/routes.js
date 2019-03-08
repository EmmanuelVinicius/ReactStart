import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Main from './pages/main/main';
import Pessoa from './pages/pessoa/pessoa';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/pessoas/:id" component={Pessoa} />
        </Switch>
    </BrowserRouter>
);

export default Routes;