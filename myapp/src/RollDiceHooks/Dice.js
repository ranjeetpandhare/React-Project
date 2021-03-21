import React, { useState, useEffect } from 'react';
import Winner from './Winner';

function Dice() {
  const [welcome, setWelcome] = useState(false);
  const [diceNum, setDiceNum] = useState(null);

  useEffect(() => {

    document.title = 'game of dice';
    if (!welcome) {
      console.log('welcome to game of dice');
      setWelcome(true);
    }
    console.log('last roll number: ', diceNum, 'roll dice')
    return function cleanup() {
      console.log('pick up dice')
    }
  });


  return (
    <div>
      <h1>game of dice</h1><br />
      <button className="btn btn-primary" onClick={() => setDiceNum(Math.floor((Math.random() * 6) + 1))}>
        roll dice
      </button><br />
      <h2>the number is:</h2> {diceNum}
      <Winner number={diceNum} />
    </div>
  );
}
export default Dice;