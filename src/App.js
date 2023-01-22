import { useEffect, useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import Navbar from "./Compenents/Navbar";
import { Route, Routes, useNavigate } from "react-router-dom";
import SignIn from "./Compenents/Pages/SignIn";
import SignUp from "./Compenents/Pages/SignUp";
import Home from "./Compenents/Pages/Home";
import { auth } from "./Firebase";
import "./App.css";
import Sidebar from "./Compenents/Sidebar";

function App() {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        navigate("/Home");
      }
    });

    return () => {
      listen();
    };
  });

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {" "}
      <div className="App">
        <Navbar authUser={authUser} userSignOut={userSignOut} />
        <Routes>
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
        <Sidebar />
      </div>
    </>
  );
}

export default App;
