import React, { useEffect } from "react";
import { auth, provider } from "../firebase";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignOut,
} from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import AccountMenu from "./AccountMenu";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        navigate("/");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

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
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing in:", error);
      });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      navigate("/login");
    });
  };

  return (
    <Nav>
      <Link to="/">
        <Logo src="/images/logo.svg" alt="" />
      </Link>
      {!userName ? (
        <LoginContainer>
          <Login onClick={signIn}>Log In</Login>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <img src="/images/home-icon.svg" alt="" />
            <Link to="/">
              <span>Home</span>
            </Link>
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
          <AccountMenu signOut={signOut} userPhoto={userPhoto} />
        </>
      )}
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 90px;
  height: auto;
  cursor: pointer;
`;

const NavMenu = styled.div`
  display: flex;
  margin-left: 60px;

  img {
    height: 20px;
    margin-right: -5px;
  }

  span {
    font-size: 15px;
    letter-spacing: 1.42px;
    position: relative;
    cursor: pointer;
    padding-left: 10px;
    padding-right: 20px;

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

    &:hover:after {
      opacity: 1;
      transform: scaleX(1);
    }
  }
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
