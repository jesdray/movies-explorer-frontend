import React from "react";
import { Link } from "react-router-dom";

function Profile(props) {

    return(
        <div className="profile">
            <h1 className="profile__title">Привет, Виталий!</h1>
            <form className="profile__box">
                <button></button>
            </form>
            <Link></Link>
        </div>
    );
}

export default Profile;