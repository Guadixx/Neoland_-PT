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
                Home
              </li>
              <li>
                Terms and Conditions
              </li>
              <li>
            Privacy Policy
              </li>
              <li>
              Collection Statement
              </li>
              <li>
              Help
              </li>
              <li>
              Manage Acount
              </li>
            </ul>
            <div className="underText">
            <h3>@Copyright All rights reserved.</h3>
          </div>
          </section>
        </div>
        <div className="underbox">
          <section className="socials">
            <ul>
              <li>
                <a href="https://www.marvel.com/corporate/advertising">
                  <img
                    src="https://res.cloudinary.com/dpidlverd/image/upload/v1677229606/Marvel/iconos/marketing_nagtbo.png"
                    alt="Network icon"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/Marvel/">
                  <img
                    src="https://res.cloudinary.com/dpidlverd/image/upload/v1677229607/Marvel/iconos/facebook_rnnqdo.png"
                    alt="Facebook icon"
                  />
                </a>
              </li>
              <li>
                <a href="https://github.com/kareenadg/MARVEL_GROUP_project">
                  <img
                    src="https://res.cloudinary.com/dpidlverd/image/upload/v1677229606/Marvel/iconos/github_beunqm.png"
                    alt="Github icon"
                  />
                </a>
              </li>
              <li>
                <a href="https://open.spotify.com/playlist/0mYWUKxLlvP4YDMe8qke84?si=hyQpETY0SEu5cKe4MZASMg">
                  <img
                    src="https://res.cloudinary.com/dpidlverd/image/upload/v1677229605/Marvel/iconos/spotify_dbqwu1.png"
                    alt="Spotify icon"
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