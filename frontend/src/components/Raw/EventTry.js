import { React, useState } from "react";
import "./style.css";

export default function EventTry() {
  const [onGoing, setOnGoing] = useState("border-b-4");
  const [upComing, setUpComing] = useState("500");

  const [toggleState, setToggleState] = useState(1);
  
  const toggleTab = (index) => {
    setToggleState(index);
    if (index === 1) {
      setOnGoing("border-b-4");
      setUpComing("500");
    } else if (index == 2) {
      setOnGoing("500");
      setUpComing("500 border-b-4");
    }
  };


  return (
    <>
      <section>
        <h2 id="text" className="text-4xl font-bold">
          <span>It's time for a new</span>
          <br></br>
          Adventure
        </h2>

        {/* <img src={"/images/bird1.png"} id="bird1"></img>
        <img src={"/images/bird2.png"} id="bird2"></img> */}
        {/* <img src={"/images/forest.png"} id="forest"></img> */}

        <a id="btn" href="#events">
          Explore Events
        </a>
        {/* <img src={"/images/rocks.png"} id="rocks"></img> */}
        <img src={"/images/water.png"} id="water"></img>
      </section>

      <div className="sec main_div h-screen" id="events">
        {/* <p className="event_heading pt-5 text-center text-4xl text-white font-bold">
          Events
        </p> */}
        <div className="mt-5 mx-3 flex-row">
          <button
            class={`${onGoing} btn w-1/2 px-10  text-white font-bold py-2 px-4 rounded-full`}
            onClick={() => toggleTab(1)}
          >
            <p className={toggleState === 1 ? "" : ""}>On Going</p>
          </button>
          <button
            class={`${upComing} btn  w-1/2 px-10  text-white font-bold py-2 px-4 rounded-full`}
            onClick={() => toggleTab(2)}
          >
            <p>Up Coming</p>
          </button>
        </div>

        {/* OnGoing events Div */}
        <div
          className={
            toggleState === 1
              ? "flex flex-wrap md:flex-col justify-center mt-1 my-8"
              : "hidden"
          }
        >
          <div class="container">
            <div class="row">
              <div class="card">
                <div class="card-header">
                  <p className="title">Event Name</p>
                </div>
                <div className="card-body">
                  <p>Club Name</p>
                  <p>Date</p>
                  <p>Time</p>
                  <p>Last Date For Resister</p>
                  <a href="#" class="btn">
                    Register
                  </a>
                </div>
              </div>

              <div class="card">
                <div class="card-header">
                  <p className="title">Event Name</p>
                </div>
                <div class="card-body">
                  <p>Club Name</p>
                  <p>Date</p>
                  <p>Time</p>
                  <p>Last Date For Resister</p>
                  <a href="#" class="btn">
                    Register
                  </a>
                </div>
              </div>

              <div class="card">
                <div class="card-header">
                  <p className="title">Event Name</p>
                </div>
                <div class="card-body">
                  <p>Club Name</p>
                  <p>Date</p>
                  <p>Time</p>
                  <p>Last Date For Resister</p>
                  <a href="#" class="btn">
                    Register
                  </a>
                </div>
              </div>

              <div class="card">
                <div class="card-header">
                  <p className="title">Event Name</p>
                </div>
                <div class="card-body">
                  <p>Club Name</p>
                  <p>Date</p>
                  <p>Time</p>
                  <p>Last Date For Resister</p>
                  <a href="#" class="btn">
                    Register
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            toggleState === 2
              ? "flex flex-wrap md:flex-col justify-center mt-1 my-8"
              : "hidden"
          }
        >
          <div class="container">
            <div class="row">
              <div class="card">
                <div class="card-header">
                  <p className="title">Event Name</p>
                </div>
                <div className="card-body">
                  <p>Club Name</p>
                  <p>Date</p>
                  <p>Time</p>
                </div>
              </div>

              <div class="card">
                <div class="card-header">
                  <p className="title">Event Name</p>
                </div>
                <div class="card-body">
                  <p>Club Name</p>
                  <p>Date</p>
                  <p>Time</p>
                </div>
              </div>

              <div class="card">
                <div class="card-header">
                  <p className="title">Event Name</p>
                </div>
                <div class="card-body">
                  <p>Club Name</p>
                  <p>Date</p>
                  <p>Time</p>
                </div>
              </div>

              <div class="card">
                <div class="card-header">
                  <p className="title">Event Name</p>
                </div>
                <div class="card-body">
                  <p>Club Name</p>
                  <p>Date</p>
                  <p>Time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
