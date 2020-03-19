import React from "react";
import { Link } from "react-router-dom";

export class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <ul className="list-inline">
            <li className="list-inline-item">
              <Link to="/" className="navbar-brand">
                <img
                  width="90px"
                  height="30px"
                  src="images/logo.png"
                  alt="Logo"
                />
              </Link>
            </li>
            <Link to="/" replace>
              Home
            </Link>
            <Link to="/products" replace>
              Products
            </Link>
            <Link to="/coupons" replace>
              Coupons
            </Link>
            <Link to="/taxes" replace>
              Taxes
            </Link>
            <Link to="/reports" replace>
              Reports
            </Link>
          </ul>
        </div>
      </nav>
    );
  }
}
