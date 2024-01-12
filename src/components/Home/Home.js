import "./Home.scss";
import geo from "../../assets/geo.png";

const Home = () => {
  return (
    <div className="container home-page">
      <div className="content">
        <div className="infoarea">
          <header>Redefining Building Homes, One Robot at a Time.</header>
          <button>see our robots →</button>
        </div>
        <div className="imagearea">
          <img src={geo} alt="geometric design"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
