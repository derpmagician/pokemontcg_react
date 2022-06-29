
import React from 'react'

const Card = (props) => {
  const card = props.card

  return (
    <div>{card.name}</div>
  )
}

export default Card