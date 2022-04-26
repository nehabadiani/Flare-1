import Aos from 'aos';
import React, { useEffect } from 'react';
import './FunFlare.css';
import "aos/dist/aos.css";


import one from './photos/boy.jpg';
import two from './photos/DSC06081.jpg';
import three from './photos/DSC06201.jpg';
import four from './photos/DSC06347.jpg';
import five from './photos/DSC06356.jpg';
import six from './photos/DSC06540.jpg';
import seven from './photos/DSC06651.jpg';
import eight from './photos/DSC06743.jpg';
import nine from './photos/IMG_1695.jpg';
import ten from './photos/IMG_1889.jpg';


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const FunFlare = () => {

      const responsive = {
            desktop: {
                  breakpoint: { max: 3000, min: 1200 },
                  items: 4,
                  slidesToSlide: 1,
            },
            tablet: {
                  breakpoint: { max: 1200, min: 750 },
                  items: 2,
                  slidesToSlide: 1,
            },
            mobile: {
                  breakpoint: { max: 750, min: 0 },
                  items: 1,
                  slidesToSlide: 1,
            },
      };
      
      useEffect(() => {
            Aos.init({
                  duration: 2000
            });
      }, []);

      return (
            <div id='photo-gallery'>
                  <h1 className='text_head'>Fun Flare 2022</h1>
                  <Carousel
                arrows={false}
                swipeable={true}
                draggable={true}
                responsive={responsive}
                ssr={true}
                autoPlay={true}
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all 1s"
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                  >
                        {/* <div>
                              <img src={one} alt=""/>
                        </div> */}
                         <div>
                              <img src={two} alt=""/>
                        </div>
                         <div>
                              <img src={three} alt=""/>
                        </div>
                         <div>
                              <img src={four} alt=""/>
                        </div>
                        <div>
                              <img src={five} alt=""/>
                        </div>
                        <div>
                              <img src={six} alt=""/>
                        </div>
                        <div>
                              <img src={seven} alt=""/>
                        </div>
                        <div>
                              <img src={eight} alt=""/>
                        </div>
                        <div>
                              <img src={nine} alt=""/>
                        </div>
                        <div>
                              <img src={ten} alt=""/>
                        </div>
                        </Carousel>
            </div>
      )
}

export default FunFlare