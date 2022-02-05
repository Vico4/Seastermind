import { useState } from 'react';
import Line from './line'
import Solution from './solution';

function Board() {
    const solution = getCode()
    const [gameOver, endGame] = useState(false)
    var lines = []
    for (let i=0; i<11; i++) {
    lines.push(<Line id={i.toString()} key={i.toString()} solution={solution} gameOver={gameOver} endGame={endGame}/>)
    }

    function getCode(){
      let code = []
      let num
      for(let i = 0; i < 4; i++) {
          num = Math.floor(Math.random() * 4)
          code.push(num)
      }
      return code
  }

    return (
      <div className="Board">
       {lines}
       <Solution solution={solution} gameOver={gameOver} endGame={endGame}/>
      </div>
    );
  }

  export default Board