import logo from "../BaseballLogo.png";
import { Link } from "react-router-dom";

const Welcome = (props) => {
  //   handleGuest = () => {
  //     history.push("/home");
  //   };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
      </header>
      <h1 className="Welcome-tagline">
        Stats scored by real people in real time!
      </h1>
      <br />
      <div>
        <Link to="/home" className="btn btn-outline-danger btn-lg welcome-btn">
          Continue As Guest
        </Link>
      </div>
      <br />
      <div>
        <button className="btn btn-outline-danger btn-lg welcome-btn">
          Scorer Log In
        </button>
      </div>
    </div>
  );
};

export default Welcome;
