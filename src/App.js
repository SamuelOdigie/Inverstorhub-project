import "./App.css";
import Navbar from "./Compenents/Navbar";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Compenents/Pages/signIn";
function App() {
  return (
    <>
      {" "}
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/SignIn" element={<SignIn />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
