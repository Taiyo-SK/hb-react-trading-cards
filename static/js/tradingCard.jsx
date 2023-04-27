'use strict';

const tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg',
    cardID: 1,
  },
  {
    name: 'Float',
    skill: 'baking pretzels',
    imgUrl: '/static/img/float.jpg',
    cardId: 2,
  },
  {
    name: 'Llambda',
    skill: 'knitting scarves',
    imgUrl: '/static/img/llambda.jpg',
    cardId: 3,
  },
  {
    name: 'Off-By-One',
    skill: 'climbing mountains',
    imgUrl: '/static/img/off-by-one.jpeg',
    cardId: 4,
  },
  {
    name: 'Seed.py',
    skill: 'watering seeds',
    imgUrl: '/static/img/seedpy.jpeg',
    cardId: 5,
  },
  {
    name: 'Polymorphism',
    skill: 'constumes',
    imgUrl: '/static/img/polymorphism.jpeg',
    cardId: 6,
  },
  {
    name: 'Short Stack Overflow',
    skill: 'ocean animal trivia',
    imgUrl: 'shortstack-overflow.jpeg',
    cardId: 7,
  },
  {
    name: 'Merge',
    skill: 'swimming on land',
    imgUrl: '/static/img/merge.png',
    cardId: 8,
  },
];

function TradingCard(props) {
  return (
    <div className="card">
      <h2>Name: {props.name}</h2>
      <img src={props.imgUrl} alt="profile" />
      <h2>Skill: {props.skill}</h2>
    </div>
  );
}

function TradingCardContainer() {
  const TradingCards = [];

  for (const currentCard of tradingCardData) {
    TradingCards.push(
      <TradingCard
      name={currentCard.name}
      skill={currentCard.skill}
      imgUrl={currentCard.imgUrl}
      />
    );
  }

  return (
    <React.Fragment>
      {TradingCards}
    </React.Fragment>
  );
}

ReactDOM.render(<TradingCardContainer ></TradingCardContainer>, document.querySelector('#parent'));

// ReactDOM.render(
//   <TradingCard name="Balloonicorn" skill="video games" imgUrl="/static/img/balloonicorn.jpg" />,
//   document.querySelector('#balloonicorn'),
// );

// ReactDOM.render(
//   <TradingCard name="Float" skill="baking pretzels" imgUrl="/static/img/float.jpg" />,
//   document.querySelector('#float'),
// );

// ReactDOM.render(
//   <TradingCard name="Llambda" skill="knitting scarves" imgUrl="/static/img/llambda.jpg" />,
//   document.querySelector('#llambda'),
// );

// // Adding new friend, Merge!
// ReactDOM.render(
//   <TradingCard name="Merge" skill="swimming on land" imgUrl="/static/img/merge.png" />,
//   document.querySelector('#merge'),
// );

// // Adding new friend, Seedpy!
// ReactDOM.render(
//   <TradingCard name="Seedpy" skill="watering seeds" imgUrl="/static/img/seedpy.jpeg" />,
//   document.querySelector('#seedpy'),
// );