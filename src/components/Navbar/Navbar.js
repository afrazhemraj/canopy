import { Link } from "react-router-dom";
import { useState } from "react";
import cr from "../../assets/cr.png";
import "./Navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <div className="title">
        <Link className="logo-link" to="/">
          <img src={cr} alt="Cr"></img>
          canopy
        </Link>
      </div>
      <div className={`links ${isOpen ? "active" : ""}`}>
        <Link className="navbar-link" to="/" onClick={closeMenu}>
          <div>Home</div>
        </Link>
        <Link className="navbar-link" to="/mission" onClick={closeMenu}>
          <div>Our Mission</div>
        </Link>
        <Link className="navbar-link" to="/about" onClick={closeMenu}>
          <div>About Us</div>
        </Link>
        <Link className="navbar-link" to="/contact" onClick={closeMenu}>
          {isOpen ? (
            <div>Contact Us</div>
          ) : (
            <div className="contact-button">Contact Us</div>
          )}
        </Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <MenuIcon />
      </div>
    </nav>
  );
};

export default Navbar;
