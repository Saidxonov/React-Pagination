import React from "react";
import Logo from "../images/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import "./MainLayout.css";

function MainLayout({ children }) {
  const navigate = useNavigate();
  function handleHome() {
    navigate("/");
  }
  return (
    <>
      <header>
        <div className="header">
          <div className="container">
            <div className="head">
              <div className="logo">
                <img onClick={handleHome} src={Logo} alt="" />
              </div>
              <div className="menus">
                <ul>
                  <li>
                    <NavLink to="/pagination" className="font2">
                      Pagination
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="font2" to="/scroll-pagination">
                      Scroll
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="font2">Services</NavLink>
                  </li>
                  <li>
                    <NavLink className="font2">Pricing</NavLink>
                  </li>
                  <button className="main-button">Try for Free</button>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      {children}
    </>
  );
}

export default MainLayout;
