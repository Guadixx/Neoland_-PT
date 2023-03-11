import './Header.css';

import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../context/userContext';

const Header = () => {
    //login-logout
    const { user, logout } = useContext(UserContext);
    console.log(user);
    //colorthemeChanger

  
    return (
      <header>
        <h2>Demo Streaming</h2>
        <ul>
          <li className="pages">
            <NavLink to="/">Home</NavLink>
          </li>
          {user && (
            <li className="pages">
              <NavLink to="/movies">Movies</NavLink>
            </li>
          )}
          {user && (
            <li className="pages">
              <NavLink to="/series">Series</NavLink>
            </li>
          )}
          {!user && (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
        </ul>
      </header>
    );
  };
  
  export default Header;