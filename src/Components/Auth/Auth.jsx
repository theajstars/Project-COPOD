import React, { useState } from "react";
import { Container } from "@mui/material";
import Logo from "../../Assets/IMG/Logo.svg";
import Register from "./Register";
import Login from "./Login";
// import { motion } from "framer-motion";
export function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default function Auth() {
  const [visibleComponent, setVisibleComponent] = useState("register");
  const handleComponentSwitch = (data) => {
    setVisibleComponent(data);
  };
  return (
    <Container maxWidth="md">
      <div className="auth-container">
        <div className="flex-row auth-form-container">
          <img src={Logo} className="form-logo" alt="form-logo" />
          {visibleComponent === "register" && (
            <Register switchComponent={handleComponentSwitch} />
          )}
          {visibleComponent === "login" && (
            <Login switchComponent={handleComponentSwitch} />
          )}
        </div>
      </div>
    </Container>
  );
}
