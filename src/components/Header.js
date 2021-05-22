import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Nav>
      <Link to="/">
        <Logo src="/images/logo.svg" />
      </Link>
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" />
          <span>ORIGINAL</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <NavAvatar src="https://lh3.google.com/u/0/ogw/ADGmqu8JVO207FjOAEfIe-khTgdNC4NCMgdlYZaRhfHK=s32-c-mo" />
    </Nav>
  );
}

const Nav = styled.nav`
  width: 100%;
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0px 30px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0px 12px;
    cursor: pointer;
    img {
      height: 20px;
    }
    span {
      letter-spacing: 1.42px;
      font-size: 13px;
      position: relative;

      &::after {
        content: "";
        height: 3px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        background-color: #fff;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.25, 0.25, 0.25);
        opacity: 0;
      }
    }
    &:hover {
      span::after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const NavAvatar = styled.img`
  border-radius: 50%;
  cursor: pointer;
`;

export default Header;
