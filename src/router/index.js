import React from 'react';
import {
    Route,
    Switch,
    HashRouter
} from 'react-router-dom';
import routes from './config';
const Routers = () => (
    <HashRouter>
        <Switch>
            {
                routes.map((route,i)=> (
                   <Route key={i} path={route.path} exact={route.exact} component={route.component} />
                ))
            }
        </Switch>
    </HashRouter>
);

export default Routers;