import "./header.scss";

import logo from "./../../image/logo.png";

export const Header: React.FC = () => {
  return (
    <header className="header-task">
      <img src={logo} alt="logo" width="104" height="26" className="logo" />
      <nav className="links">
        <a href="#users" className="link">
          Users
        </a>
        <a href="#registration" className="link header-task_sign">
          Sign Up
        </a>
      </nav>
    </header>
  );
};
