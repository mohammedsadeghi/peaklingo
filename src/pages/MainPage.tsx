import styled from "@emotion/styled";
import React from "react";
import BackGroundImage from "../assets/images/bg-img.webp";
import Header from "../components/Header";

const BackGround = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${BackGroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  font-size: 30px;
`;
const MainPage: React.FC = () => {
  return (
    <BackGround>
      <Header />
    </BackGround>
  );
};
export default MainPage;
