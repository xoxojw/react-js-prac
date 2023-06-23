import { useState } from "react";

const CmToInches = () => {
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
      <h3>Cm To Inches</h3>
      <div>
        <label>CM
          <input
            value={inverted ? amount * 2.54 : amount}
            onChange={(e)=>(setAmount(e.target.value))}
            type="number"
            disabled={inverted}
          />
        </label>
      </div>
      <div>
        <label>Inches
          <input
            value={inverted ? amount : amount / 2.54}
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

export default CmToInches;
