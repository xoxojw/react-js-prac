import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "../shared/data";

const Work = () => {
  const navigate = useNavigate();
  const params = useParams();
  
  // 어떤 todo인지 찾아서 상세페이지 출력하기
  const foundData = data.find((item) => {
    return item.id === parseInt(params.id);
    // item.id는 number, params.id는 string
  })

  return <>
    <div>Works의 하위 페이지 입니다.</div>
    <h3>{foundData.id} {foundData.todo}</h3>
    <div>
      <button onClick={()=>{navigate('/works')}}>Works 첫 화면으로 이동</button>
    </div>
  </>;
};

export default Work;
