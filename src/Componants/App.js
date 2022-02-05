import { useState } from 'react'
import Board from './board'


function App() {
  const [solution, start] = useState()

  function getCode(){
    let code = []
    let num
    for(let i = 0; i < 4; i++) {
        num = Math.floor(Math.random() * 4)
        code.push(num)
    }
    console.log(code)
    return code
}

  function startGame() {
    const code = getCode()
    start(code)
  }

  return (
    <div className="App">
      <button onClick={()=>{startGame()}}> Start Game</button>
      { !solution ? null : <Board solution={solution}/>}
    </div>
  );
}

export default App;


/* To-do List : 
> rendre le tout styléééééé
*/
