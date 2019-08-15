import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Header.sass";
import "../Grid.scss";

const Grid = styled.div`
  padding: 1.8rem 5%;
  width: 100vw;
  background: var(--white);
  color: var(--black);
`;

const Menu = props => {
  return (
    <ul className={`nav ${props.isSided ? "sided" : ""}`}>
      <li>
        <a href="/mission">Mission</a>
      </li>
      <li>
        <a href="/brandambassador">Brand Ambassadors</a>
      </li>
    </ul>
  );
};

const SideMenu = () => {
  return (
    <section className="sidebar">
      <div className="menu-wrapper container">
        <Menu isSided />
        <ul className="sided">
          <li>
            <a href="/press">Contact</a>
          </li>
          <li className="lastSocial">
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>

            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
        {/* <div class="menu-item home">
          <a href="#">Home</a>
        </div> */}
      </div>
    </section>
  );
};

const Header = props => {
  const handleHamburger = e => {
    const sidebar = document.querySelector(".sidebar");
    const body = document.querySelector("body");
    e.currentTarget.classList.toggle("closed");
    sidebar.classList.toggle("sidebar-show");
    body.classList.toggle("overflow-hidden");
  };
  return (
    <>
      <nav className={`${props.inPage ? "in-page" : ""}`}>
        <a href="/" className="brand">
          <img src="images/SkippitLogo.png" width="60px" />
        </a>
        <a href="/" className="in-page-brand">
          <img src="images/whiteinpagebrand.png" width="40px" />
        </a>
        <Menu />
        <div className="hamburger" onClick={handleHamburger}>
          <div className="wrapper">
            <span className="div" />
            <span className="div" />
          </div>
        </div>
      </nav>
      <SideMenu />
    </>
  );
};

export default Header;
