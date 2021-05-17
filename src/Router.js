import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";

const isAuthorized = Boolean(localStorage.getItem('login'));

class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/dashboard" exact render={(routeProps) => {
                        if (isAuthorized) return <Dashboard {...routeProps} />;
                        return <LoginPage {...routeProps} />
                    }}/>

                    <Route path="/login" exact render={(routeProps) => {
                        if (isAuthorized) return <Dashboard {...routeProps} />;
                        return <LoginPage {...routeProps} />
                    }}/>
                    <Redirect to="/login"/>
                </Switch>
            </Router>
        );
    }
}


export default AppRouter;
