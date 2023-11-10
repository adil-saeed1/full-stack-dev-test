import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import HomePage from '../pages/home/HomePage';

const RoutesComponent = () => {

    return (
        <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/app" component={HomePage} />
            {/* <Route path="*" component={PageNotFound} /> */}
        </Switch>
    );
};
export default RoutesComponent
