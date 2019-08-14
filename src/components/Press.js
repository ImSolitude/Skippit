import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import Under from "./Under/Under";
import "./Pages.sass";

const Press = props => {
  return (
    <div className="page-wrapper">
      <Header inPage />
      <div className="content-wrapper press">
        <p>
          <span className="bold big">
            Reach out to us for press inquiries!{" "}
            <a href="mailto:marc@skippitapp.com">marc@skippitapp.com</a>
          </span>
        </p>
      </div>
      {/* <Under inPage />   */}
    </div>
  );
};

export default Press;
