import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
      <li className="nav-item">
        <NavLink className="nav-link" to='/'>Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link">Link</NavLink>
      </li>
      <li className="nav-item dropdown">
        <NavLink
          className="nav-link dropdown-toggle"
          
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Link
        </NavLink>
        <ul className="dropdown-menu">
          <li>
            <NavLink className="dropdown-item" to='/a'>
              Action
            </NavLink>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <NavLink className="dropdown-item" to='/b'>
              Another action
            </NavLink>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <NavLink className="dropdown-item" to='/c'>
              Something else here
            </NavLink>
          </li>
        </ul>
      </li>
     
    </ul>
  );
};

export default NavBar;
