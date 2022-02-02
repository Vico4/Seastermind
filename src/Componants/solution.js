import Ball from './ball'
import {useState} from 'react'

function Solution({solution}) {
    const colors = ['baudroie', 'mante', 'dragon', 'blob']
    const [display, show] = useState(false)
    
    return(
        <div>
        <button className="showSol" onClick={()=>show(true)}>Show solution</button>
        {display === true ? <div className='solution'>
        {solution.map((x,i) => <Ball type="solution" color={x} key={i+"Sol"}/>)}
         </div> : null}
         </div>
    )
}

export default Solution