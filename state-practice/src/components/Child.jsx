import React, { useContext } from "react";
import { FamilyContext } from "../context/FamilyContext";

const style = {
  color: 'red',
  fontWeight: '700',
}

function Child({ houseName, pocketMoney }) {
  // useContext 사용시 props로 값을 받아오는 것이 아님
  // console.log(houseName);
  // console.log(pocketMoney);
  const data = useContext(FamilyContext);

  // {data.houseName}. {data.pocketMoney}
  // => prop로 내려받은 값이 아닌 context로 내려받은 값
  return (
    <>
      <div>
        나는 이 집안의 막내에요. <br />
        할아버지가 우리 집 이름은 <span style={style}>{data.houseName}</span>라고 하셨어요. <br />
        게다가 용돈도 <span style={style}>{data.pocketMoney}</span>원 만큼이나 주셨어요.
      </div>
    </>
  );
}

export default Child;
