import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { validateEmail } from "./Auth";
import { baseURL } from "../../App";
import { Navigate } from "react-router-dom";
import { message } from "antd";

export default function Register({ switchComponent }) {
  useEffect(() => {
    document.title = "COPOD - Create an Account";
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [submittingForm, setSubmittingForm] = useState(false);
  const [navigateToDashboard, setNavigateToDashboard] = useState(false);

  const registerUser = () => {
    //Check if password matches
    if (password.length < 8) {
      message.error("Password must be at least 8 characters");
    }
    if (password !== password2) {
      message.error("Passwords do not match");
    }
    // Validate Email and Name
    const isEmailValid = validateEmail(email);
    if (!isEmailValid) {
      message.error("Please enter a valid email");
    }
    if (name.length < 4) {
      message.error("Please enter your full name");
    }

    if (
      name.length >= 4 &&
      isEmailValid &&
      password.length >= 8 &&
      password === password2
    ) {
      //If no error send form to database
      const registerData = {
        name,
        email,
        password,
      };
      axios.post(`${baseURL}/user/register`, registerData).then((res) => {
        console.clear();
        console.log(res);
        if (res.data.success) {
          //Authentication was successful
          Cookies.set("ud", res.data.token);
          setNavigateToDashboard(true);
        } else if (res.data.userExists) {
          // User already exists with email
          message.error("User already exists!");
        } else {
          message.error("Oops! An error occurred!");
        }

        setSubmittingForm(false);
      });
      console.log("No errors found");
      setSubmittingForm(true);
    } else {
    }
  };
  return (
    <>
      <div className="auth-form flex-column">
        <input
          className="auth-input auth-input-full source-sans text-gray"
          placeholder="Full Name"
          spellCheck="false"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <input
          className="auth-input auth-input-full source-sans text-gray"
          placeholder="Email"
          spellCheck="false"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <div className="flex-row auth-form-row">
          <input
            type="password"
            className="auth-input auth-input-half source-sans text-gray"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            spellCheck="false"
          ></input>
          <input
            type="password"
            className="auth-input auth-input-half source-sans text-gray"
            placeholder="Confirm Password"
            spellCheck="false"
            value={password2}
            onChange={(e) => {
              setPassword2(e.target.value);
            }}
          ></input>
        </div>
        <button
          className="auth-btn bg-dark-blue text-white source-sans"
          onClick={registerUser}
        >
          Continue
          {submittingForm && (
            <>
              &nbsp;&nbsp;&nbsp;<i className="fad fa-spinner-third fa-spin"></i>
            </>
          )}
        </button>
        <small className="auth-small source-sans">
          Already have an account?{" "}
          <a
            className="auth-link"
            href="#"
            onClick={() => switchComponent("login")}
          >
            Login
          </a>
        </small>
      </div>
      {navigateToDashboard && <Navigate to="/dashboard" />}
    </>
  );
}
