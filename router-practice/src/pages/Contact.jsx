import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  
  return <>
    <div>Contact</div>
    <div>
      <button onClick={() => {navigate("/")}}>
        Home으로 이동
      </button>
    </div>
  </>;
};

export default Contact;
