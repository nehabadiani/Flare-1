import React, { useState } from "react";
import "./style.css";

export default function Events() {
  const [onGoing, setOnGoing] = useState("500 border-b-4");
  const [upComing, setUpComing] = useState("500");

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
    if (index === 1) {
      setOnGoing("500 border-b-4");
      setUpComing("500");
    } else if (index == 2) {
      setOnGoing("500");
      setUpComing("500 border-b-4");
    }
  };

  console.log(toggleState)

  return (
    <div id="events" className="main_div h-screen">
      <p className="event_heading pt-5 text-center text-4xl text-white font-bold">Events</p>
      <div className="mt-5 mx-3 flex-row">
        <button
          class={`bg-red-${onGoing}  w-1/2 px-10  text-white font-bold py-2 px-4 rounded-full`}
          onClick={() => toggleTab(1)}
        >
          <p className={toggleState===1 ? "" : ""}>
          On Going
          </p>
        </button>
        <button
          class={`bg-red-${upComing}  w-1/2 px-10  text-white font-bold py-2 px-4 rounded-full`}
          onClick={() => toggleTab(2)}
        >
         <p>
          On Going
          </p>
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
  );
}
