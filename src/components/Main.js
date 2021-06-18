import React from "react";
import { loggedInContext } from '../contexts/loggedInContext'

function Main(props) {
    const loggedIn = React.useContext(loggedInContext);

    if(loggedIn) {
        return (
            <>
                <props.searchForm />
                <props.moviesCardList />
            </>
        );
    }
    return (
        <div className="main">
            <props.aboutProject />
            <props.techs />
            <props.aboutMe />
        </div>
    );
}

export default Main;