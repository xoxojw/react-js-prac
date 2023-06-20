import { useState, useMemo } from "react";

const HeavyComponent = () => {
  const [count, setCount] = useState(0);
  const plusButtonClickhandler = () => {
    setCount(count + 1);
  }

  const heavyWork = () => {
    for (let i = 0; i < 1000000000; i++) { }
    return 100;
  }

  // useMemo를 적용하기 전과 후의 렌더링 처리 속도 비교
  // const value = heavyWork();
  const value = useMemo(() => heavyWork(), []);
  console.log(`value는 ${value}입니다.`)

  return (<>
    <p>나는 엄청 무거운 컴포넌트야!</p>
    <button onClick={plusButtonClickhandler}>
      누르면 아래 count가 올라가요!
    </button>
    <div>{count}</div>
  </>);
};

export default HeavyComponent;
