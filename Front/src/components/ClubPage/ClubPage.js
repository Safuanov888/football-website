import './ClubPage.css'
import team from '../../images/club/command.png'
import img_cubok from '../../images/club/cubok.png'
import img_trener from '../../images/club/trener.png'
import img_konstantin from '../../images/club/konstantin.png'
import img_pavel from '../../images/club/pavel.png'
import img_artem from '../../images/club/artem.png'
function ClubPage(){
    const today = new Date()
    return (
        <main>
            <section className="club__glavnay">
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
                <div className='cubok'>
                        <img src={img_cubok} alt='cubok' className='cubok__img'></img>
                        <ul className='cubok__text'>
                            <li className='cubok__item'>
                                <div className='cubok__krug'></div>
                                <p className='cubok__award'>2023 Победитель кубка переправы</p>
                            </li>
                            <li className='cubok__item'>
                                <div className='cubok__krug'></div>
                                <p className='cubok__award'>2023 Лучший вратарь Высшего дивизиона — Михаил Комягин</p>
                            </li>
                            <li className='cubok__item'>
                                <div className='cubok__krug'></div>
                                <p className='cubok__award'>2023 учший фан-сектор Лиги</p>
                            </li>
                            <li className='cubok__item'>
                                <div className='cubok__krug'></div>
                                <p className='cubok__award'>2023 Гроза авторитетов Высшего Дивизиона Юго-Западной Лиги</p>
                            </li>
                        </ul>
                    </div>
            </section>
            <section className='trener'>
                <div className='trener__container'>
                    <div className='trener__info'>
                        <img src={img_trener} alt='trener'></img>
                        <p className='trener__name'>Главный тренер ФК «Кокос Групп» Михаил Пименов</p>
                    </div>
                    <div className='trener__opinion'>
                        <h2 className='trener__title'>О болельщиках</h2>
                        <p className='trener__text'>Огромная благодарность всем болельщикам. Честно признаться, я даже на профессиональном уровне не часто встречал такую атмосферу и такое количество людей, которые дышат одним воздухом с командой. Было невероятно шумно, я думаю, что даже организаторы турнира в шоке от того, как за нас болеют. А мы, игроки, безумно счастливы играть при такой поддержке, и я без доли сомнения могу сказать, что болельщики — наш девятый игрок. Я просто кайфанул от такой атмосферы и таких эмоций. Ради этого стоит играть и жить!</p>
                    </div>
                </div>
            </section>
            <section className='players'>
                <h2 className='players__title'>Гордость клуба</h2>
                <div className='palyers__grid'>
                    <div>
                        <img alt='konstantin' src={img_konstantin} className='players__img'></img>
                        <p className='players__text'>Константин Сутормин («Кокос Групп») – пока его брат решал дела по переходу в другой клуб, Константин сражался на «Вернадке» за выход в полуфинал. Полузащитник был ключевой фигурой в центре поля и отметился ассистом на победный гол.</p>
                    </div>
                    <div>
                        <img alt='pavel' src={img_pavel} className='players__img'></img>
                        <p className='players__text'>Павел Погребняк («Кокос Групп») – во второй раз смог сыграть в матче Суперлиги и снова отличился! На этот раз уже дублем и двумя голевыми передачами.</p>
                    </div>
                    <div>
                        <img src={img_artem} className='players__img'></img>
                        <p className='players__text'>Артём Клиндухов – молодой полузащитник был лидером команды на протяжении всего матча и реализовал свой пенальти в серии.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ClubPage