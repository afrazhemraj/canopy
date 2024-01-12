import { NavLink, Link } from "react-router-dom";
import canopy from "../../assets/cr.png";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link exact="true" to="/" className="navbar-link">
        <div className="navbar-logo">
          <img src={canopy} alt="Cr"></img>
          <span className="navbar-brand">canopy</span>
        </div>
      </Link>
      <div className="navbar-links">
        <Link exact="true" to="/" className="navbar-link">
          Home
        </Link>
        <NavLink to="/solutions" className="navbar-link">
          Solutions
        </NavLink>
        <NavLink to="/about-us" className="navbar-link">
          About Us
        </NavLink>
        <NavLink to="/contact" className="navbar-link">
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
