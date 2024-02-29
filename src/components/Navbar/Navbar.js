import { Link } from "react-router-dom";
import cr from "../../assets/cr.png";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <div className="title">
        <Link className="navbar-link" to="/">
          <img src={cr} alt="Cr"></img>
          canopy
        </Link>
      </div>
      <div className="links">
        <Link className="navbar-link" to="/contact">
          <div className="contact-button">Contact Us</div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
