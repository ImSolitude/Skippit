import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import Under from "./Under/Under";
import "./Pages.sass";

const Mission = props => {
  return (
    // <div className="page-wrapper">
    <>
      <Header inPage />
      <div className="content-wrapper press mission">
        <p className="bold big not">
          Texting sucks. Waiting three weeks to go on a date sucks. Spending
          money on{" "}
          <span role="img" aria-label="taxi">
            🚕
          </span>{" "}
          to get trashy drinks only to be disappointed. Our competitors were
          built to get to the first date. We are the first date using video and
          voice to skip the{" "}
          <span role="img" aria-label="hankey">
            💩
          </span>
          .
        </p>
      </div>
      {/* <Under inPage />   */}
      {/* </div> */}
    </>
  );
};

export default Mission;
