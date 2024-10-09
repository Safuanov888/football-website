import { useState, useEffect } from 'react';
import './CalendarMatchs.css';
import "react-calendar/dist/Calendar.css";
import styled, { css } from 'styled-components';
const Frame = styled.div`
  width: 400px;
  height:300px;
  border: 1px solid lightgrey;
  box-shadow: 2px 2px 2px #eee;
  background-color: #f5f6fa;
`;

const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 10px 5px 10px;
  display: flex;
  justify-content: space-between;
  background-color: #f5f6fa;
`;

const Button = styled.div`
  cursor: pointer;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Day = styled.div`
  width: 14.2%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${props =>
    props.isToday &&
    css`
      border: 1px solid black;
    `}
  

  ${props =>
    props.isSelected &&
    css`
      background-color: #eee;
    `}
    ${props =>
      props.isEvent &&
      css`
        background: red;
      `}
`;
export function CalendarMatchs({date, setDate}) {
  const today = new Date();
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_OF_THE_WEEK = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  const MONTHS = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  const cardsData = [{ id: 0, date: "2024-10-05T15:00:00+03:00", command: { name: 'Тройка', score: '3:0', text_syperliga: "Суперлига FS сезон", adres: "Вернандка парк 1" } },
    { id: 1, date: "2024-09-24", command: { name: 'Тройка', score: '3:0', text_syperliga: "Суперлига FS сезон", adres: "Вернандка парк 1" } },
    { id: 2, date: "2024-09-24", command: { name: 'Тройка', score: '3:0', text_syperliga: "Суперлига FS сезон", adres: "Вернандка парк 1" } },
    { id: 3, date: "2024-09-24", command: { name: 'Тройка', score: '3:0', text_syperliga: "Суперлига FS сезон", adres: "Вернандка парк 1" } },
    { id: 4, date: "2024-09-24", command: { name: 'Тройка', score: '3:0', text_syperliga: "Суперлига FS сезон", adres: "Вернандка парк 1" } },
    ]
  
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));
 
  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
  }, [date]);

  function getStartDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  }

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  function handleIsEvent(year, month, d){
    let isEvent=false
    cardsData.forEach((match)=>{
      const dateMatch= new Date(match.date)
      if(dateMatch.getDate()===d && dateMatch.getMonth()===month && dateMatch.getFullYear()===year){
        isEvent=true
      }
    })
    return isEvent

  }
  const days = isLeapYear(date.getFullYear()) ? DAYS_LEAP : DAYS;
  
  return (
    <Frame>
      <Header>
        <Button onClick={() => setDate(new Date(year, month - 1, day))}>Пред</Button>
        <div>
          {MONTHS[month]} {year}
        </div>
        <Button onClick={() => setDate(new Date(year, month + 1, day))}>След</Button>
      </Header>
      <Body>
        {DAYS_OF_THE_WEEK.map(d => (
          <Day key={d}>
            <strong>{d}</strong>
          </Day>
        ))}
        {Array(days[month] + (startDay - 1))
          .fill(null)
          .map((_, index) => {
            const d = index - (startDay - 2);
            return (
              <Day
                key={index}
                isToday={d === today.getDate() && month === today.getMonth() && year === today.getFullYear()}
                isEvent={handleIsEvent(year, month, d)}
                isSelected={false}
                onClick={() => setDate(new Date(year, month, d))}
              >
                {d > 0 ? d : ''}
              </Day>
            );
          })}
      </Body>
    </Frame>
  );
}

export default CalendarMatchs;
