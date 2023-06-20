import React from "react";

const style={
  width: '100px',
  height: '100px',
  backgroundColor: '#73649e',
  color: 'white',
}

const Box3 = () => {
  console.log("Box3 렌더링 완료")
  return <div style={style}>Box3</div>;
};

export default React.memo(Box3);
