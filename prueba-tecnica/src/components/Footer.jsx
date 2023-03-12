import './Footer.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="box">
          <section className="links">
            <ul>
                <li>
                  <NavLink to="home">| Home </NavLink>
                </li>
                <li>
                  <NavLink to="terms">| Terms and Conditions </NavLink>
                </li>
                <li>
                  <NavLink to="privacypol">| Privacy Policy </NavLink>
                </li>
                <li>
                  <NavLink to="collects">| Collection Statement </NavLink>
                </li>
                <li>
                  <NavLink to="help">| Help </NavLink>
                </li>
                <li>
                  <NavLink to="mngaccount">| Manage Account </NavLink>
                </li>
            </ul>
            <div className="underText">
            <h3>@Copyright All rights reserved.</h3>
          </div>
          </section>
        </div>
        <div className="socials_container" >
        <section className="socials">
            <ul>
            <li>
                <a href="">
                  <img
                    src="https://res.cloudinary.com/dpidlverd/image/upload/v1678628445/Prueba%20tecnica/facebook-white_m2zav0.svg"
                    alt="Facebook icon"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="https://res.cloudinary.com/dpidlverd/image/upload/v1678628446/Prueba%20tecnica/twitter-white_f5jccl.svg"
                    alt="Twitter icon"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="https://res.cloudinary.com/dpidlverd/image/upload/v1678628445/Prueba%20tecnica/instagram-white_mbipb1.svg"
                    alt="Instagram icon"
                  />
                </a>
              </li>
            </ul>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default Footer;