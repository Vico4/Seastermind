import Line from './line'
import Solution from './solution';

// créer les lines avec une boucle et gérer les keys 


function Board() {
    const solution = getCode()
    var lines = []
    for (let i=0; i<11; i++) {
    lines.push(<Line id={i.toString()} key={i.toString()} solution={solution}/>)
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
       <Solution solution={solution}/>
      </div>
    );
  }

  export default Board