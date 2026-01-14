import React from "react";

import logo from "../assets/logoSvg.svg";
import "../stylesheet/Header.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate=useNavigate()
  return (
    <>
      <section className="Header">
        <div className="header_logo_Wrap">
            <Link className="links" to="/">
          <div className="header_logo">
            <img src={logo} />
          </div>
           <div className="header_logo_text">Job Portal</div>
           </Link>
        </div>
        <div className="header_side">
          <button onClick={(()=>navigate("/login"))} className="d_btn t_btn">login</button>
          <button onClick={(()=>navigate("/signup"))} className="d_btn">sign up</button>
        </div>
      </section>
    </>
  );
};

export default Header;
