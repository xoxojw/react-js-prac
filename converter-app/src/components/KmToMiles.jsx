import { useState } from "react";

const KmToMiles = () => {
  const [amount, setAmount] = useState(0);
  const [inverted, setInverted] = useState(false);

  const reset = () => {
    setAmount(0);
  }

  const invertHandler = () => {
    setInverted(!inverted);
    reset()
  }

  return (
    <>
      <h3>Km To Miles</h3>
      <div>
        <label>Km
          <input
            value={inverted ? amount * 1.609 : amount}
            onChange={(e)=>(setAmount(e.target.value))}
            type="number"
            disabled={inverted}
          />
        </label>
      </div>
      <div>
        <label>Miles
          <input
            value={inverted ? amount : amount / 1.609}
            onChange={(e)=>setAmount(e.target.value)}
            type="number"
            disabled={!inverted}
          />
        </label>
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={invertHandler}>{inverted ? "Turn back" : "Invert"}</button>
    </>
  );
};

export default KmToMiles;
