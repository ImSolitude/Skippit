import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import Under from "./Under/Under";
import "./Pages.sass";

const Press = props => {
  return (
    <>
      <Header inPage />
      <div className="content-wrapper press press-page">
        <p>
          <span className="bold big">
            Reach out to us for press inquiries!
            <br />
            <span role="img" aria-label="point-right">
              👉
            </span>{" "}
            <a href="mailto:marc@skippitapp.com">marc@skippitapp.com</a>
          </span>
        </p>
      </div>
      {/* <Under inPage />   */}
    </>
  );
};

export default Press;
