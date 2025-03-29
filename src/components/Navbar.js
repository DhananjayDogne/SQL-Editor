import React from "react";
import { BsGithub } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">SQL Query Runner</div>
      <ul className="nav-links">
        <li>
            <a
              target="_blank"
              rel="nouou"
              href="https://github.com/DhananjayDogne/SQL-Editor"
            >
              <p className="git_logo">
                <BsGithub className="git" size={18} />
                View on GitHub
              </p>
            </a>
            </li>
      </ul>
    </nav>
  );
};

export default Navbar;
