import "./Home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <h1>
          Redefining building homes, one{" "}
          <span className="highlight">robot</span> at a time.
        </h1>
        <p>we’re on a quest to completely change the roofing industry</p>
        <Link className="navbar-link" to="/contact">
          <div className="contact-button">Learn More</div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
