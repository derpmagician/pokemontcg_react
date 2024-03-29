import { Link } from 'react-router-dom';
import classes from './CardList.module.css';

const CardList = ({cards}) => {
  return (
    <main >
      <ul className={classes.pokemon_list}>
        { !cards ? "Cargando" : cards.map((card) => {
          // console.log(card);
          return (
            <li key={card.id} >
              <div className={classes.card_container}>
                <div className={classes.card_name}>{card.name} HP {card.hp}</div>
                <div className={classes.img_container}>
                  <Link to={`/card/${card.id}`}>
                    <img className={classes.img} alt={card.name} src={card.images.small} loading="lazy"></img>
                  </Link>
                </div>
              </div>

              
            </li>
          )
        })}
      </ul>
    </main>
  )
}

export default CardList