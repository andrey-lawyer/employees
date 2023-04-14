import "./header.scss";

import logo from "./../../image/logo.png";

export const Header: React.FC = () => {
  return (
    <header className="header-task">
      <img src={logo} alt="logo" className="logo" />
      <span className="links">
        <a href="#users" className="link">
          Users
        </a>
        <a href="#registration" className="link header-task_sign">
          Sign Up
        </a>
      </span>
    </header>
  );
};
