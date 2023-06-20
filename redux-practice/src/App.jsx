import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// Human Error를 줄일 수 있도록
// 1) counter.js에서 변수화 한 Action Value를 import
// import { PLUS_ONE } from "./redux/modules/counter";
import { MINUS_ONE } from "./redux/modules/counter";

// 2) Action Value 말고 Action Creator 함수를 import 할 수도 있음
import { plusOne } from "./redux/modules/counter"; 
// import { minusOne } from "./redux/modules/counter";

// payload 사용
import { plusN, minusN } from "./redux/modules/counter";

const App = () => {

  // 1. Redux Hook - useSelector
  // 여기에서 store에 접근하여, counter의 값을 읽어오고 싶다.
  // state: 중앙 저장소 state 전체
  const counter = useSelector((state) => {
    return state.counter;
  });

  // 2. Redux Hook  - useDispatch
  // dispatch를 가져와보자
  const dispatch = useDispatch();

  // 강의 1-17. payload 설명을 위해 useState 세팅
  const [number, setNumber] = useState(0);
  // useEffect
  // 의존성 배열 안에 설정해준 값, 즉 number값이 바뀌어서 렌더링 될 때 
  // console.log를 찍는다.
  useEffect(() => {
    console.log("number ->" + number)
  }, [number])

  return <>
    <div>현재 카운트 : {counter.number}</div>
    <div>
      <input
        type="number"
        value={number}
        onChange={(event) => {
          setNumber(+event.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(plusN(number));
        }}>
        만큼 더하기
      </button>
      <button
        onClick={() => {
          dispatch(minusN(number));
        }}>
        만큼 빼기
        </button>
    </div>
    <button
      // +1을 해주는 로직을 작성
      // dispatch는 객체를 반환, plusOne() 함수가 가지고 있는 것->action 객체
      onClick={() => { dispatch(plusOne()) }}>
      +1
    </button>
    <button
      onClick={() => {
      // -1을 해주는 로직을 작성
      dispatch({
        type: MINUS_ONE,})
      }}>
      -1
    </button>
  </>
};

export default App;