import { styled } from "styled-components";

const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  margin-bottom: 8px;
`

const Contents = styled.p`
  font-size: 1rem;
`

function TeContentsage(props) {
  return (
  <>
    <Title>{props.title}</Title>
      <Contents>{props.contents}</Contents>
  </>
  );
}

export default TeContentsage;
