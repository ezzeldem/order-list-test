import react, { useState } from "react";
import "./app.css";
function App() {
  const [cardList, setCardList] = useState([
    { title: "order 1", id: 1, order: 1 },
    { title: "order 2", id: 2, order: 2 },
    { title: "order 3", id: 3, order: 3 },
    { title: "order 4", id: 4, order: 4 },
  ]);

  const [currentCard, setCurrentCard] = useState(null);

  const dragStartHandler = (e, card) => {
    setCurrentCard(card);
  };

  const dragLeaveHandler = (e) => {
    e.target.style.background = "#fff";
  };

  const dragEndHandler = (e) => {
    e.target.style.background = "#fff";
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
    e.target.style.background = "lightgreen";
  };

  const dropHandler = (e, card) => {
    e.preventDefault();

    setCardList(
      cardList.map((c) => {
        if (c.id === card.id) {
          return { ...c, order: card.order - 1 };
        }
        if (c.id === currentCard.id) {
          return { ...c, order: card.order - 1 };
        }
        return c;
      })
    );
    console.log(cardList);
    e.target.style.background = "#fff";
  };

  const sortCards = (a, b) => {
    if (a.order > b.order) {
      return 2;
    } else {
      return -1;
    }
  };

  return (
    <div className='app'>
      <h3 className='minTitle'>Order Your Favorite Langue</h3>
      {cardList.sort(sortCards).map((card) => (
        <div
          draggable={true}
          onDragStart={(e) => dragStartHandler(e, card)}
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDragEnd={(e) => dragEndHandler(e)}
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropHandler(e, card)}
          className='list-item'
          key={card.id}
        >
          {card.title}
        </div>
      ))}
    </div>
  );
}

export default App;
