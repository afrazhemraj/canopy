import { NavLink, Link } from "react-router-dom";
import canopy from "../../assets/cr.png";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={canopy} alt="Cr"></img>
        <span className="navbar-brand">canopy</span>
      </div>
      <div className="navbar-links">
        <Link exact to="/" activeClassName="active" className="navbar-link">
          Home
        </Link>
        <NavLink
          to="/solutions"
          activeClassName="active"
          className="navbar-link"
        >
          Solutions
        </NavLink>
        <NavLink
          to="/about-us"
          activeClassName="active"
          className="navbar-link"
        >
          About Us
        </NavLink>
        <NavLink to="/contact" activeClassName="active" className="navbar-link">
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
