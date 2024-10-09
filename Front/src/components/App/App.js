import React, { useState } from "react";
import './App.css';
import Header from '../Header/Header';
import MainPage from '../MainPage/MainPage';
import ClubPage from "../ClubPage/ClubPage";
function App() {
  const [activePage, setActivePage] = useState({ futbol_club: true, news: false, matchs: false, club: false, contacts: false, media: false, shop: false })
  return (
    <div className="App">
      <Header activePage={activePage} setActivePage={setActivePage}/>
      {activePage.futbol_club ? 
        (<MainPage />) : 
          (activePage.club ? (<ClubPage />): ('')
            )
          }
      </div>
  );
}

export default App;
