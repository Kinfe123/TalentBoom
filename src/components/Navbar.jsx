import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useClerk } from "@clerk/clerk-react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const clerk = useClerk();
  const navigate = useNavigate();

  const handleSignIn = () => {
    clerk.openSignIn();
  };

  return (
    <div className="gpt3__navbar">
      {/* <a href="https://realtimecolors.com/" target="_blank">
            <h2 className="sitename">TalentBoom.</h2>
          </a> */}
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          {/* <img src={logo} /> */}
          {/*A place for logos */}
        </div>
        <div className="gpt3__navbar-links_container">
        <p>
                <a onClick={() => navigate("/home")} href="">
                  Home
                </a>
              </p>
              <p>
                <a onClick={() => navigate("/why")} href="">
                  Why Us?
                </a>
              </p>
              <p>
                <a onClick={() => navigate("/learn")} href="">
                  Learn
                </a>
              </p>
              <p>
                <a onClick={() => navigate("/web")} href="">
                  Web3.0/Receive
                </a>
              </p>
              <p>
                <a onClick={() => navigate("/home")} href="">
                  Skills
                </a>
              </p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="primary-button" onClick={handleSignIn}>
          Sign up
        </button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <a onClick={() => navigate("/home")} href="">
                  Home
                </a>
              </p>
              <p>
                <a onClick={() => navigate("/why")} href="">
                  Why Us?
                </a>
              </p>
              <p>
                <a onClick={() => navigate("/learn")} href="">
                  Learn
                </a>
              </p>
              <p>
                <a onClick={() => navigate("/web")} href="">
                  Web3.0/Receive
                </a>
              </p>
              <p>
                <a onClick={() => navigate("/home")} href="">
                  Skills
                </a>
              </p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="primary-button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
