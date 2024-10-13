import React, { useState, useEffect } from "react";
import './Card.css';
import imgCom from '../../images/image_test.png'
import kokos from '../../images/card_kokos.png'
import krestik from '../../images/card__krest.svg'
function Card({ card, activeTimeMatchs }) {
    const [cardData, setCardData] = useState({
        date: '',
        nameCommand: ''
    })
    useEffect(() => {
        const date = new Date(card.date);
        const monthName = date.toLocaleString('default', { month: 'long' });
        const dateList = card.date.split('-').reverse();
        let newCardData = { date: '', nameCommand: '', time: '' }
        newCardData.date = `${date.getUTCDate()} ${monthName}, ${dateList[dateList.length - 1]}`
        newCardData.nameCommand = card.command.name.toUpperCase()
        if (date.getMinutes() == '0') {
            newCardData.time = `${date.getHours()}:${date.getMinutes()}0`
        }
        else {
            newCardData.time = `${date.getHours()}:${date.getMinutes()}`
        }

        setCardData(newCardData)
    }, [card])
    return (
        <div className='card'>
            <p className="card__date">{cardData.date}</p>
            <p className="card__date card__date_time">{cardData.time}</p>
            <div className="card__team">
                <div className="">
                    <img className="card__merch" alt='kokos' src={kokos}></img>
                    <p className="card__team-name">КОКОС</p>
                </div>
                <div>
                    {activeTimeMatchs === 0 ? (
                        <p className="card__score">{`${card.goals}:${card.misses}`}</p>
                    ) : (
                            <img className="card__kresik" alt='krestik' src={krestik}></img>
                        )
                    }
                </div>
                <div>
                    <img className="card__merch" alt='command2' src={imgCom}></img>
                    <p className="card__team-name">{cardData.nameCommand}</p>
                </div>
            </div>
            <p className="card__text">{card.command.text_syperliga}</p>
            <p className="card__paragraph">{card.address}</p>
            <p className="card__subtitle">ВХОД СВОБОДНЫЙ</p>
        </div>
    );
}

export default Card;