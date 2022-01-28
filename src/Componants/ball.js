import '../App.css'
import { useState } from 'react'

// utiliser un state empty / selected / tried 
function Ball() {
    const colors = ['baudroie', 'mante', 'dragon', 'blob']
    const [selectedBall, selectBall] = useState(0)
    const color = colors[selectedBall]
    
// onclick -> selon le type, 

    /* function selectBall(currColor){

    } */

    return(
        <button 
        className={color+"Ball"}
         /* id={props.key} */
    onClick={()=> {selectBall(selectedBall === 3 ? 0 : selectedBall + 1)}}
        >  </button>
    )
}

export default Ball