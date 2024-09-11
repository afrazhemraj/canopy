import "./Construction.scss";
import { Link } from "react-router-dom";

const Construction = () => {
  return (
    <div className="construction">
      <div className="construction-content">
        <h1>🛠️ Under Construction 🚧</h1>
        <p>Want to find out more?</p>
        <Link className="navbar-link" to="/contact">
          <div className="contact-button">Learn More</div>
        </Link>
      </div>
    </div>
  );
};

export default Construction;
