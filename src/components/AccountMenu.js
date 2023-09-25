import React, { useRef, useState } from "react";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";

function AccountMenu({ userPhoto, signOut }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleUserImgHover = () => {
    setIsMenuOpen(true);
  };

  const handleUserImgLeave = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div style={{ flex: 1 }}></div>
      <UserImg onClick={handleUserImgHover} src={userPhoto}></UserImg>
      {isMenuOpen && (
        <AccountDropMenu>
          <Img onClick={handleUserImgLeave} src={userPhoto}></Img>
          <Line></Line>
          <Add>
            <AddButton>
              <div>
                <AddIcon />
              </div>
            </AddButton>
            <p>Add Profile</p>
          </Add>
          <li>Edit Profiles</li>
          <li>App Settings</li>
          <li>Account</li>
          <li>Help</li>
          <li onClick={signOut}>Log Out</li>
        </AccountDropMenu>
      )}
    </>
  );
}

export default AccountMenu;

const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  left: 160px;
`;

const AccountDropMenu = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%; 
  max-width: 250px; 
  padding: 10px 16px;
  border: 1px solid #393939;
  border-radius: 5px;
  background-color: #131313;
  position: absolute;
  top: 0;
  bottom;
  right: 0;
  z-index: 1000;

  li {
    cursor: pointer;
    list-style: none;
    font-size: 15px;
    color: #b5b5b5;
    line-height: 2rem;

    &:hover {
      color: #fff;
    }
  }

  @media (max-width: 768px) { 
    img {
      width: 40px;
      height: 40px;
    }
    li {
      font-size: 14px;
    }
  }

  @media (max-width: 576px) { 
    img {
      width: 30px;
      height: 30px;
    }
    li {
      font-size: 12px;
    }
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  margin: 15px 0px;
  background: #393939;
`;

const Add = styled.div`
  display: flex;
  alignitems: center;
  marginbottom: 10px;

  p {
    cursor: pointer;
    color: #b5b5b5;

    &:hover {
      color: #fff;
    }
  }
`;

const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  background-color: rgba(249, 249, 249, 0.1);
  cursor: pointer;

  &:hover {
    background-color: #414141;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    color: #cbcbcb;
  }
`;
