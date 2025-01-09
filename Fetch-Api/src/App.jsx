import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  const [cards, setCards] = useState([]);

  const fetchApi = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts");
    let b = await a.json();
    setCards(b);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        {cards.map((card) => {
          return (
            <div key={card.id} className="card">
              <h2>{card.title}</h2>
              <p>{card.body}</p>
              <span>By: userId: {card.userId}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
