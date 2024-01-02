import "./index.css";
import Circle from "./components/Circle";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <div className="circleContainer">
        <h3>
          P: <span>{score}</span>
        </h3>

        {score === 16 && <h1>FINISHED!!! 🎉</h1>}
        <Circle colors={["pink", "yellow"]} setScore={setScore} score={score} />
        <Circle colors={["blue", "red"]} setScore={setScore} score={score} />
        <Circle
          colors={["silver", "white"]}
          setScore={setScore}
          score={score}
        />
        <Circle colors={["green", "coral"]} setScore={setScore} score={score} />
        <Circle
          colors={["black", "orange"]}
          setScore={setScore}
          score={score}
        />
        <Circle colors={["pink", "brown"]} setScore={setScore} score={score} />
        <Circle colors={["white", "blue"]} setScore={setScore} score={score} />
        <Circle colors={["purple", "blue"]} setScore={setScore} score={score} />
        <Circle colors={["pink", "brown"]} setScore={setScore} score={score} />
        <Circle colors={["white", "blue"]} setScore={setScore} score={score} />
        <Circle colors={["purple", "blue"]} setScore={setScore} score={score} />
        <Circle colors={["pink", "yellow"]} setScore={setScore} score={score} />
        <Circle colors={["blue", "red"]} setScore={setScore} score={score} />
        <Circle
          colors={["silver", "white"]}
          setScore={setScore}
          score={score}
        />
        <Circle colors={["green", "coral"]} setScore={setScore} score={score} />
        <Circle
          colors={["black", "orange"]}
          setScore={setScore}
          score={score}
        />
      </div>
    </div>
  );
}

export default App;
