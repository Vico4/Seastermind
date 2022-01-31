import '../App.css'

function Ball({id, sent, color, action, type, num}) {
const colors = ['baudroie', 'mante', 'dragon', 'blob']
console.log(colors[color])
    return(
        type ==="solution" ? 
        <button className={num}></button>
        :
        <button 
        className={colors[color]+"Ball"}
        onClick={()=> {!sent ? action(id) 
            : alert("you can't change this anymore")}}
        ></button>
    )
}

export default Ball