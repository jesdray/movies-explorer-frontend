import React from "react";

function Techs(props) {


    return (
        <div className="techs">
            <div className="techs__title-box">
                <h2 className="techs__title">Технологии</h2>
            </div>
            <div className="techs__box">
                <h3 className="techs__text-title">7 технологий</h3>
                <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            </div>
            <div className="techs__element-box">
                <div className="techs__element">
                    <p className="techs__element-text">HTML</p>
                </div>
                <div className="techs__element">
                    <p className="techs__element-text">CSS</p>
                </div>
                <div className="techs__element">
                    <p className="techs__element-text">Js</p>
                </div>
                <div className="techs__element">
                    <p className="techs__element-text">React</p>
                </div>
                <div className="techs__element">
                    <p className="techs__element-text">Git</p>
                </div>
                <div className="techs__element">
                    <p className="techs__element-text">Express.js</p>
                </div>
                <div className="techs__element">
                    <p className="techs__element-text">mongoDB</p>
                </div>
            </div>
        </div>
    );
}

export default Techs;