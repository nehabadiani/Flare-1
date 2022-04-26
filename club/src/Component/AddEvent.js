import React, { useState } from 'react';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { API } from '../API';

const AddEvent = () => {
    
    const [data, setData] = useState({
        name: "",
        club: "",
        description: "",
        venue: "",
        pin: "",
        url:"",
        startdate: "",
        enddate:""
    });
       
    const toast = useToast();

  const handleChange = (e) => {
    console.log(e.target.value);
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const saveEvent = async (e) => {
      e.preventDefault();
      try {
        const event = await axios.post(`${API}/api/v1/addEvent`, data);
        console.log(event.data);
        if (event.data.success) {
          toast({
            title: 'Event created.',
            description: "We've created your event.",
            status: 'success',
            duration: 9000,
            isClosable: true,
            position: 'top-right'
          });
          setData({
            name: "",
            club: "",
            description: "",
            venue: "",
            pin: "",
            startdate: "",
            enddate: "",
            url:""
          });
        }
        if (!event.data.success) {
          console.log(event);
          toast({
            title: 'Failed',
            description: event.data.error,
            status: 'error',
            duration: 9000,
            isClosable: true,
            position: 'top-right'
          });
        }
      } catch (e) {
        console.log(e);
        toast({
            title: 'Failed',
            description: "Something Went Wrong",
            status: 'error',
            duration: 9000,
            isClosable: true,
            position: 'top-right'
          });
      }
    }


  return (
      <>
    <div class="w-full ">
        <h1>FLARE 2022 CLUB FORM</h1>
        <form class="h-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={saveEvent}>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Event Name
            </label>
            <input
              value={data?.name}
              onChange={handleChange}
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="eventName"
              type="text"
              placeholder="Event Name"
              name='name'
            />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Club Name
            </label>
            <input
              value={data?.club}
              onChange={handleChange}
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="clubName"
              type="text"
                          placeholder="Club Name"
                          name='club'
            />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Event Description
            </label>
            <textarea
              value={data?.description}
              onChange={handleChange}
              rows={4}
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="eventDescription"
              type="text"
                          placeholder="Event Description"
                          name='description'
            ></textarea>
          </div>
           <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Registration Link
            </label>
            <input
              value={data?.url}
              onChange={handleChange}
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="clubName"
              type="text"
              placeholder="Registration Link"
              name='url'
            />
          </div>


          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
             Start Date and Time
            </label>
            <input
              value={data?.startdate}
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="date_time"
              type="datetime-local"
              placeholder="Date and Time"
                          name='startdate'
                           onChange={handleChange}
            />
            </div>
            <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
             End Date and Time
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="date_time"
              type="datetime-local"
              placeholder="Date and Time"
              name="enddate"
              value={data?.enddate}
              onChange={handleChange}
            />
          </div>

        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Venue
            </label>
            <input
              value={data?.venue}
              onChange={handleChange}
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="venue"
              type="text"
              placeholder="Venue"
              name='venue'
            />
        </div>
                  
                  
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Pin
            </label>
            <input
              value={data?.pin}
              onChange={handleChange}
              class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="venue"
              type="text"
              placeholder="PIN"
              name='pin'
            />
        </div>

          <div class="flex items-center justify-center">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
    </div>
      </>
  )
}

export default AddEvent;