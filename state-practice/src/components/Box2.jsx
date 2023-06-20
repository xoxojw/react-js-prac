import React from "react";

const style={
  width: '100px',
  height: '100px',
  backgroundColor: '#5f7ad9',
  color: 'white',
}

const Box2 = () => {
  console.log("Box2 렌더링 완료")
  return <div style={style}>Box2</div>;
};

export default React.memo(Box2);
