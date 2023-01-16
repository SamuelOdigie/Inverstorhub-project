import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar-container">
      <a href="./">
        InvestorsHub
        <i class="fa-sharp fa-solid fa-arrow-up-right-dots" />
      </a>
      <ul>
        <li>
          <button>
            <a href="/sign-in">Sign in</a>
          </button>
        </li>
      </ul>

      {/* <div className="Sign"> Sign in</div> */}
    </nav>
  );
}

export default Navbar;
