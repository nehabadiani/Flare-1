import { React, useEffect, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents } from "../../actions/events";
import Loader from "../Loader/Loader";
import "./events.css";

export default function Events() {
  const [onGoing, setOnGoing] = useState("border-b-4 border-yellow-600");
  const [upComing, setUpComing] = useState("500");
  const { events,loading} = useSelector((state) => state.events);
  const dispatch = useDispatch();

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
    if (index === 1) {
      setOnGoing("border-b-4 border-yellow-600");
      setUpComing("500");
    } else if (index == 2) {
      setOnGoing("500");
      setUpComing("500 border-b-4 border-yellow-600");
    }
  };

  useEffect(() => {
    dispatch(getAllEvents());
    console.log(new Date());
  }, [dispatch]);
  
  const getISTDate = (date) => {
    let d = new Date(date);
    d.setHours(date.getHours() - 5);
    d.setMinutes(date.getMinutes() - 30);
    return d;
  }

  const getDate = (e) => {
    console.log(new Date(e.startdate.toString()));
    console.log(new Date());
    console.log(getISTDate(new Date(e.startdate)) < new Date());
  }
 
  return (
    <>
      <div className="sec main_div" id="events">
        <div className="btn-container">
          <div className="flex justify-center">
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} >
             <h1 class="sm:text-3xl text-2xl font-medium title-font mb-8 mt-4 text-white">
               Events
            </h1>
          </AnimationOnScroll>
          </div>
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
          <div className="flex justify-between gap-4">
          <button
            class={`${onGoing} event-btn btn w-4/5 px-10 text-white font-bold py-2 px-4 rounded-md`}
            onClick={() => toggleTab(1)}
          >
            <p className="verText">On Going</p>
          </button>
          <button
            class={`${upComing} event-btn btn w-4/5  px-10  text-white font-bold py-2 px-4 rounded-md`}
            onClick={() => toggleTab(2)}
          >
            <p>Up Coming</p>
          </button>
            </div>
          </AnimationOnScroll>
        </div>
        <div className={toggleState === 1 ? "" : "hidden"}>
          <div class="container">
            <div class="row">
              {loading && <Loader/>}
              {
                events.length > 0 && 
                events?.map((e) => ( 
                  ((getISTDate(new Date(e.startdate)) < new Date()) && (new Date() < getISTDate(new Date(e.enddate))))
                  &&
                  <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut="animate__fadeOutRight" animateOnce={true}>
                  <div class="card">
                <div class="card-header">
                  <p className="card-title">{e?.name}</p>
                </div>
                <div className="card-body">
              <p>{e?.club}</p>
              <p>{e?.description}</p>
            <p>{new Date(e?.startdate).toLocaleDateString([],{timeZone:'Asia/Kolkata'})}</p>
            <p>{getISTDate(new Date(e?.startdate)).toLocaleTimeString([],
              { hour: "2-digit", minute: "2-digit" ,timeZone:"Asia/Kolkata"})} -
              {getISTDate(new Date(e?.enddate)).toLocaleTimeString([],
                { hour: "2-digit", minute: "2-digit" ,timeZone:"Asia/Kolkata"})} </p>
              <p>{e?.venue}</p>
                  <a href={e?.registrationUrl} target="_blank" className="btn">
                    Register
                  </a>
                </div>
                  </div>
                  </AnimationOnScroll>
                ))
              }
            </div>
          </div>
        </div>

        <div className={toggleState === 2 ? "" : "hidden"}>
          <div class="container">
            <div class="row">
              {
                events.length > 0 &&
                events?.map((e) => (
                  (getISTDate(new Date(e.startdate)) >
                    new Date() && getISTDate(new Date(e.enddate)) > new Date())
                  &&
                  <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut="animate__fadeOutRight" animateOnce={true}>
              <div class="card">
                <div class="card-header">
                  <p className="card-title">{e?.name}</p>
                </div>
                <div className="card-body">
                        <p>{e?.club}</p>
                          <p>{e?.description}</p>
                          <p>{new Date(e?.startdate).toLocaleDateString([],{timeZone:'Asia/Kolkata'})}</p>
                          {/* {         var date = new Date("Fri Jan 15 2016 00:00:00");
                          date.setHours(date.getHours()-5);
                          date.setMinutes(date.getMinutes()-30);} */}
                      <p>{getISTDate(new Date(e?.startdate)).toLocaleTimeString([],
                        { hour: "2-digit", minute: "2-digit" ,timeZone:"Asia/Kolkata"})} -
                        {getISTDate(new Date(e?.enddate)).toLocaleTimeString([],
                        { hour: "2-digit", minute: "2-digit" ,timeZone:"Asia/Kolkata"})} </p>
                        <p>{e?.venue}</p>
                        <a href={e?.registrationUrl} target="_blank" className="btn">
                            Register
                        </a>
                </div>
                      </div>
                </AnimationOnScroll>
                ))
              }
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
