import React from "react";
import "./navbar.css";

const NavBar = props => {
  return (
    <div className="navbar">
      {props.arr.map(e => (
        <h5 className={"link " + (e.dropdown ? "dropdown-link" : "")}>
          {e.title}
          {e.dropdown ? (
            <ul className="dropdown">
              {e.dropdown.map(el => (
                <li>{el}</li>
              ))}
            </ul>
          ) : null}
        </h5>
      ))}
    </div>
  );
};

export default NavBar;
