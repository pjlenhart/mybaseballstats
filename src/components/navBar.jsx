import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const color = {
    background: "#d9534f",
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={color}>
      <div className="container-fluid">
        <Link to="/home" className="navbar-brand">
          My Baseball Stats
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to="/home" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/teams" className="nav-link">
              Teams
            </NavLink>
            <NavLink to="/gamelog" className="nav-link">
              Game Log
            </NavLink>
            <NavLink to="/" exact className="nav-link">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
