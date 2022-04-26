import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import snc from './snc.png';

export default function AboutUs() {
  return (
    <div className="about_div">
    <section id="aboutUs" class="text-gray-400 bg-black-800 body-font overflow-hidden">
      <div className="flex justify-center">
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 mt-6 text-white">
            About Us
          </h1></AnimationOnScroll>
        </div>
        <div style={{
          display: "flex",
          justifyContent:"center"
        }}>
           <img
            alt="ecommerce"
          src={snc}
          height="200px"
          width="200px"
          />
        </div>
          <AnimationOnScroll animateIn="animate__rollIn" animateOut="animate__rollOut" duration={1.5}>
      <div class="container px-5 py-14 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
          
              <img
            alt="ecommerce"
            class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="/images/SNC.jpeg"
          />
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 class="text-white text-3xl title-font font-medium mb-1">
              The Social and Cultural Committee
            </h1>

            <p class="leading-relaxed" style={{textAlign:'justify'}}>
            The Social and Cultural Committee contributes to the University in 2 major ways:<br/>

            The very infamous role that we play is Organizational and Conduction of ALL the social and cultural events/ fests.
            We are responsible right from logistics to operation and management before,during and after the event. The committee in collaboration with its other tributaries (The social and cultural clubs) keep working round the clock to ideate ways to keep up the entertainment quotient of the university.<br/> 

            The second very important role  that the SnC  plays is that unifies and Coordinates all the 14 diverse social and Cultural clubs that fall under it. 
            We act upon a bridge that connects the club amongst each other, from other committee(s) as well as OSAIL.
            SnC and its club live in a complete barter system where we keep sharing and helping each other in every possible way.
            </p>
          </div>
        </div>
          </div>
        </AnimationOnScroll>
    </section>
</div>
  
  );
}
