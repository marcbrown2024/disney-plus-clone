import React from "react";
import { auth, provider } from "../firebase";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignOut,
} from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        let user = result.user;
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
      })
      .catch((error) => {
        console.error("Error signing in:", error);
      });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut);
      navigate("/login");
    });
  };

  return (
    <Nav>
      <Logo src="/images/logo.svg" alt="" />
      {!userName ? (
        <LoginContainer>
          <Login onClick={signIn}>Log In</Login>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <img src="/images/home-icon.svg" alt="" />
            <span>Home</span>
            <img src="/images/search-icon.svg" alt="" />
            <span>Search</span>
            <img src="/images/watchlist-icon.svg" alt="" />
            <span>WatchList</span>
            <img src="/images/original-icon.svg" alt="" />
            <span>Originals</span>
            <img src="/images/movie-icon.svg" alt="" />
            <span>Movies</span>
            <img src="/images/series-icon.svg" alt="" />
            <span>Series</span>
          </NavMenu>
          <UserImg onClick={signOut} src="/images/userImage.jpg"></UserImg>
        </>
      )}
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 90px;
  cursor: pointer;
`;

const NavMenu = styled.div`
  display: flex;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0 12px;

    img {
      height: 20px;
      padding-right: 5px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &:hover {
      span:after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`;

const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
`;

const LoginContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

const Login = styled.div`
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  padding: 8px 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  cursor: pointer;
  color: #fff;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
