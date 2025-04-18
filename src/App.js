import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
