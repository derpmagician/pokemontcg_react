
import React from 'react'

const Pokemon = (props) => {
  const card = props.card;
  return (
    <div>

      <img src={card.images.large} alt={card.name} width="500" height="600"></img>
      {card.name} {card.hp}
      <div>
        Supertype:
        { card.supertype }
      </div>
      <div>
        Types:
        { card.types.map((type, index) => <div key={index}>{type} </div>) }
      </div>
      <div>
        Attacks:
        { card.attacks.map((attack, index) => (
          <div key={index}>{attack.name} {attack.cost} {attack.damage} {attack.text}
          </div>
        )) }
      </div>
      <div>
        Weakness:
        { card.weaknesses.map((weakness, index) => <div key={index}>{weakness.type} {weakness.value}</div>) }
      </div>
      <div>
        Retreat Cost:
        { card.retreatCost.map((retreatCost, index) => <div key={index}>{retreatCost} </div>) }
      </div>
      <div>
        Subtypes:
      { card.subtypes.map((subtype, index) => <div key={index}>{subtype} </div>) }
      </div>

    </div>
  )
}

export default Pokemon