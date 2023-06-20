import React, { useState } from "react";
import './App.css';
import Button from "./components/Button";
import User from "./components/User";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 21, name: "김유정" },
    { id: 4, age: 29, name: "구교환" },
  ]);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const nameChangeHandler = (event) => { setName(event.target.value); };
  const ageChangeHandler = (event) => { setAge(event.target.value); };

  // 추가 버튼 클릭
  const clickAddButtonHandler = () => {
    // 1. 새로운 형태의 이놈을 만든다.
    // 이놈: { id: 1, age: 30, name: "송중기" }
    // 2. 이놈을 배열에 더한다.
    const newUser = {
      id: users.length + 1,
      age,
      name,
    }

    setUsers([...users, newUser]);
  };

  // 삭제 버튼 클릭
  const clickRemoveButtonHandler = (props) => {
    const newUsers = users.filter(user => user.id !== props);
    setUsers(newUsers);
  }

  return (
    <div>
      <div className="input-style">
        이름 : <input 
          value={name}
          onChange={nameChangeHandler}
        />
        나이 : <input 
          value={age}
          onChange={ageChangeHandler}
        />
        <Button clickAddButtonHandler={clickAddButtonHandler} />
      </div>
      <div className="app-style">
        {users.map((item) => {
          return <User key={item.id} item={item} clickRemoveButtonHandler={clickRemoveButtonHandler} />;
        })}
      </div>
    </div>
  );
}

export default App;
