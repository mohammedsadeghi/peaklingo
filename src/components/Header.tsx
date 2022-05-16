import React from "react";
import styled from "@emotion/styled";

const HeaderPosition = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 50px;
`;

const Button = styled.button`
  background-color: transparent;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  color: #fff;
  &:hover {
    background-color: #000;
  }
`;
const Header: React.FC<{}> = () => {
  return (
    <>
      <HeaderPosition>
        <Button>Home</Button>
        <Button>About</Button>
        <Button>Contact</Button>
      </HeaderPosition>
    </>
  );
};

export default Header;
