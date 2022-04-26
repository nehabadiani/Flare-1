import React from "react";
import {AnimationOnScroll} from 'react-animation-on-scroll';
import './landingStyle.css';
import "animate.css/animate.min.css";


export default function LandingPage() {
  return (
      // <AnimationOnScroll animateIn="animate__fadeInUp">
      <div class="wrapper">
            {/* <AnimationOnScroll animateIn="animate__slideInDown" duration={2} animateOnce={true} >
    <center> <h1 class="title" data-text="FLARE 2022">FLARE 2022</h1>
    </center>  </AnimationOnScroll>  */}
            <svg viewBox="0 0 960 300">
                <symbol id="s-text">
                    <text text-anchor="middle" x="50%" y="80%">FLARE 2022 </text>
                    <text text-anchor="middle" x="52%" y="80%">FLARE 2022</text>
                </symbol>
                <g class="g-ants">
                    <use xlinkHref="#s-text" class="text-copy"></use>
                    <use xlinkHref="#s-text" class="text-copy"></use>
                    <use xlinkHref="#s-text" class="text-copy"></use>
                    <use xlinkHref="#s-text" class="text-copy"></use>
                    <use xlinkHref="#s-text" class="text-copy"></use>
                </g>
            </svg>
        </div>
  );
}
