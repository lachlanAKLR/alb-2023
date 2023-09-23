import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.div`
  .nav-inner {
    width: 100%;
    height: 80px;
    border-bottom: 1px solid var(--grey);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    background: var(--cream);
    z-index: 5000;
  }
  .nav-links {
    display: flex;
    gap: 70px;
    justify-content: center;
  }

  .desktop-nav {
    display: block;
  }

  .mobile__nav {
    display: none;
  }

  @media only screen and (max-width: 1100px) {
    .mobile__nav {
      position: fixed;
      width: 100%;
      display: block;
      height: 45px;
      border-bottom: 1px solid var(--grey);
      text-align: center;
      transition: all 0.5s ease-in-out;
      background-color: var(--cream);
      z-index: 7000;
    }
    .open {
      height: 100vh;
    }

    .mobile__nav-inner {
      padding-top: 7px;
    }

    .desktop-nav {
      display: none;
    }
    .bar {
      display: block;
      width: 30px;
      height: 1px;
      margin: 5px auto;
      -webkit-transition: all 0.5s ease-in-out;
      transition: all 0.5s ease-in-out;
      background-color: var(--grey);
      position: relative;
    }

    .hidden {
      position: absolute;
      top: 11px;
      transition: all 0.1s ease-in-out;
    }

    .nav-links {
      display: flex;
      flex-direction: column;
      gap: 60px;
    }

    .nav__appear {
      opacity: 1;
      pointer-events: all;
      transition: all ease 0.25s;
    }

    .nav-links__wrapper {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-bottom: 100px;
      opacity: 0;
      pointer-events: none;
      transition: all ease 0.25s;
    }

    .nav-links__wrapper-appear {
      opacity: 1;
      pointer-events: all;
      transition: all ease 0.25s 0.5s;
    }
  }
`;

function NavLinks() {
  return (
    <ul className="nav-links">
      <li>
        <Link to="/">
          <h4 className="underline">Home</h4>
        </Link>
      </li>
      <li>
        <Link to="/about">
          <h4 className="underline">About Us</h4>
        </Link>
      </li>
      <li>
        <Link to="/services">
          <h4 className="underline">Our Services</h4>
        </Link>
      </li>
      <li>
        <Link to="/resources">
          <h4 className="underline">Resources</h4>
        </Link>
      </li>
      <li>
        <Link to="/journal">
          <h4 className="underline">Journal</h4>
        </Link>
      </li>
      <li>
        <Link swipe to="/contact">
          <h4 className="underline">Contact Us</h4>
        </Link>
      </li>
    </ul>
  );
}

export default function Nav() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };
  return (
    <nav>
      <NavStyles>
        <div className="desktop-nav">
          <div className="nav-inner">
            <NavLinks />
          </div>
        </div>
        <div className={isActive ? 'mobile__nav open' : 'mobile__nav'}>
          <div className="mobile__nav-inner">
            <button
              className="header__menu"
              type="button"
              onClick={handleClick}
            >
              <div className="header__hamburger">
                <span className={isActive ? 'bar hidden' : 'bar'} />
                <span className={isActive ? 'bar' : 'bar'} />
                <span className={isActive ? 'bar hidden' : 'bar'} />
                <span className={isActive ? 'bar hidden' : 'bar'} />
              </div>
            </button>
          </div>
          <div
            className={
              isActive
                ? 'nav-links__wrapper nav-links__wrapper-appear'
                : 'nav-links__wrapper'
            }
          >
            <NavLinks />
          </div>
        </div>
      </NavStyles>
    </nav>
  );
}
