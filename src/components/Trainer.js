import Card from './Card';

function Trainer(props) {
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
    </div>
  )
}

export default Trainer