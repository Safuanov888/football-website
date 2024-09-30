
import './CardsList.css';
import Card from '../Card/Card'

function CardsList({cardsData}) {
  return (
    <div className="cards">
        {cardsData.map((card)=>(
            <Card card={card}/>
        ))}
    </div>
  );
}

export default CardsList;