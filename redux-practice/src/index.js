import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// 아래 두 개 import
import { Provider } from "react-redux";
import store from "./redux/config/configStore";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
// provider: 위에서 만들었던 store을 기반으로 지배권을 행사하도록 하는 것
// <Provider>로 <App /> 컴포넌트를 감싸면,
// App 컴포넌트가 Provider의 지배권 안으로 들어옴
  <Provider store={store}>
    <App />
  </Provider>
);