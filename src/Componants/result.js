
function Result({result, line}) {
    // fonction pour calculer le résultat
    return (
      <div className="showResult">
          <div className="good">{result[0]} good </div>
          <div className="misp">{result[1]} misplaced</div>
          {result[0]===4 ? <div className="win">You Win !</div> : null}
          {line==='10'&& result[0] !== 4 && result[0] !== ".." ? <div className="lose">You Lose !</div> : null}
      </div>
    );
  }

  export default Result