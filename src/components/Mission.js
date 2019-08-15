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
          Texting sucks. Waiting three weeks to go on a date sucks.
          <br />
          Spending money on Uber to get trashy drinks only to be disappointed.
          <br />
          <span>Our competitors were built to get to the first date.</span>
          <br />
          We, by using video and voice, are the first date.
        </p>
      </div>
      {/* <Under inPage />   */}
      {/* </div> */}
    </>
  );
};

export default Mission;
