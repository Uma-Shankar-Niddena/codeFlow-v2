import Home from "./pages/home";
import Admin from "./pages/admin";
import User from "./pages/users";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
      <h2 className="logo">SDLC Board </h2>

      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/admin" className="nav-link">
          Admin
        </Link>
        <Link to="/user" className="nav-link">
          User
        </Link>
      </div>
    </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}
