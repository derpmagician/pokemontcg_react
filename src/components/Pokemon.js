import Card from './Card';

const Pokemon = (props) => {
  const card = props.card;
  return (
    <div>
      <Card
        src={card.images.large}
        name={card.name}
        rarity={card.rarity}
        subtypes={card.subtypes}
        artist={card.artist}
        supertype={card.supertype }
      />
      <div className="pkm">
        <div>
          Types:
          { card.types.map((type, index) => <div key={index}>{type} </div>) }
        </div>
        <div>
          Attacks:
          { card.attacks.map((attack, index) => (
            <div key={index}>{attack.name} {attack.cost.map((cost, ind) => <div key={ind}>{cost}</div>)} {attack.damage} {attack.text}
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
      </div>
      

    </div>
  )
}

export default Pokemon