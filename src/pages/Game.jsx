import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Layout, Score, Timer } from "../components";
import { cards } from "../constants/cards";
import { ramdomizer } from "../constants/utils";

export default function Game() {
  const [board, setBoard] = useState(() => {
    return ramdomizer([...cards, ...cards]);
  });
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    playerWin();

    if (selectedCards.length < 2) return;

    if (board[selectedCards[0]] === board[selectedCards[1]]) {
      setMatchedCards([...matchedCards, ...selectedCards]);
      setScore((prevScore) => prevScore + 5);
      setSelectedCards([]);
    } else {
      setTimeout(() => {
        setSelectedCards([]);
        setScore((prevScore) => prevScore - 1);
      }, 1000);
    }
  }, [selectedCards]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleFlip = (index) => {
    if (selectedCards.length >= 2 || selectedCards.includes(index)) return;

    setSelectedCards([...selectedCards, index]);
  };

  const resetGame = () => {
    setSelectedCards([]);
    setMatchedCards([]);
    setScore(0);
    setSeconds(0);
  };

  const playerWin = () => {
    if (board.length === matchedCards.length) {
      navigate(`/result?score=${score}&time=${seconds}`);
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center flex-col">
        <div className="w-full flex items-center justify-center md:justify-evenly mb-16 md:flex-row flex-col md:gap-0 gap-8">
          <Timer seconds={seconds} />
          <Score points={score} />
          <Button title="Recargar" rotate={6} onClick={resetGame} />
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-8">
          {board.map((card, index) => {
            const flipped =
              selectedCards.includes(index) || matchedCards.includes(index);

            return (
              <Card
                key={index}
                card={card}
                handleFlip={() => handleFlip(index)}
                flipped={flipped}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
