import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [temperature, setTemperature] = useState(15);
  const [color, setColor] = useState("neutral");

  const decrement = () => {
    if (temperature === 0) {
      return;
    }

    const newTemp = temperature - 1;

    if (newTemp < 15) {
      setColor("cold");
    } else if (newTemp === 15) {
      setColor("neutral")
    }

    setTemperature(newTemp);
  };

  const increment = () => {
    if (temperature === 30) {
      return;
    }

    const newTemp = temperature + 1;
    
    if (newTemp > 15) {
      setColor("hot");
    } else if (newTemp === 15) {
      setColor("neutral")
    }

    setTemperature(newTemp);
  };

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${color}`}>{temperature}℃</div>
      </div>
      <div className="button-container">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default App;
