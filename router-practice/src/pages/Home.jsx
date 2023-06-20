import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return <>
    <div>Home</div>
    <div>
      <button onClick={()=>{navigate('/about')}}>
        About으로 이동
      </button>
      <button onClick={()=>{navigate('/works')}}>
        Works로 이동
      </button>
      <button onClick={()=>{navigate('/contact')}}>
        Contact로 이동
      </button>
      <div>
        <Link to='/contact'>Link API를 사용하여 Contact로 이동</Link>
      </div>
    </div>
  </>;
};

export default Home;