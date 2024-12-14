import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Body from "./components/Body";
import Login from "./components/Login";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content" element={<Body />} />
        <Route path="/login" element={<Login />} />
        {/* Add more routes here if needed */}
      </Routes>

    </div>
  );
}

export default App;
