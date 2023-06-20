import React from "react";
import { useState, useEffect  } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
      .then((json) => {
        // setData(json) 하면 안됨
        // 새로운 값이 들어왔다는 것을 알려주기 위해
        // spread operator를 이용해서 원래의 값을 풀어주고 다시 묶어줘야함
        setData([...json]);
        return console.log(json);
      });
  }, [])
  return (
    <>
      <h3>JSONPlaceholder DATA</h3>
      {
        data.map((i) => {
          return (
            <div style={{
              border: '1px solid black',
              margin: '5px',
            }}>
              <ul>
                <li>{i.userId}</li>
                <li>{i.id}</li>
                <li>{i.title}</li>
                <li>{i.body}</li>
              </ul>
            </div>
        )})
      }
    </>);
};

export default App;
