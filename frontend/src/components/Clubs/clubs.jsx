import './clubs.css'
import logo from '../Sponsors/logo.jpg'
import 'font-awesome/css/font-awesome.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ajia from './clubImages/Ajia Bunker.png';
import spicmacay from './clubImages/Spic Macay.jpg';
import malang from './clubImages/Malang logo..jpg';
import offbeat from './clubImages/Offbeat logo.png';
import panache from './clubImages/Panache.png';
import jharokha from './clubImages/Jharokha.png';
import debsoc from './clubImages/DebSoc.png';
import taatvam from './clubImages/Tattvam white.png';
import zaayka from './clubImages/Zaayka-Logo.png';
import mith from './clubImages/MithakShaastra black.png';
import daastan from './clubImages/Daastan logo.png';
import radiance from './clubImages/Radiance logo-1.PNG';
import rang from './clubImages/Rang.PNG';
import rotaract from './clubImages/Rotaract.png';

export default function Clubs() {
    
    const indiClub = [
        {
            index: 1,
            logo: ajia,
            insta_link: "https://www.instagram.com/ajiabunker_pdpu/" //add link of every club here and create a json for every club like this
        },
        {
            index: 2,
            logo: daastan,
            insta_link: "https://www.instagram.com/daastan.pdeu/" //add link of every club here and create a json for every club like this
        },
        {
            index: 3,
            logo: debsoc,
            insta_link: "https://www.instagram.com/debsoc.pdeu/" //add link of every club here and create a json for every club like this
        },
        {
            index: 4,
            logo: jharokha,
            insta_link: "https://www.instagram.com/jharokha_pdeu/" //add link of every club here and create a json for every club like this
        },
        {
            index: 5,
            logo: malang,
            insta_link: "https://www.instagram.com/malang.pdeu/" //add link of every club here and create a json for every club like this
        },
        {
            index: 6,
            logo: mith,
            insta_link: "https://www.instagram.com/mithakshaastra.pdeu/" //add link of every club here and create a json for every club like this
        },
        {
            index: 7,
            logo: offbeat,
            insta_link: "https://www.instagram.com/offbeat.pdeu/" //add link of every club here and create a json for every club like this
        },
        {
            index: 8,
            logo: panache,
            insta_link: "https://www.instagram.com/panachepdeu/" //add link of every club here and create a json for every club like this
        },
        {
            index: 9,
            logo: radiance,
            insta_link: "https://www.instagram.com/radiance_pdeu/" //add link of every club here and create a json for every club like this
        },
        {
            index: 10,
            logo: rang,
            insta_link: "https://www.instagram.com/rang.pdeu/" //add link of every club here and create a json for every club like this
        },
        {
            index: 11,
            logo: rotaract,
            insta_link: "https://www.instagram.com/rotaractclub_pdeu/" //add link of every club here and create a json for every club like this
        },
        {
            index: 12,
            logo: spicmacay,
            insta_link: "https://www.instagram.com/spicmacay_pdeu/" //add link of every club here and create a json for every club like this
        },
        {
            index: 13,
            logo: taatvam,
            insta_link: "https://www.instagram.com/tattvam.pdeu/" //add link of every club here and create a json for every club like this
        },
        {
            index: 14,
            logo: zaayka,
            insta_link: "https://www.instagram.com/zaayka_pdeu/" //add link of every club here and create a json for every club like this
        }
    ];

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1200 },
            items: 5,
            slidesToSlide: 1,
        },
        tablet: {
            breakpoint: { max: 1200, min: 750 },
            items: 3,
            slidesToSlide: 1,
        },
        mobile: {
            breakpoint: { max: 750, min: 0 },
            items: 1,
            slidesToSlide: 1,
        }
    };
    
    return(
        <div className="club-page" id='clubs'>
            <h1 className="namee">Clubs</h1>
            <Carousel
                swipeable={true}
                draggable={true}
                arrows={false}
                responsive={responsive}
                ssr={true}
                autoPlay={true}
                infinite={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all 1s"
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
        >
                {indiClub.map((e) => (
                    <AnimationOnScroll animateIn='animate__fadeInLeft'>
                        <div class="indi-clb">
                            <img src={e.logo}/>
                            <div class="clb-hover"><a href={e.insta_link} target="_blank">
                                <i className='fa fa-instagram'></i></a></div>
                        </div>
                    </AnimationOnScroll>
                ))}
            </Carousel>
        </div>
    )
}