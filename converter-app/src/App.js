import { useState } from "react";

import KmToMiles from "./components/KmToMiles";
import MinutesToHours from "./components/MinutesToHours";
import CmToInches from "./components/CmToInches";

const App = () => {
  const [index, setIndex] = useState("0");
  const onSelectIndex = (event) => {
    setIndex(event.target.value)
  }

  return (
    <div>
      <h1>Super Converter</h1>
      <select value={index} onChange={onSelectIndex}>
        <option value={"0"}>Select your converter</option>
        <option value={"1"}>Minutes & Hours</option>
        <option value={"2"}>Cm & Inches</option>
        <option value={"3"}>Km & Miles</option>
      </select>
      {index === "0" ? <div>"Please select your converter."</div> : null}
      {index === "1" ? <MinutesToHours /> : null}
      {index === "2" ? <CmToInches /> : null}
      {index === "3" ? <KmToMiles /> : null}
    </div>
  );
};

export default App;