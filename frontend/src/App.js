import Events from "./components/Events/Events";
import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";

import "./App.css";
// import FlareBucks from "./components/FlareBucks/FlareBucks";
import AboutUs from "./components/AboutUs/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import ForgetPass from "./components/auth/ForgetPass";
import Feedback from "./components/Feedback/Feedback";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<HomePage />} />
          <Route exact path="/feedback/flare2022" element={<Feedback />} />
          <Route  path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
