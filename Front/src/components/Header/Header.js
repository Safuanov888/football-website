import React from "react";
import './Header.css';
import merch from '../../images/kokos_merch.png'

function Header({ activePage, setActivePage }) {
    function handleActive(e) {
        if (e.target.innerText === 'Футбольный клуб') {
            setActivePage({
                futbol_club: true, news: false, matchs: false, club: false, contacts: false, media: false, shop: false
            })
        }
        else if (e.target.innerText === 'НОВОСТИ') {
            setActivePage({
                futbol_club: false, news: true, matchs: false, club: false, contacts: false, media: false, shop: false
            })
        }
        else if (e.target.innerText === 'МАТЧИ') {
            setActivePage({
                futbol_club: false, news: false, matchs: true, club: false, contacts: false, media: false, shop: false
            })
        }
        else if (e.target.innerText === 'О КЛУБЕ') {
            setActivePage({
                futbol_club: false, news: false, matchs: false, club: true, contacts: false, media: false, shop: false
            })
        }
        else if (e.target.innerText === 'КОНТАКТЫ') {
            setActivePage({
                futbol_club: false, news: false, matchs: false, club: false, contacts: true, media: false, shop: false
            })
        }
        else if (e.target.innerText === 'МЕДИА') {
            setActivePage({
                futbol_club: false, team: false, matchs: false, club: false, contacts: false, media: true, shop: false
            })
        }
        else {
            setActivePage({
                futbol_club: false, team: false, matchs: false, club: false, contacts: false, media: false, shop: true
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
                        <a className="header__telegram" href='https://t.me/fckokocgroup' target="_blank"></a>
                    </div>
                </div>
                <div className="header__container header__container_grid">

                    <button className={activePage.matchs ? "header__menu header_active" : "header__menu"} onClick={handleActive}>МАТЧИ</button>
                    <button className={activePage.club ? "header__menu header_active" : "header__menu"} onClick={handleActive}>О КЛУБЕ</button>
                </div>
            </div>
        </header>
    );
}

export default Header;