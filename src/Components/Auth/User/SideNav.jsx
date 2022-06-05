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
      <Link
        to="/auth"
        className="nav-item text-gray source-sans"
        onClick={(e) => {
          e.preventDefault();
          Cookies.remove("ud");
          setNavigateToAuth(true);
        }}
      >
        Logout
      </Link>
      {navigateToAuth && <Navigate to="/auth" />}
    </>
  );
}
