import { useState, useEffect, useRef, useCallback } from "react";
import GrandFather from "./components/GrandFather";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";

const style = {
  width: "50vh",
  border: "1px solid black",
  margin: "10px",
  padding: "10px",
}

function App() {
  console.log("App 컴포넌트가 렌더링 되었습니다!")
  const [count, setCount] = useState(0)
  const countRef = useRef(0);

  const plusStateCountButtonHandler = () => {
    setCount(count => count + 1);
  }

  const plusRefCountButtonHandler = () => {
    console.log(countRef.current++);
  }

  const idRef = useRef("");
  const pwRef = useRef("");

  const [id, setId] = useState("");

  useEffect(() => {
    console.log("최초 렌더링이 됐어요! 아이디 input에 focusing 됐나요?")
    idRef.current.focus();
  }, []);
  
  useEffect(() => {
    if (id.length >= 10) {
      pwRef.current.focus();
    }
  })

  // 1-7. React.memo
  const [countMemo, setCountMemo] = useState(0);
  const onMinusButtonClickHandler = () => {
    setCountMemo(countMemo - 1);
  }
  const onPlusButtonClickHandler = () => {
    setCountMemo(countMemo + 1);
  }
  
  // 1-8. useCallback
  // countMemo를 초기화해주는 함수
  const initCount = useCallback(() => {
    console.log(`${countMemo}에서 0으로 변경되었습니다.`)
    setCountMemo(0);
  }, [countMemo]);

  return (
    <>
      <div style={style}>
        state 영역입니다. {count} <br />
        <button onClick={plusStateCountButtonHandler}>state 증가</button>
      </div>
      <div style={style}>
        ref 영역입니다. {countRef.current} <br />
        <button onClick={plusRefCountButtonHandler}>ref 증가</button>
      </div>
      <div style={style}>
        <div>
          아이디: <input
            type="text"
            value={id}
            onChange={(event) => {
              setId(event.target.value);
            }}
            ref={idRef}
          />
        </div>
        <div>
          비밀번호: <input
            type="password"
            ref={pwRef}
          />
        </div>
      </div>
      <div style={style}>
        <GrandFather></GrandFather>
      </div>
      <div style={style}>
        {/* ⭐ 카운트 예제 */}
        {/* -, + 버튼을 클릭 할 때 숫자는 바뀌면서 렌더링 되어야 하고 */}
        <h3>카운트 예제입니다!</h3>
        <p>현재 카운트: {countMemo}</p>
        <button onClick={onMinusButtonClickHandler}>-</button>
        <button onClick={onPlusButtonClickHandler}>+</button>
        {/* 기본적으로는 부모 컴포넌트인 카운터가 렌더링될 때 자식 컴포넌트들도 함께 렌더링이 되는데,
        자식 컴포넌트인 Box1, 2, 3은 state에 변화가 없으니
        렌더링이 되지 않게 하려고 한다. */}
        <div style={{
          display: "flex",
          marginTop: "10px",
        }}>
          <Box1 initCount={initCount} />
          <Box2 />
          <Box3 />
        </div>
      </div>
    </>
  );
}

export default App;
