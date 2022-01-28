import Ball from "./ball";
import Result from "./result";
import Try from "./tryAnswer";

// gérer les keys des balls

function Line({id}) {
  const lineKey = id;
  var balls = [];
  for (let i = 0; i < 4; i++) {
    balls.push(<Ball key={lineKey + i.toString()} />);
  }

  return (
    <div className="Line">
      {balls}
      <Result />
      <Try />
    </div>
  );
}

export default Line;
