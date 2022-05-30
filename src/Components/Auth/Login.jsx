import axios from "axios";
import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";

import { useToasts } from "react-toast-notifications";
import { baseURL } from "../../App";
import { validateEmail } from "./Auth";

export default function Login({ switchComponent }) {
  useEffect(() => {
    document.title = "COPOD - Sign In to your Account";
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submittingForm, setSubmittingForm] = useState(false);
  const { addToast, removeAllToasts } = useToasts();
  const loginUser = () => {
    removeAllToasts();

    // Validate Email and Name
    const emailTrue = validateEmail(email);
    if (!emailTrue) {
      //Error in email address

      addToast("Please enter a valid email", {
        appearance: "error",
        autoDismiss: true,
      });
    }
    if (password.length < 8) {
      addToast("Please enter your password", {
        appearance: "error",
        autoDismiss: true,
      });
    }
    if (emailTrue && password.length >= 8) {
      //If no error send form to database
      const loginData = {
        email,
        password,
      };

      axios
        .post(`${baseURL}/user/login`, loginData)
        .then((response) => {
          console.clear();
          console.log(response);
          if (response.data.auth) {
            Cookies.set("ud", response.data.token);
          }
        })
        .catch((err) => {
          console.error(err);
        });
      console.log("No errors found");
      setSubmittingForm(true);
    }
  };
  return (
    <>
      <div className="auth-form login-form flex-column">
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
            className="auth-input auth-input-full source-sans text-gray"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            spellCheck="false"
          ></input>
        </div>
        <button
          className="auth-btn bg-dark-blue text-white source-sans"
          onClick={loginUser}
        >
          Continue
          {submittingForm && (
            <>
              &nbsp;&nbsp;&nbsp;<i className="fad fa-spinner-third fa-spin"></i>
            </>
          )}
        </button>
        <small className="auth-small source-sans">
          Don't have an account?{" "}
          <a
            className="auth-link"
            href="#"
            onClick={() => switchComponent("register")}
          >
            Register
          </a>
        </small>
      </div>
    </>
  );
}
