import React, { useState } from "react";
import './MainPage.css';
import CardsList from '../CardsList/CardsList'
import menu_strelka from '../../images/menu__strelka.svg'
import team_img from '../../images/team.png'

function MainPage() {
  const [activeTimeMatchs, setActiveTimeMatchs] = useState('Предстоящие')
  const [isActiveMenu, setIsActiveMenu] = useState(false)
  const [filterCards, setFilterCards] = useState([])
  const cardsData = [{ id: 0, date: "2000-03-05T15:00:00+03:00", command: { name: 'Тройка', score: '3:0', text_syperliga: "Суперлига FS сезон", adres: "Вернандка парк 1" } },
  { id: 1, date: "2024-09-24", command: { name: 'Тройка', score: '3:0', text_syperliga: "Суперлига FS сезон", adres: "Вернандка парк 1" } },
  { id: 2, date: "2024-09-24", command: { name: 'Тройка', score: '3:0', text_syperliga: "Суперлига FS сезон", adres: "Вернандка парк 1" } },
  { id: 3, date: "2024-09-24", command: { name: 'Тройка', score: '3:0', text_syperliga: "Суперлига FS сезон", adres: "Вернандка парк 1" } },
  { id: 4, date: "2024-09-24", command: { name: 'Тройка', score: '3:0', text_syperliga: "Суперлига FS сезон", adres: "Вернандка парк 1" } },
]


  function handleChangeTimeMatcs(e) {
    setActiveTimeMatchs(e.target.innerText)
    setIsActiveMenu(!isActiveMenu)
    let dateNow= new Date();
    let newCards = structuredClone(cardsData)
    if (e.target.innerText === 'Предстоящие'){
      newCards=newCards.filter((item)=>{
        let dateCard= new Date(item.date)
        return dateCard>dateNow
      })
      
    }
    else {
      newCards=newCards.filter((item)=>{
        let dateCard= new Date(item.date)
        return dateCard<dateNow
      })
    }
    setFilterCards(newCards)
    console.log(new Date( "2000-03-03T15:00:00+03:00"))
  }

  function handleIsOpenMenu(e) {
    setIsActiveMenu(!isActiveMenu)
  };
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
        <CardsList cardsData={filterCards} />
      </div>
    </main>
  );
}

export default MainPage;