import React, { useState } from "react";
import './Header.css';
import merch from '../../images/kokos_merch.png'

function Header() {
    const [activePage, setActivePage] = useState({ futbol_club: true, team: false, calendar: false, ticket: false, arena: false, media: false, shop: false })
    function handleActive(e) {
        if (e.target.innerText === 'Футбольный клуб') {
            setActivePage({
                futbol_club: true, team: false, calendar: false, ticket: false, arena: false, media: false, shop: false
            })
        }
        else if (e.target.innerText === 'КОМАНДА'){
            setActivePage({
                futbol_club: false, team: true, calendar: false, ticket: false, arena: false, media: false, shop: false
            })
        }
        else if (e.target.innerText === 'КАЛЕНДАРЬ'){
            setActivePage({
                futbol_club: false, team: false, calendar: true, ticket: false, arena: false, media: false, shop: false
            })
        }
        else if (e.target.innerText === 'БИЛЕТЫ'){
            setActivePage({
                futbol_club: false, team: false, calendar: false, ticket: true, arena: false, media: false, shop: false
            })
        }
        else if (e.target.innerText === 'АРЕНА'){
            setActivePage({
                futbol_club: false, team: false, calendar: false, ticket: false, arena: true, media: false, shop: false
            })
        }
        else if (e.target.innerText === 'МЕДИА'){
            setActivePage({
                futbol_club: false, team: false, calendar: false, ticket: false, arena: false, media: true, shop: false
            })
        }
        else {
            setActivePage({
                futbol_club: false, team: false, calendar: false, ticket: false, arena: false, media: false, shop: true
            })
        }
    }
    return (
        <header className="header">
            <div className="header__glavnay" onClick={handleActive}>
                <div className="header__kryg">
                    <img src={merch} className='header__img' alt='Кокос'></img>
                </div>
                <p className={activePage.futbol_club ? 'header__text header_active' : 'header__text'}>Футбольный клуб</p>
            </div>
            <div className="header__block">
                <div className="header__container">
                    <div className="header__liga">
                        <p className='header__text header__text_liga'>СУПЕР ЛИГА F</p>
                        <button className="header__telegram"></button>
                    </div>
                </div>
                <div className="header__container header__container_grid">
                    <button className={activePage.team ? "header__menu header_active" : "header__menu"} onClick={handleActive}>КОМАНДА</button>
                    <button className={activePage.calendar ? "header__menu header_active" : "header__menu"} onClick={handleActive}>КАЛЕНДАРЬ</button>
                    <button className={activePage.ticket ? "header__menu header_active" : "header__menu"} onClick={handleActive}>БИЛЕТЫ</button>
                    <button className={activePage.arena ? "header__menu header_active" : "header__menu"} onClick={handleActive}>АРЕНА</button>
                    <button className={activePage.media ? "header__menu header_active" : "header__menu"} onClick={handleActive}>МЕДИА</button>
                    <button className={activePage.shop ? "header__menu header_active" : "header__menu"} onClick={handleActive}>МАГАЗИН</button>
                </div>
            </div>
        </header>
    );
}

export default Header;