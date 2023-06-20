import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location)

  return <>
    <div>About</div>
    <div>
      <button onClick={() => {
        navigate("/")
      }}>Home으로 이동
      </button>
    </div>
  </>;
};

export default About;
