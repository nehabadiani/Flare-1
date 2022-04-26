import './sponsors.css';
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import logo from './logo.jpg'

export default function Sponsors() {
    
    const spon = [
        {
            index:1,
            logo:logo,
            name:'SnC PDEU',
        },
        {
            index:2,
            logo:logo,
            name:'SnC PDEU',
        },
    ]

    return(
        <div className="sponsors" id='sponsors'>
            <h1 class="namee">Sponsors</h1>
            <div className="sp">
                {/* {spon.map((e) => (
                    <AnimationOnScroll animateIn='animate__fadeInLeft'>
                        <div class ="indi-sp">
                            <img src={e.logo} class="spimg"/>
                            <p class="spname">{e.name}</p>
                        </div>
                    </AnimationOnScroll>
                ))} */}
            </div>
        </div>
    )
}