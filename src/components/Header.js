import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" alt=""/>
      <NavMenu>
        <a href="#">
          <img src="/images/home-icon.svg" alt=""/>
          <span>Home</span>
        </a>
        <a href="#">
          <img src="/images/search-icon.svg" alt=""/>
          <span>Search</span>
        </a>
        <a href="#">
          <img src="/images/watchlist-icon.svg" alt=""/>
          <span>WatchList</span>
        </a>
        <a href="#">
          <img src="/images/original-icon.svg" alt=""/>
          <span>Originals</span>
        </a>
        <a href="#">
          <img src="/images/movie-icon.svg" alt=""/>
          <span>Movies</span>
        </a>
        <a href="#">
          <img src="/images/series-icon.svg" alt=""/>
          <span>Series</span>
        </a>
      </NavMenu>
      <UserImg src="/images/userImage.jpg"></UserImg>
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
