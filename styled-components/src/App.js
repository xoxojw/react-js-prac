import { styled } from "styled-components";
import TestPage from "./components/TestPage";
import GlobalStyle from "./GlobalStyle";

const StContainer = styled.div`
  display: flex;
`

const StBox = styled.div`
  width: 100px;
  height: 100px;
  margin: 20px;
  // props 받아오기
  border: 1px solid ${props => props.borderColor};
  background-color: ${props => props.backgroundColor};
`

// 박스의 색 - 배열로 관리
const boxColorList = ['red', 'blue', 'green', 'black'];

// 색을 넣으면 이름을 반환하는 함수
const getBoxName = (color) => {
  switch (color) {
    case 'red':
      return "빨간 박스";
    case 'blue':
      return "파란 박스";
    case 'green':
      return "초록 박스";
    default:
      return "검정 박스";
  }
}

function App() {
  return (
    <>
      {/* <GlobalStyle> */}
        <StContainer>
          {/* props 부여 */}
          <StBox borderColor="red" backgroundColor="salmon">빨간 박스</StBox>
          {boxColorList.map((box) => {
            return <StBox borderColor={box}>{getBoxName(box)}</StBox>
          })}
        </StContainer>
        <TestPage title="제목입니다" contents="내용입니다"></TestPage>
      {/* </GlobalStyle> */}
    </>
  );
}

export default App;
