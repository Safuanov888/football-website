import React, { useState, useEffect } from "react";
import './MainPage.css';
import CardsList from '../CardsList/CardsList'
import menu_strelka from '../../images/menu__strelka.svg'
import team_img from '../../images/team.png'
import { getMatchs, getMonthMatch } from '../../utils/Api'
import CalendarMatchs from "../CalendarMatchs/CalendarMatchs";
import Card from "../Card/Card";

function MainPage() {
  const [activeTimeMatchs, setActiveTimeMatchs] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const today = new Date();
  const [date, setDate] = useState(today);
  const [currentDate, setCurrentDate] = useState('')
  const [cardCalendar, setCardCalendar] = useState({ id: null, date: "", command: { name: '', score: '', text_syperliga: "", adres: "" } });
  const [currendIndexCards, setCurrendIndexCards] = useState({
    startIndex: 0,
    endIndex: 3
  })
  const [isActiveMenu, setIsActiveMenu] = useState(false)
  const [filterCards, setFilterCards] = useState([])
  const [cardsMonth, setCardsMonth] = useState([])
  const [currentMonth, setCurrentMonth] = useState(today);
  useEffect(() => {
    const formatCurrentMonth = currentMonth.getMonth() + 1 < 10 ? `0${currentMonth.getMonth() + 1}` : currentMonth.getMonth() + 1
    getMonthMatch({ "date": `${currentMonth.getFullYear()}-${formatCurrentMonth}` }, setIsLoading).then((res) => {
      setCardsMonth(res)
    })
    setIsLoading(false)
  }, [currentMonth])
  useEffect(() => {
    getMatchs({ "upcoming": activeTimeMatchs }, setIsLoading).then((res) => {
      setFilterCards(res)
    })
    setIsLoading(false)
  }, [activeTimeMatchs])

  useEffect(() => {
    setCurrendIndexCards({
      startIndex: 0,
      endIndex: 3
    })
    setIsLoading(false)
  }, [filterCards])

  useEffect(() => {

    cardsMonth.forEach((match) => {
      const dateMatch = new Date(match.date)
      if (dateMatch.getDate() === date.getDate() && dateMatch.getMonth() === date.getMonth() && dateMatch.getFullYear() === date.getFullYear()) {
        setCardCalendar(match)
      }
    })
  }, [date])

  function handleChangeTimeMatcs(e) {
    //setActiveTimeMatchs(e.target.innerText)
    setIsActiveMenu(!isActiveMenu)
    let currentUpcoming;
    if (e.target.innerText === 'Предстоящие') {
      currentUpcoming = 1
    }
    else {
      currentUpcoming = 0
    }
    if (currentUpcoming != activeTimeMatchs) {
      setActiveTimeMatchs(currentUpcoming)
    }

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
              <p>{activeTimeMatchs === 1 ? 'Предстоящие' : 'Прошедшие'}</p>
              <img className='matchs__strelka' alt='strelka' src={menu_strelka}></img>
            </button>
            <ul className={isActiveMenu ? 'matchs__drowdrop matchs__drowdrop_active' : 'matchs__drowdrop'}>
              <li className='matchs__drowdrop-item' onClick={handleChangeTimeMatcs}>Предстоящие</li>
              <li className='matchs__drowdrop-item' onClick={handleChangeTimeMatcs}>Прошедшие</li>
            </ul>
          </div>
        </div>
        {isLoading ? (<p className="matchs__paragraph">Идёт загрузка...</p>) :
          filterCards.length !== 0 ? (
            <CardsList currendIndexCards={currendIndexCards} cardsData={filterCards} activeTimeMatchs={activeTimeMatchs} />
          ) : (
              <p className="matchs__paragraph">Записей не найдено</p>
            )
        }
        <div className='matchs__scrolling'>
          <button disabled={currendIndexCards.startIndex === 0 ? true : false} className={currendIndexCards.startIndex === 0 ? 'matchs__scrolling-button' : 'matchs__scrolling-button matchs__scrolling-button_active'} onClick={handleChangeBackMatchs} ></button>
          <button disabled={currendIndexCards.endIndex >= filterCards.length ? true : false} className={currendIndexCards.endIndex >= filterCards.length ? 'matchs__scrolling-button matchs__scrolling-button_right' : 'matchs__scrolling-button matchs__scrolling-button_right matchs__scrolling-button_active'} onClick={handleChangeFartherMatchs}></button>
        </div>
      </div>
      <section className="calendar">
        <div className="calendar__container">
          <CalendarMatchs setCurrentDate={setCurrentDate} setDate={setDate} date={date} cardsMonth={cardsMonth} setCurrentMonth={setCurrentMonth} />
          {cardCalendar.id ? (<Card card={cardCalendar} activeTimeMatchs={date <= today ? 0 : 1} />) : ''}
        </div>
      </section>
    </main>
  );
}

export default MainPage;