import { Link } from "react-router-dom";
import "./header.css";
import NavBar from "./shildren/NavBar";
import Search from "./shildren/Search";
import Toggle from "./shildren/Toggle";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid px-5 ">
        <Link className="navbar-brand" to="/">
          Navbar scroll
        </Link>
        <Toggle />
        <div className="collapse navbar-collapse" id="navbarScroll">
          <NavBar />
          <Search />
        </div>
      </div>
    </nav>
  );
};

export default Header;
