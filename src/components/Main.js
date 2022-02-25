import React from "react";

function Main(props) {

    return (
        <div className="main">
            <props.promo />
            <props.aboutProject />
            <props.techs />
            <props.aboutMe />
            <props.portfolio />
        </div>
    );
}

export default Main;