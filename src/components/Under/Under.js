import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Under.sass";
import "../Grid.scss";
import { placeholder } from "@babel/types";
const Under = props => {
  return (
    <section className={`under ${props.inPage ? "in-page" : ""}`}>
      <div className="under-info">
        <ul className="footer-sided hover">
          <li>
            <a href="/press">Contact</a>
          </li>
        </ul>

        {/* <div className="download">
            <form>
              <input type="tel" placeholder="Phone Number" />
              <button>Send Download Link</button>
            </form>
          </div> */}
      </div>

      <div className="under-footer grid">
        <ul className="main-footer hover span7">
          <li className="not">© 2019 Skippit Inc.</li>

          <li>
            <a href="/terms">Terms Of Service</a>
          </li>
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
        </ul>

        <ul className="secondary-footer hover span5">
          <li>
            <a href="/mission">Missions</a>
          </li>
          <li>
            <a href="/brandambassador">Brand Ambassadors</a>
          </li>

          <li>
            <a href="https://www.instagram.com/skippitapp/">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Under;
