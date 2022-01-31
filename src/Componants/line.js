import Ball from "./ball";
import Result from "./result";
import Solution from "./solution";
import { useState } from "react";

// gérer les keys des balls

function Line({id, solution }) {
  const lineKey = id;
  const [sent, send] = useState(false);
  const [result, sendResult] = useState(["..",".."])
  const [line, setLine] = useState([0,0,0,0])

  var sol = solution.map((x) => x.toString());

  function ballClick(id) {
      console.log(id)
      let line_tmp = [...line]
      line_tmp[id] = line_tmp[id] === 3 ? 0 : line_tmp[id] + 1
      console.log(line_tmp)
      setLine(line_tmp)
  }

  function tryAction() {
    send(true)
    let answer = [...line]
    console.log(answer);
    console.log(sol);
    // commencer par comparer answer et sol 
    let colorOk = 0;
    let allOk = 0;
    for (let i = 0; i < 4; i++) {
      if (answer[i] == sol[i]) {
        allOk += 1;
        sol[i] = "x";
      }
    }
    console.log(sol);
    for (let i = 0; i < 4; i++) {
      if (answer.includes(sol[i])) {
        colorOk += 1;
      }
    }
    console.log(allOk, colorOk);
    sendResult([allOk, colorOk]);
  }

  return (
    <div className="Line">
      {[0,1,2,3].map((i, _) => ( 
         <Ball
        key={lineKey + i.toString()}
        id={i}
        sent={sent}
        color={line[i]}
        action={ballClick}
      />
       ))}

        <button className="try" onClick={tryAction}>
        {" "}
        Try{" "}
      </button>
      <Result result={result} line={lineKey}/>
    </div>
  );
}

export default Line;
