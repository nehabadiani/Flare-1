import React, { useState } from 'react';
import axios from 'axios';
import './Feedback.css';
import { API } from '../../API';

const Feedback = () => {

  const [name, setName] = useState("");
  const [rollNo, setRoll] = useState("");
  const [colorRate, setColorRate] = useState("");
  const [animationRate, setAnimationRate] = useState("");
  const [overallRate, setOverallRate] = useState("");
  const [themeLaunchRate, setThemeLaunchRate] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const submitFeedback = async (e) => {
    e.preventDefault();
    await axios.post(`${API}/api/v1/addFeedback`, {
      name,
      rollNo,
      colorRate,
      animationRate,
      overallRate,
      themeLaunchRate,
      suggestion
    }).then((s) => {
      if (s.data.success === true) {
        window.alert("Feedback Added Successfully");
        window.location.reload();
      }
    });
  }

  return (
      <div class="bg-black flex flex-col md:flex-row md:py-5 lg:h-screen">
        <div class="flex flex-col w-full lg:w-1/3 p-8">
          <p class="text-yellow-300 text-lg uppercase tracking-loose">REVIEW</p>
          <p
          class="text-2xl md:text-5xl my-4 text-white leading-relaxed md:leading-snug"
        >
          Leave us a feedback!
        </p>
        <p
          class="text-md leading-snug text-gray-50 text-opacity-100 md:text-xl"
        >
          Please provide your valuable feedback for this website.
        </p>
        <p
          class="text-sm mt-2 leading-snug text-gray-50 text-opacity-100  md:text-xl"
        >
          for ratting 5 stands for <span class="text-sm leading-snug text-lime-600 md:text-xl">😀 best</span> & 1 stands for <span class="text-sm leading-snug text-red-600 md:text-xl">😔 worst</span>
        </p>
      </div>

      <div class="flex flex-col w-full lg:w-2/3 justify-center ">
        <div class="container w-full px-4">
          <div class="flex flex-wrap justify-center">
            <div class="w-full lg:w-6/12 px-4">
              <div
                class="formCard relative flex text-white flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg"
              >
                <div class="flex-auto p-5 py-7">
                  <form id="feedbackForm" onSubmit={submitFeedback}>
                    <div class="relative w-full">
                      <label
                        class="block uppercase  text-xs font-bold mb-1"
                        for="message"
                      >Name</label>
                      
                      <input
                        onChange={(e)=>setName(e.target.value)}
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your Good Name?"
                        class="mb-2 border-0 px-3 py-3 rounded text-sm shadow w-full bg-gray-300 placeholder-black text-gray-800 trans outline-none focus:bg-gray-400 mb-3"
                        required
                      />

                      <label
                        class="block uppercase  text-xs font-bold mb-1"
                        for="message"
                        >Roll No.</label>
                      <input
                        onChange={(e)=>setRoll(e.target.value)}
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your Roll Number?"
                        class="border-0 px-3 py-3 rounded text-sm shadow w-full bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400 mb-3 trans"
                        required
                      />

                      <label
                        class="block uppercase  text-xs font-bold mb-1 mt-3"
                        for="message"
                        >Rate color theme of website</label
                      >
                      <input
                        onChange={(e)=>setColorRate(e.target.value)}
                        type="radio"
                        id="color_theme"
                        name="color_theme"
                        value="5"
                      />
                      <label class="mr-2 text-lg">5</label>

                      <input
                        onChange={(e)=>setColorRate(e.target.value)}
                        type="radio"
                        id="color_theme"
                        name="color_theme"
                        value="4"
                      />
                      <label class="mr-2 text-lg">4</label>

                      <input
                        onChange={(e)=>setColorRate(e.target.value)}
                        type="radio"
                        id="color_theme"
                        name="color_theme"
                        value="3"
                      />
                      <label class="mr-2 text-lg">2</label>
                      <input
                        onChange={(e)=>setColorRate(e.target.value)}
                        type="radio"
                        id="color_theme"
                        name="color_theme"
                        value="2"
                      />
                      <label class="mr-2 text-lg">2</label>
                      <input
                       onChange={(e)=>setColorRate(e.target.value)}
                        type="radio"
                        id="color_theme"
                        name="color_theme"
                        value="1"
                      />
                      <label class="mr-2 text-lg">1</label>

                      <label
                        class="block uppercase  text-xs font-bold mb-1 mt-3"
                        for="message"
                        >Rate Animation of website</label
                      >
                      <input
                        onChange={(e)=>setAnimationRate(e.target.value)}
                        type="radio"
                        id="animation_feedback"
                        name="animation_feedback"
                        value="5"
                      />
                      <label class="mr-2 text-lg">5</label>

                      <input
                        onChange={(e)=>setAnimationRate(e.target.value)}
                        type="radio"
                        id="animation_feedback"
                        name="animation_feedback"
                        value="4"
                      />
                      <label class="mr-2 text-lg">4</label>

                      <input
                          onChange={(e)=>setAnimationRate(e.target.value)}
                        type="radio"
                        id="animation_feedback"
                        name="animation_feedback"
                        value="3"
                      />
                      <label class="mr-2 text-lg">2</label>
                      <input
                         onChange={(e)=>setAnimationRate(e.target.value)}
                        type="radio"
                        id="animation_feedback"
                        name="animation_feedback"
                        value="2"
                      />
                      <label class="mr-2 text-lg">2</label>
                      <input
                          onChange={(e)=>setAnimationRate(e.target.value)}
                        type="radio"
                        id="animation_feedback"
                        name="animation_feedback"
                        value="1"
                      />
                      <label class="mr-2 text-lg">1</label>

                      <label
                        class="block uppercase mb-1 text-xs font-bold mt-3"
                        for="message"
                        >Rate Allover feel of website</label
                      >
                      <input
                         onChange={(e)=>setOverallRate(e.target.value)}
                        type="radio"
                        id="allover_feedback"
                        name="allover_feedback"
                        value="5"
                      />
                      <label class="mr-2 text-lg">5</label>

                      <input
                        onChange={(e)=>setOverallRate(e.target.value)}
                        type="radio"
                        id="allover_feedback"
                        name="allover_feedback"
                        value="4"
                      />
                      <label class="mr-2 text-lg">4</label>

                      <input
                         onChange={(e)=>setOverallRate(e.target.value)}
                        type="radio"
                        id="allover_feedback"
                        name="allover_feedback"
                        value="3"
                      />
                      <label class="mr-2 text-lg">2</label>
                      <input
                         onChange={(e)=>setOverallRate(e.target.value)}
                        type="radio"
                        id="allover_feedback"
                        name="allover_feedback"
                        value="2"
                      />
                      <label class="mr-2 text-lg">2</label>
                      <input
                         onChange={(e)=>setOverallRate(e.target.value)}
                        type="radio"
                        id="allover_feedback"
                        name="allover_feedback"
                        value="1"
                      />
                      <label class="mr-2 text-lg">1</label>

                      <label
                        class="block uppercase  text-xs font-bold mb-1 mt-3"
                        for="message"
                        >Rate the theme launch event</label
                      >
                      <input
                         onChange={(e)=>setThemeLaunchRate(e.target.value)}
                        type="radio"
                        id="launch_event_feedback"
                        name="launch_event_feedback"
                        value="5"
                      />
                      <label class="mr-2 text-lg">5</label>

                      <input
                         onChange={(e)=>setThemeLaunchRate(e.target.value)}
                        type="radio"
                        id="launch_event_feedback"
                        name="launch_event_feedback"
                        value="4"
                      />
                      <label class="mr-2 text-lg">4</label>

                      <input
                         onChange={(e)=>setThemeLaunchRate(e.target.value)}
                        type="radio"
                        id="launch_event_feedback"
                        name="launch_event_feedback"
                        value="3"
                      />
                      <label class="mr-2 text-lg">2</label>
                      <input
                         onChange={(e)=>setThemeLaunchRate(e.target.value)}
                        type="radio"
                        id="launch_event_feedback"
                        name="launch_event_feedback"
                        value="2"
                      />
                      <label class="mr-2 text-lg">2</label>
                      <input
                         onChange={(e)=>setThemeLaunchRate(e.target.value)}
                        type="radio"
                        id="launch_event_feedback"
                        name="launch_event_feedback"
                        value="1"
                      />
                      <label class="mr-2 text-lg">1</label>
                    </div>

                    <div class="relative w-full mb-3">
                      <label
                        class="block mb-1 uppercase  text-xs font-bold mt-3"
                        for="message"
                        >Any suggestion?</label
                      ><textarea
                         onChange={(e)=>setSuggestion(e.target.value)}
                        maxlength="300"
                        name="feedback"
                        id="feedback"
                        rows="4"
                        cols="80"
                        class="border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full"
                        placeholder="Your words matters to us!!"
                        required
                      ></textarea>
                    </div>
                    <div class="text-center mt-6">
                      <button
                        id="feedbackBtn"
                        class="bg-yellow-300 text-black text-center trans mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Feedback