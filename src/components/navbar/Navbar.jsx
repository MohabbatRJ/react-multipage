import { useState } from 'react';
import './navbar.css';
import { ReactComponent as Menu } from "../../images/svg/menu.svg";
import { ReactComponent as Close } from "../../images/svg/close.svg";
import { ReactComponent as Logo } from "../../images/svg/logo.svg";
import { NavLink } from 'react-router-dom';


function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <NavLink className='logoCon' to="/">
            {/* <h3 className='logo'>Logo</h3> */}
            <Logo className='logo'/>
          </NavLink>
        </div>
        
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" >
            <NavLink class='navLink' to="/" onClick={closeMobileMenu}>HOME</NavLink>
          </li>
          <li className="option" >
            <NavLink class='navLink' to="/service" onClick={closeMobileMenu}>SERVICE</NavLink>
          </li>
          <li className="option" >
            <NavLink class='navLink' to="/about" onClick={closeMobileMenu}>ABOUT</NavLink>
          </li>
          <li className="option" >
            <NavLink class='navLink' to="/contact" onClick={closeMobileMenu}>CONTACT</NavLink>
          </li>
          
        </ul>
      </div>

      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <Close width='30px' className="menu-icon" />
        )
          : (
            <Menu width='25px' className="menu-icon" />
          )}
      </div>
    </div>
  )
}

export default Navbar