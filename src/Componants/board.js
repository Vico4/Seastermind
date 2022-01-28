import Line from './line'
import Solution from './solution';

// créer les lines avec une boucle et gérer les keys 


function Board() {
    var lines = []
    for (let i=0; i<11; i++) {
    lines.push(<Line id={i.toString()} key={i.toString()}/>)
    }

    return (
      <div className="Board">
       {lines}
       <Solution />
      </div>
    );
  }

  export default Board