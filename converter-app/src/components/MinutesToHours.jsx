import { useState } from "react";

const MinutesToHours = () => {
  const [amount, setAmount] = useState(0);
  const [inverted, setInverted] = useState(false);

  const reset = () => {
    setAmount(0);
  }

  const invertedHandler = () => {
    setInverted(!inverted);
    reset();
  }
  return (
    <>
      <h3>Minutes To Hours</h3>
      <div>
        <label>Miniutes
          <input
            type="number"
            value={inverted ? amount*60 : amount}
            onChange={(event)=>{setAmount(event.target.value)}}
            disabled={inverted}
          />
        </label>
      </div>
      <div>
        <label>Hours
          <input
            type="number"
            value={inverted ? amount : amount/60}
            onChange={(event)=>{setAmount(event.target.value)}}
            disabled={!inverted}
          />
        </label>
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={invertedHandler}>{inverted ? "Turn back" : "Invert"}</button>
    </>
  );
};

export default MinutesToHours;
