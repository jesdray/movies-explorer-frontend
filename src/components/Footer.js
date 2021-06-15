import React from "react";

function Footer(props) {

    return (
        <>
            <footer className="footer">
                <div className="footer__box footer__box_bottom-line">
                    <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
                </div>
                <div className="footer__box">
                    <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
                    <menu className="footer__menu">
                        <a href="https://praktikum.yandex.ru/" className="footer__link">Яндекс.Практикум</a>
                        <a href="https://github.com/jesdray" className="footer__link">Github</a>
                        <a href="#" className="footer__link">Facebook</a>
                    </menu>
                </div>
            </footer>
        </>
    );

}

export default Footer;