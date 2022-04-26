
import AboutUs from "./AboutUs/AboutUs";
import Events from "./Events/Events";
import FlareBucks from "./FlareBucks/FlareBucks";
import Footer from "./footer/Footer";
import LandingPage from "./LandingPage/LandingPage";
import Navbar from "./Navbar/Navbar";
import Sponsors from "./Sponsors/sponsors";
import Clubs from "./Clubs/clubs";
import FunFlare from "./funflareGallery/FunFlare";


const HomePage = () => {
  return (
    
    <div className="App">
      <Navbar />
      <LandingPage />
      <Events />
      {/* <FlareBucks /> */}
      <FunFlare />
      <Clubs/>
      <AboutUs />
      {/* <Sponsors/> */}
      <Footer />
    </div>
  )
}

export default HomePage;