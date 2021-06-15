import React from "react";

function AboutProject(props) {

    return (
        <>
            <div className="project">
                <div className="project__title-box">
                    <h2 className="project__title">О проекте</h2>
                </div>
                <div className="project__box">
                    <div className="project__text-box">
                        <h3 className="project__text-title">Дипломный проект включал 5 этапов</h3>
                        <p className="project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </div>
                    <div className="project__text-box">
                        <h3 className="project__text-title">На выполнение диплома ушло 5 недель</h3>
                        <p className="project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </div>
                </div>
                <div className="project__time-line">
                    <div className="project__back">
                        <p className="project__text"></p>
                    </div>
                    <div className="project__front">
                        <p className="project__text"></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutProject;