import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Home from "./components/Home/Home.tsx";
import About from "./components/About/About.tsx";
import Contacts from "./components/Contacts/Contacts.tsx";
import Add from "./components/Add/Add.tsx";
import "./Styles.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app info-container">
        <nav>
          <p className="title-name">My Blog</p>
          <div className="menu">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/add">Add</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
