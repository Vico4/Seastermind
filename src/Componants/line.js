import Ball from "./ball";
import Result from "./result";
import { useState } from "react";

// gérer les keys des balls

function Line({ id, solution, endGame, gameOver}) {
  const lineKey = id;
  const [sent, send] = useState(false);
  const [result, sendResult] = useState(["..", ".."]);
  const [line, setLine] = useState([0, 0, 0, 0]);

  function ballClick(id) {
    if (!gameOver) {
    let line_tmp = [...line];
    line_tmp[id] = line_tmp[id] === 3 ? 0 : line_tmp[id] + 1;
    setLine(line_tmp);
    }
  }

  function tryAction() {
    send(true);
    var sol = [...solution];
    let answer = [...line];
    let colorOk = 0;
    let allOk = 0;
    if (answer === sol) {
      sendResult([4, 0])
    } else {
      for (let i = 0; i < 4; i++) {
        if (answer[i] === sol[i]) {
          allOk += 1;
          sol[i] = "x";
          answer[i] = "o"
        }
      }
      for (let i = 0; i < 4; i++) {
        if (answer.includes(sol[i])) {
          colorOk += 1;
        }
      }
      sendResult([allOk, colorOk]);
    }
  }

  return (
    <div className="Line">
      {[0, 1, 2, 3].map((i, _) => (
        <Ball
          key={lineKey + i.toString()}
          id={i}
          sent={sent}
          color={line[i]}
          action={ballClick}
        />
      ))}

      <button className="try" onClick={tryAction}>
        Try
      </button>
      <Result result={result} line={lineKey} />
    </div>
  );
}

export default Line;
