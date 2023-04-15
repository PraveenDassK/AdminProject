import React from "react";
import SideBar from "./../../components/SideBar/index";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
const SignUp = () => {
  const navigate = useNavigate();
  const hanldeClick = () => {
    navigate("/");
  };
  return (
    <MainDiv>
      <SideBar />
      <div
        onClick={hanldeClick}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          fontSize: "50px",
          textAlign: "center",
          width: "100%",
        }}>
        {" "}
        Clickhere to go HomePage
      </div>
    </MainDiv>
  );
};

export default SignUp;
