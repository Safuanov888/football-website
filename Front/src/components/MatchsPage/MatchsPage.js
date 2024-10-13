import React, { useState, useEffect } from "react";
import './MatchsPage.css';
import matchs_img from '../../images/matchs/matchs.png'
import menu_strelka from '../../images/menu__strelka.svg'
import CalendarMatchs from '../CalendarMatchs/CalendarMatchs'
import CardsList from '../CardsList/CardsList'
import { getMatchs, getTournament, getCommands } from '../../utils/Api'
function MatchsPage() {

    const [filterMatchs, setFilterMatchs] = useState({
        date: '',
        upcoming: 1,
        tournament: '',
        command: ''
    })
    const [currentToutner, setCurrentToutner] = useState('')
    const [currentCommand, setCurrentCommand] = useState('')
    const [isActiveTime, setIsActiveTime] = useState(false)
    const [isActiveDate, setIsActiveDate] = useState(false)
    const [isActiveCommand, setIsActiveCommand] = useState(false)
    const [isActiveTurnir, setIsActiveTurnir] = useState(false)
    const [date, setDate] = useState(new Date())
    const [currentDate, setCurrentDate] = useState('')
    const [currentmonth, setCurrentMonth] = useState('')
    const [tournirData, setTournirData] = useState([])
    const [commandData, setCommandsData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [filterCards, setFilterCards] = useState([])
    const handleChange = (e) => {
        const newFilterMatchs = structuredClone(filterMatchs)
        console.log(e)
        if (e.target.classList[1] === 'time') {
            if (e.target.innerText === 'Прошедшие') {
                newFilterMatchs.upcoming = 0
            }
            else {
                newFilterMatchs.upcoming = 1
            }
        }
        else if (e.target.classList[1] === 'tournir') {
            newFilterMatchs.tournament = e.target.id
            setCurrentToutner(e.target.innerText)
        }
        else if (e.target.classList[1] === 'command') {
            newFilterMatchs.command = e.target.id
            setCurrentCommand(e.target.innerText)
        }
        setFilterMatchs(newFilterMatchs)

    }
    useEffect(() => {
        console.log('yes')
        getMatchs(filterMatchs, setIsLoading).then((res) => {
            setFilterCards(res)
            console.log(res)
            setIsLoading(false)
        })
    }, [filterMatchs])
    useEffect(() => {
        getTournament(setIsLoading).then((res) => {
            setTournirData(res)
            setIsLoading(false)
        })
        getCommands(setIsLoading).then((res) => {
            setCommandsData(res)
            setIsLoading(false)
        })
    }, [])
    useEffect(() => {
        if (currentDate) {
            let newFilterMatchs = structuredClone(filterMatchs)
            const currentMonth = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`
            const currentDay = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`
            newFilterMatchs.date = `${date.getFullYear()}-${currentMonth}-${currentDay}`
            setFilterMatchs(newFilterMatchs)
            setIsLoading(false)
        }
    }, [currentDate])
    return (
        <div className="matchspage">
            <img src={matchs_img} alt='matchs' className='matchspage__img' />
            <div className='matchspage__menu'>
                <h2 className='matchspage__subtitle'>Матчи</h2>
                <div className='matchspage__menu-container'>
                    <button className='button' onClick={() => {
                        setIsActiveTime(!isActiveTime);
                        setIsActiveDate(false);
                        setIsActiveCommand(false);
                        setIsActiveTurnir(false)
                    }}>
                        <p>{filterMatchs.upcoming === 1 ? 'Предстоящие' : 'Прошедшие'}</p>
                        <img className='matchs__strelka' alt='strelka' src={menu_strelka}></img>
                    </button>
                    <ul className={isActiveTime ? 'matchspage__drowdrop matchspage__drowdrop_active' : 'matchspage__drowdrop'}>
                        <li className='matchspage__drowdrop-item time' onClick={handleChange}>Предстоящие</li>
                        <li className='matchspage__drowdrop-item time' onClick={handleChange}>Прошедшие</li>
                    </ul>
                </div>
                <div className='matchspage__menu-container'>
                    <button className='button' onClick={() => {
                        setIsActiveDate(!isActiveDate);
                        setIsActiveTime(false);
                        setIsActiveCommand(false);
                        setIsActiveTurnir(false)
                    }}>
                        <p>{filterMatchs.date ? filterMatchs.date : 'По дате'}</p>
                        <img className='matchs__strelka' alt='strelka' src={menu_strelka}></img>
                    </button>
                    <ul className={isActiveDate ? 'matchspage__drowdrop matchspage__drowdrop_active' : 'matchspage__drowdrop'}>
                        <CalendarMatchs setCurrentDate={setCurrentDate} setDate={setDate} date={date} cardsMonth={[]} setCurrentMonth={setCurrentMonth} />
                    </ul>
                </div>
                <div className='matchspage__menu-container'>
                    <button className='button' onClick={() => {
                        setIsActiveCommand(!isActiveCommand);
                        setIsActiveTime(false);
                        setIsActiveDate(false);
                        setIsActiveTurnir(false)
                    }}>
                        <p>{filterMatchs.tournament ? currentToutner : 'По турниру'}</p>
                        <img className='matchs__strelka' alt='strelka' src={menu_strelka}></img>
                    </button>
                    <ul className={isActiveCommand ? 'matchspage__drowdrop matchspage__drowdrop_active' : 'matchspage__drowdrop'}>
                        {tournirData.map((tournir) => (
                            <li id={tournir.id} className='matchspage__drowdrop-item tournir' onClick={handleChange}>{tournir.name}</li>
                        ))}
                    </ul>
                </div>
                <div className='matchspage__menu-container'>
                    <button className='button' onClick={() => {
                        setIsActiveTurnir(!isActiveTurnir);
                        setIsActiveTime(false);
                        setIsActiveDate(false);
                        setIsActiveCommand(false);
                    }}>
                        <p>{filterMatchs.command ? currentCommand : 'По команде'}</p>
                        <img className='matchs__strelka' alt='strelka' src={menu_strelka}></img>
                    </button>
                    <ul className={isActiveTurnir ? 'matchspage__drowdrop matchspage__drowdrop_active' : 'matchspage__drowdrop'}>
                        {commandData.map((command) => (
                            <li id={command.id} className='matchspage__drowdrop-item command' onClick={handleChange}>{command.name}</li>
                        ))}
                    </ul>
                </div>
                <div className='matchspage__menu-container'>
                    <button className='button' onClick={() => {
                        setIsActiveTurnir(false);
                        setIsActiveTime(false);
                        setIsActiveDate(false);
                        setIsActiveCommand(false);
                        setFilterMatchs({
                            date: '',
                            upcoming: 1,
                            tournament: '',
                            command: ''
                        })

                    }}>
                        <p>Сброс</p>
                    </button>
                </div>
            </div>
            <div className='cards_container'>
                {isLoading ? (<p className="matchs__paragraph">Идёт загрузка...</p>) :
                    filterCards.length !== 0 ? (
                        <CardsList currendIndexCards={null} cardsData={filterCards} activeTimeMatchs={filterMatchs.upcoming} />
                    ) : (
                            <p className="matchs__paragraph">Записей не найдено</p>
                        )
                }
            </div>
        </div>
    );
}

export default MatchsPage;