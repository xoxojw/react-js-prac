
import { useState } from "react";
import './App.css';

function App() {
  const [number, setNumber] = useState(0);
  
  const handlePlusButton = () => {
    setNumber(number+1);
  };
  const handleMinusButton = () => {
    setNumber(number-1);
  };

  return (
    <div>
      <p>{number}</p>
      <button onClick={handleMinusButton}>-1</button>
      <button onClick={handlePlusButton}>+1</button>
    </div>
  )
}

export default App;
