import "./Home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>
          Redefining automation, one <span className="highlight">robot</span> at
          a time.
        </h1>
        <p className="home-subtitle">
          Discover how our automation solutions are setting new standards in the
          industry.
        </p>
        <Link className="home-logo-link" to="/contact">
          <div className="contact-button">Learn More</div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
