
import React from 'react'

const Card = (props) => {
  const card = props.card

  return (
    <div>
      {card.name}
      <img src={card.images.large} alt={card.name} width="500" height="600"></img>
    </div>
  )
}

export default Card