import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar" scroll="no">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
         <a href="#">
            <img src="images/flaree.png" />
          </a>
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#">Home</a></p>
          <p><a href="#events">Events</a></p>
          <p><a href="#photo-gallery">FunFlare</a></p>
          <p><a href="#clubs">Clubs</a></p>
          {/* <p><a href="#flareBucks">Flare Bucks</a></p> */}
          <p><a href="#aboutUs">About Us</a></p>
          {/* <p><a href="#sponsors">Sponsors</a></p> */}

        </div>
      </div>
      {/* <div className="gpt3__navbar-sign">
        <Link to="signin">
        <p>Sign in</p>
        </Link>
        <Link to="/signup" >
        <button type="button">Sign up</button>
        </Link>
      </div> */}
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
          <p><a href="#" onClick={()=>setToggleMenu(false)}>Home</a></p>
          <p><a href="#events" onClick={()=>setToggleMenu(false)}>Events</a></p>
          <p><a href="#photo-gallery" onClick={()=>setToggleMenu(false)}>FunFlare</a></p>
          <p><a href="#clubs" onClick={()=>setToggleMenu(false)}>Clubs</a></p>
          {/* <p><a href="#flareBucks">Flare Bucks</a></p> */}
          <p><a href="#aboutUs" onClick={()=>setToggleMenu(false)}>About Us</a></p>
          {/* <p><a href="#sponsors" onClick={()=>setToggleMenu(false)}>Sponsors</a></p> */}
          </div>
          {/* <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div> */}
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
