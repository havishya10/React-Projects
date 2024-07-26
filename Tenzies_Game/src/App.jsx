import React from "react";
import "./App.css";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "./components/Confetti";
export default function App() {
  const [dieValue, setDieValues] = React.useState(rollDie());
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    const tenzieValues = dieValue.every(
      (die) => die.isHeld && die.value === dieValue[0].value
    );
    tenzieValues ? setTenzies(true) : setTenzies(false);
  }, [dieValue]);
  //  ARRAY TO GENERATE RANDOM DIE VALUES.
  function rollDie(ar = 10) {
    const dieArray = [];
    for (let i = 0; i < ar; i++) {
      dieArray.push({
        id: nanoid(),
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
      });
    }
    return dieArray;
  }
  function roll() {
    if (!tenzies) {
      setDieValues((prevState) => {
        return prevState.map((die) => {
          return die.isHeld
            ? die
            : { ...die, value: Math.floor(Math.random() * 6) + 1 };
        });
      });
    } else {
      setTenzies(false);
      setDieValues(rollDie());
    }
  }
  console.log(rollDie());
  function holdDice(id) {
    console.log(id);
    setDieValues((prevState) =>
      prevState.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }
  const styles = {
    color: tenzies ? "darkgreen" : "blacK",
  };
  return (
    <main>
      {tenzies && <Confetti />}
      <h1 style={styles}>{tenzies ? "You Won" : "TenZies"}</h1>
      <p>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="die-container">
        {dieValue.map((dice) => (
          <Die
            value={dice.value}
            key={dice.id}
            held={dice.isHeld}
            id={dice.id}
            holdDice={() => holdDice(dice.id)}
          />
        ))}
      </div>
      <button className="roll-button" onClick={roll}>
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}
