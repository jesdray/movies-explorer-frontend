import React from "react";
import { Route, Redirect } from "react-router-dom";
import { LoggedInContext } from "../contexts/loggedInContext"

function ProtectedRoute({ component: Component, ...props }) {
    const loggedIn = React.useContext(LoggedInContext)
    const log = localStorage.getItem('loggedIn')

    if (loggedIn || log) {
        return (
            <Route>
                <props.Header />
                <Component {...props} />
                {props.Footer ? <props.Footer /> : null}
            </Route>
        );
    }
    return (
        <Route>
            <Redirect push to="/" />
        </Route>
    );
};

export default ProtectedRoute;