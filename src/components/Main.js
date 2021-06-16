import React from "react";
import { loggedInContext } from '../contexts/loggedInContext'

function Main(props) {
    const loggedIn = React.useContext(loggedInContext);

    if(loggedIn) {
        return (
            <></>
        );
    }
    return (
        <>
            <props.aboutProject />
            <props.techs />
            <props.aboutMe />
        </>
    );
}

export default Main;