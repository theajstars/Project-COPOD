import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../../../Assets/IMG/Logo.svg";
import Cookies from "js-cookie";
export default function SideNav() {
  const [isMenuShowing, setMenuShowing] = useState(false);
  const [navigateToAuth, setNavigateToAuth] = useState(false);
  return (
    <>
      <Link className="home-icon" to="/">
        <img src={Logo} alt="" className="nav-logo" />
      </Link>
      <div className="nav-container flex-column">
        <span
          className="nav-button flex-row"
          onClick={() => setMenuShowing(!isMenuShowing)}
        ></span>
        <motion.div
          className="nav-content flex-column"
          initial={{
            scale: 0,
          }}
          animate={{
            scale: isMenuShowing ? 1 : 0,
            display: isMenuShowing ? "flex" : "none",
          }}
        >
          <Link to="/dashboard" className="nav-item text-gray source-sans">
            Account Settings
          </Link>
          <Link to="/dashboard" className="nav-item text-gray source-sans">
            Contact Developer
          </Link>
          <Link
            to="/dashboard"
            className="nav-item text-gray source-sans"
            onClick={(e) => {
              e.preventDefault();
              Cookies.remove("ud");
              setNavigateToAuth(true);
            }}
          >
            Logout
          </Link>
        </motion.div>
      </div>
      {navigateToAuth && <Navigate to="/auth" />}
    </>
  );
}
