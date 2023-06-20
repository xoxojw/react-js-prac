import { useState } from 'react';

function App() {

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  console.log("id", id);
  console.log("passworld", password);

  const onIdChangeHandler = (event) => {
    setId(event.target.value);
  }

  const onPwChangeHandler = (event) => {
    setPassword(event.target.value);
  }

  const onBtnClinkHandler = (event) => {
    event.target.addEventListener("click", alert(`고객님이 입력하신 아이디는 ${id}이며, 비밀번호는 ${password}입니다.`))
    setId('');
    setPassword('');
    }
  

  return (
    <div>
      아이디 : <input type="text" value={id} onChange={onIdChangeHandler} />
      <br />
      비밀번호 : <input type="password" value={password} onChange={onPwChangeHandler} />
      <br />
      <button onClick={onBtnClinkHandler}>로그인</button>
    </div>
  )
}

export default App