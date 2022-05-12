const CardList = ({cards}) => {
  return (
    <main >
      <ul className="pokemon_list">
        { !cards ? "Cargando" : cards.map((card) => {
          return (
            <li key={card.id} >
              <div className="name">{card.id} {card.name} HP {card.hp}</div>
              <div className="image">
                <img alt={card.name} src={card.images.small}></img>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}

export default CardList