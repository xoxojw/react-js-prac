import React from "react";
import Child from "./Child";

// FamilyContext를 설정해줌에 따라
// Father 컴포넌트에서 props를 받을 필요 X
function Father({ houseName, pocketMoney }) {
  // console.log(houseName);
  // console.log(pocketMoney)
  return <Child houseName={houseName} pocketMoney={pocketMoney}></Child>;
}

export default Father;
