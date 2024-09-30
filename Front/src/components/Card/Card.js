import React, { useState, useEffect } from "react";
import './Card.css';
import imgCom from '../../images/image_test.png'
import kokos from '../../images/card_kokos.png'
import krestik from '../../images/card__krest.svg' 
function Card({card}) {
    const [cardData, setCardData]=useState({
        date:'',
        nameCommand:''
    })
    useEffect(()=>{
        console.log(card)
        const date = new Date(card.date);
        const monthName = date.toLocaleString('default', { month: 'long' });
        const dateList=card.date.split('-').reverse();
        let newCardData={date:'', nameCommand:''}
        newCardData.date=`${dateList[0]} ${monthName}, ${dateList[dateList.length-1]}`
        newCardData.nameCommand=card.command.name.toUpperCase()
        setCardData(newCardData)
        console.log(newCardData)
    }, [card])
  return (
    <div className='card'>
        <p className="card__date">{cardData.date}</p>
        <div className="card__team">
            <div className="">
                <img className="card__merch" alt='kokos' src={kokos}></img>
                <p className="card__team-name">КОКОС</p>
            </div>
            <div>
                <img className="card__kresik" alt='krestik' src={krestik}></img>
            </div>
            <div>
                <img className="card__merch" alt='command2' src={imgCom}></img>
                <p className="card__team-name">{cardData.nameCommand}</p>
            </div>
        </div>
    </div>
  );
}

export default Card;