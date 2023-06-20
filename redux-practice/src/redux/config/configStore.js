// configStore.js -> 중앙 데이터 관리소(store)를 설정하는 파일
import { createStore } from "redux";
import { combineReducers } from "redux";
import counter from "../modules/counter";

// rootReducer: reducer들을 모아서 하나로 만들어 놓은 기본 reducer
const rootReducer = combineReducers({
  // 객체에서 key-value가 같으면 생략해서 1번만 작성 가능
  // counter: counter,
  counter,
});
const store = createStore(rootReducer);

// 위에서 만든 store를 사용하기 위해 밖으로 export
export default store;