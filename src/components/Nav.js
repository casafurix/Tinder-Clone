import React from "react";
import whiteLogo from "../images/tinder-white.svg";
import colorLogo from "../images/tinder-color.png";

function Nav({ minimal, authToken }) {
  return (
    <nav>
      <div className='logo-container'>
        <img
          className='logo'
          src={minimal ? whiteLogo : colorLogo}
          alt='tinder-logo'
        />
      </div>

      {!authToken && minimal && <button className='nav-button'>Log In</button>}
    </nav>
  );
}

export default Nav;
