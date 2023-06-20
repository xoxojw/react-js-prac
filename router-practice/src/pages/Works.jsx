import React from "react";
import { Link, useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import { data } from "../shared/data";

// 동적 라우팅 (Dynamic Route)
// const data = [
//   {
//     id: 1,
//     todo: '리액트 배우기',
//   },
// ]

const Works = () => {
  const navigate = useNavigate();

  return <>
    <div>Works</div>
    <div>
      <h3>할 일 목록</h3>
      {data.map(item => {
        return (
          <div key={item.id}>
            <div >
              { item.id }
              &nbsp;
              <Link to={`/works/${item.id}`}>{item.todo}</Link>
            </div>
          </div>
        )
      })}
    </div>
    <div>
      <button onClick={() => { navigate('/'); }}>
        Home으로 이동
      </button>
    </div>
  </>;
};

export default Works;
