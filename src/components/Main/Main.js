import React from "react";
import Header from "../Header/Header";
import Under from "../Under/Under";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import "./Main.sass";
const Main = props => {
  return (
    <>
      <Header />
      <section className="main">
        {/* <iframe
        src="https://player.vimeo.com/video/353026581?background=1&autoplay=1&loop=1&byline=0&title=0&controls=0&muted=1"
        frameborder="0"
        webkitallowfullscreen=""
        mozallowfullscreen=""
        allowfullscreen="allowfullscreen"
        allow="autoplay"
        className="hero-video"
      /> */}
        <Fade bottom cascade>
          <h1 className="hero-title">
            <img src="images/SkippitWhite.png" />
          </h1>
          <h2 className="hero-subtitle">The first live video date</h2>
        </Fade>
        {/* <iframe
        id="ytplayer"
        type="text/html"
        width="100vw"
        height="56.25vw"
        // src="https://www.youtube.com/embed/meUuXggDRow?autoplay=1&controls=0&loop=1&fs=0&modestbranding=1&playlist=meUuXggDRow&iv_load_policy=3"
        src="https://www.youtube.com/embed/meUuXggDRow?autoplay=1&mute=1&enablejsapi=1&controls=0&disablekb=1&fs=0&loop=1&modestbranding=1&playlist=meUuXggDRow&iv_load_policy=3"
        frameborder="0"
        allowfullscreen
        className="hero-video"
      /> */}
        <video
          playsInline
          muted
          autoPlay
          loop
          className="hero-video"
          width="100vw"
          height="56.25vw"
        >
          <source src="videos/hero-skippit.mp4" type="video/mp4" />
        </video>
      </section>
      <Under />
    </>
  );
};

export default Main;
