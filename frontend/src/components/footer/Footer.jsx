import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">

    <center><div className="gpt3__footer-links">
      <center><div className="gpt3__footer-links_logo">
        <img src={'/images/flare_logo.png'} alt="gpt3_logo" />
        <a href=" https://instagram.com/social_n_cultural_committee?utm_medium=copy_link"><i className='fa fa-instagram'></i></a>
      </div></center>
      
    </div></center>

    <div className="gpt3__footer-copyright">
      <p>@2022 SNC PDEU. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
