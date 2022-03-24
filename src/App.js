import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const decment = () => {
    setCount(count + 1);
  };
  const incment = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={decment}>+</button>
      <button onClick={incment}>-</button>
    </div>
  );
}

export default App;
