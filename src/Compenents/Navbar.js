import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar-container">
      <Link to="./">
        InvestorsHub
        <i class="fa-sharp fa-solid fa-arrow-up-right-dots" />
      </Link>
      <ul>
        <li>
          <button>
            <Link to="./SignIn">Sign in</Link>
          </button>
        </li>
      </ul>

      {/* <div className="Sign"> Sign in</div> */}
    </nav>
  );
}

export default Navbar;
