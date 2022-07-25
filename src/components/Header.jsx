import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import logo from '../assets/images/logo.gif';

import '../styles/header.scss';

const Header = () => {

  return (
    <header className="header clearfix">
      <div className="logo-container">
        <a href="/" className="logo">
          <img src={logo} alt="RP Tools logo" />
          <span className='logo-text'>NordPixel</span>
        </a>
      </div>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <FontAwesomeIcon className="navicon" icon={solid('bars')} size="1x" />
      </label>
      <ul className="menu">
        <li>
          <Link className="menu_item" to="/">
            <FontAwesomeIcon className="icon_menu_li" icon={solid('house')} size="1x"/>
            Home
          </Link>
        </li>
        <li className="dropdown">
          <Link className="menu_item" to="/">
            <FontAwesomeIcon className="icon_menu_li" icon={solid('user')} size="1x"/>
            Account
          </Link> 
          <ul className="dropdown-content">            
            <li>
              <Link to="/">
                <FontAwesomeIcon className="icon_menu_li" icon={solid('right-to-bracket')} size="1x" />
                Login
              </Link>
            </li>
            <li>
              <Link to="/">
                <FontAwesomeIcon className="icon_menu_li" icon={solid('user-plus')} size="1x" />
                Register
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link className="menu_item" to="/">
            <FontAwesomeIcon className="icon_menu_li" icon={solid('circle-info')} size="1x" />
            About
          </Link>
        </li>
        <li>
          <Link className="menu_item" to="/">
            <FontAwesomeIcon className="icon_menu_li" icon={solid('envelope')} size="1x" />
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;