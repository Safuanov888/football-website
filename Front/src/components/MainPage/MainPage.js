import React, { useState, useEffect } from "react";
import './MainPage.css';
import CardsList from '../CardsList/CardsList'
import menu_strelka from '../../images/menu__strelka.svg'
import team_img from '../../images/team.png'
import { getMatchs } from '../../utils/Api'
import CalendarMatchs from "../CalendarMatchs/CalendarMatchs";
import Card from "../Card/Card";

function MainPage() {
  const [activeTimeMatchs, setActiveTimeMatchs] = useState('Предстоящие')
  const today = new Date();
  const [date, setDate] = useState(today);
  const [cardCalendar, setCardCalendar] = useState({ id: null, date: "", command: { name: '', score: '', text_syperliga: "", adres: "" } });
  const [currendIndexCards, setCurrendIndexCards] = useState({
    startIndex: 0,
    endIndex: 3
  })
  const [isActiveMenu, setIsActiveMenu] = useState(false)
  const [filterCards, setFilterCards] = useState([])
  const cardsData = [{ id: 0, date: "2000-03-05T15:00:00+03:00", command: { name: 'Тройка', score: '3:0', text_syperliga: "Суперлига FS сезон", adres: "Вернандка парк 1" } },
  { id: 1, date: "2024-10-05", command: { name: 'Тройка', score: '3:0', text_syperliga: "Суперлига FS сезон", adres: "Вернандка парк 1" } },
  { id: 2, date: "2024-09-24", command: { name: 'Тройка', score: '3:0', text_syperliga: "Суперлига FS сезон", adres: "Вернандка парк 1" } },
  { id: 3, date: "2024-09-24", command: { name: 'Тройка', score: '3:0', text_syperliga: "Суперлига FS сезон", adres: "Вернандка парк 1" } },
  { id: 4, date: "2024-09-24", command: { name: 'Тройка', score: '3:0', text_syperliga: "Суперлига FS сезон", adres: "Вернандка парк 1" } },
  ]
  useEffect(() => {
   /* getMatchs().then((res) => {
      const data = res
      console.log(res)
    })*/
  }, [])

  useEffect(() => {
    cardsData.forEach((match)=>{
      const dateMatch= new Date(match.date)
      if(dateMatch.getDate()===date.getDate() && dateMatch.getMonth()===date.getMonth() && dateMatch.getFullYear()===date.getFullYear()){
        setCardCalendar(match)
      }
    })
   }, [date])

  function handleChangeTimeMatcs(e) {
    setActiveTimeMatchs(e.target.innerText)
    setIsActiveMenu(!isActiveMenu)
    let dateNow = new Date();
    let newCards = structuredClone(cardsData)
    if (e.target.innerText === 'Предстоящие') {
      newCards = newCards.filter((item) => {
        let dateCard = new Date(item.date)
        return dateCard > dateNow
      })

    }
    else {
      newCards = newCards.filter((item) => {
        let dateCard = new Date(item.date)
        return dateCard < dateNow
      })
    }
    setFilterCards(newCards)
    setCurrendIndexCards({
      startIndex: 0,
      endIndex: 3
    })
    console.log(new Date("2000-03-03T15:00:00+03:00"))
  }

  function handleIsOpenMenu(e) {
    setIsActiveMenu(!isActiveMenu)
  };
  const handleChangeFartherMatchs = (e) => {
    const startIndex = currendIndexCards.startIndex + 3
    const endIndex = Math.min(currendIndexCards.endIndex + 3, filterCards.length)
    setCurrendIndexCards({
      startIndex: startIndex,
      endIndex: endIndex
    })
  }

  const handleChangeBackMatchs = (e) => {
    const startIndex = Math.max(currendIndexCards.startIndex - 3, 0)
    const endIndex = Math.max(currendIndexCards.endIndex - 3, 3)
    setCurrendIndexCards({
      startIndex: startIndex,
      endIndex: endIndex
    })
  }
  return (
    <main className="main">
      <img alt="Команда" src={team_img} className='main__img'></img>
      <div className='matchs'>
        <div className='matchs__menu'>
          <h2 className="matchs__title">Матчи</h2>
          <div>
            <button className='matchs__button' onClick={handleIsOpenMenu}>
              <p>{activeTimeMatchs}</p>
              <img className='matchs__strelka' alt='strelka' src={menu_strelka}></img>
            </button>
            <ul className={isActiveMenu ? 'matchs__drowdrop matchs__drowdrop_active' : 'matchs__drowdrop'}>
              <li className='matchs__drowdrop-item' onClick={handleChangeTimeMatcs}>Предстоящие</li>
              <li className='matchs__drowdrop-item' onClick={handleChangeTimeMatcs}>Прошедшие</li>
            </ul>
          </div>
        </div>
        {filterCards.length!==0 ? (
          <CardsList currendIndexCards={currendIndexCards} cardsData={filterCards} />
        ) : (
          <p className="matchs__paragraph">Записей не найдено</p>
        )}
        
        <div className='matchs__scrolling'>
          <button disabled={currendIndexCards.startIndex === 0 ? true : false} className={currendIndexCards.startIndex === 0 ? 'matchs__scrolling-button' : 'matchs__scrolling-button matchs__scrolling-button_active'} onClick={handleChangeBackMatchs} ></button>
          <button disabled={currendIndexCards.endIndex >= filterCards.length ? true : false} className={currendIndexCards.endIndex >= filterCards.length ? 'matchs__scrolling-button matchs__scrolling-button_right' : 'matchs__scrolling-button matchs__scrolling-button_right matchs__scrolling-button_active'} onClick={handleChangeFartherMatchs}></button>
        </div>
      </div>
      <section className="calendar">
        <div className="calendar__container">
          <CalendarMatchs setDate={setDate} date={date} />
          {cardCalendar.id ? (<Card card={cardCalendar}/>) : ''}
        </div>
      </section>
    </main>
  );
}

export default MainPage;