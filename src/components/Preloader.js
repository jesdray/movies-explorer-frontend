import React from 'react'
import { PreloaderActiveContext } from "../contexts/PreloaderActiveContext"

const Preloader = () => {
    const preloaderActive = React.useContext(PreloaderActiveContext);

    return (
        <div className={preloaderActive ? "preloader preloader_active" : "preloader"}>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
