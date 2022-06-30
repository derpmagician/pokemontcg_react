import React from 'react'

const Card = (props) => {
  console.log(props)
  console.log(props.subtypes)
  return (
    <div className="commondesc__container">
      <div className="imglg__container">
        <img className="imglg__img" src={props.src} alt={props.name}></img>
      </div>
      <div className="commondesc__name">
        {props.name}
      </div>
      <div className="commondesc__supertype">
        {props.supertype}
      </div>
      <div className="commondesc__rarity">
        {props.rarity}
      </div>
      <div className="commondesc__subtypes">
        { props.subtypes.map((subtype, subid) => <div key={subid}>{subtype} </div>) }
      </div>
      <div className="commondesc__artist">
        {props.artist}
      </div>
    </div>
  )
}

export default Card