import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar({ authUser = null, userSignOut = () => null }) {
  console.log(authUser);
  return (
    <nav className="navbar-container">
      <Link to="./">
        InvestorsHub
        <i className="fa-sharp fa-solid fa-arrow-up-right-dots" />
      </Link>
      <ul>
        <li>
          {!!authUser ? (
            <>
              {authUser.email} |
              <button onClick={userSignOut} style={{ color: "white" }}>
                SignOut
              </button>
            </>
          ) : (
            <>
              <button>
                <Link to="/SignIn">Sign in</Link>
              </button>
              <button>
                <Link to="/SignUp">Sign up</Link>
              </button>
            </>
          )}
        </li>
      </ul>

      {/* <div className="Sign"> Sign in</div> */}
    </nav>
  );
}

export default Navbar;
