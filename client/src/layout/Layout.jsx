import Header from "../components/template/header/Header";
import "./layout.css";
import {Outlet} from 'react-router-dom'
const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
