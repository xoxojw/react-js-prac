import React from "react";

const style={
  width: '100px',
  height: '100px',
  backgroundColor: '#649e73',
  color: 'white',
}

const Box1 = ({initCount}) => {
  console.log("Box1 렌더링 완료")
  return (
    <div style={style}>
      <button onClick={initCount}>초기화</button>
    </div>);
};

export default React.memo(Box1);
