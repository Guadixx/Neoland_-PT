import './Header.css';

import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    //colorthemeChanger

  
    return (
      <header>
        <h2>Demo Streaming</h2>
        <ul>
          <li className="pages">
            <NavLink to="/">Home</NavLink>
          </li>
            <li className="pages">
              <NavLink to="/movies">Movies</NavLink>
            </li>
            <li className="pages">
              <NavLink to="/series">Series</NavLink>
            </li>
        </ul>
      </header>
    );
  };
  
  export default Header;