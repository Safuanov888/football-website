import './ClubPage.css'
import team from '../../images/club/command.png'

function ClubPage(){
    const today = new Date()
    return (
        <main>
            <section className="club__glavnay">
                <h2 className="club__title">КОКОС СУПЕР, КОКОС КЛАСС, КТО НЕ ВЕРИТ - ТОМУ В ГЛАЗ !!!!!!</h2>
            </section>
            <section className="club__history">
                <h2 className='club__history-tile'>Мы пишем историю</h2>
                <p className='club__history-paragraph'>«Кокос Групп» — футбольный клуб, основанный CEO Kokoc Group Александром Шокуровым. Команда — чемпион Первого Дивизиона Юго-Западной Любительской футбольной лиги Москвы, сейчас играет в Высшем дивизионе, призёр Суперлиги F 2024 года и других чемпионатов ЛФЛ. 
                </p>
                <p className='club__history-paragraph'>В клубе играют звёзды футбола, например, Павел Погребняк, в прошлом член Сборной России по футболу.</p>
            </section>
            <section className='club__fitchi'>
                    <div className='club__years'>
                        <div className='club__years-container'>
                            <p className='club__title-year'>2011</p>
                            <p className='club__subtitle-year'>{today.getFullYear()}</p>
                            </div>
                        <div className='club__gora'></div>
                    </div>
                    <div className='club__text-container'>
                        <div className='club__team'>
                            <img alt='team' src={team} className='club__team-img'></img>
                        </div>
                        <div className='club__team'>
                            <p className='club__team-text'>Футбольная команда "Кокос Групп" была основана в 2011 году и быстро завоевала популярность на любительской футбольной арене. Команда сформировалась из группы единомышленников, стремящихся объединить любовь к футболу и активный образ жизни. </p>
                            <p className='club__team-text'>Основной целью создания команды стало не только участие в соревнованиях, но и формирование дружеской атмосферы среди игроков и болельщиков.</p>
                            <p className='club__team-text'>Команда "Кокос Групп" может гордиться своими преданными фанатами, которые поддерживают игроков на каждом матче. Эти болельщики не только создают уникальную атмосферу на стадионе, но и активно участвуют в жизни команды, организуя различные мероприятия, акции и встречи. Их поддержка стала важным элементом успеха команды, вдохновляя игроков на новые достижения.</p>
                        
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ClubPage