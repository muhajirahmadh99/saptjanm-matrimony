// import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Body from "./components/Body";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Body />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
