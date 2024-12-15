import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Body from "./components/Body";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/content" element={<Body />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Add more routes here if needed */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
