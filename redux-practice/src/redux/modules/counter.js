// 3. Action Value (강의 1-16. Redux Action Value Creator)
// Action Creator를 사용한다면 Value를 export 해줄 필요는 없다.
// export const PLUS_ONE = "counter/PLUS_ONE";
const PLUS_ONE = "counter/PLUS_ONE";
export const MINUS_ONE = "counter/MINUS_ONE";
const PLUS_N = "counter/PLUS_N";
const MINUS_N = "counter/MINUS_N";

// 4. Action Creator - Action 객체를 리턴하는 '함수'를 정의
// Action 객체는 Action type을 payload만큼 처리하는 것이다.
// ex) payload가 3이면 3만큼 Action type을 하라는 뜻
export const plusOne = () => {
  return {
    type: PLUS_ONE,
  }
}
export const minusOne = () => {
  return {
    type: MINUS_ONE,
  }
}
// Action Value, Action Creator -> Human Error를 줄이기 위해 사용!!!

// payload는 App.jsx의 input에서 입력해주는 값만큼 설정해줄 것이기 때문에
// export할 때 매개변수에 payload를 넣어줘서 export한다.
export const plusN = (payload) => {
  return {
    type: PLUS_N,
    payload,
  }
}
export const minusN = (payload) => {
  return {
    type: MINUS_N,
    payload,
  }
}

// 1. 초기 상태값 (state)
// const [number, setNumber] = useState(0);
const initialState = {
  number: 0,
};

// 2. 리듀서 (Reducer): 'state에 변화를 일으키는' 함수
// 2-(1). state를 action의 type에 따라 변경하는 함수
// input : state와 action 두 가지의 매개변수
const counter = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_ONE:
      return {
        number: state.number + 1,
      };
    case MINUS_ONE:
      return {
        number: state.number - 1,
      };
    case PLUS_N:
      return {
        number: state.number + action.payload,
      };
    case MINUS_N:
      return {
        number: state.number - action.payload,
      };
    default:
      return state;
  }
};

export default counter;

// counter.js는 Ducks 패턴을 바탕으로 작성됨!!!

// Ducks 패턴이란?
// 1. Reducer 함수를 export default 한다.
// 2. Action Creator 함수들을 export 한다.
// 3. Action type은 app/reducer/ACTION_TYPE 형태로 작성한다.
// => 그래서 모듈 파일 1개에 Action type, Action Creator, Reducer가 모두 존재하는 작성 방식