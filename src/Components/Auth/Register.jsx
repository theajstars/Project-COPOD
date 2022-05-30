import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useToasts } from "react-toast-notifications";
import { validateEmail } from "./Auth";
import { baseURL } from "../../App";

export default function Register({ switchComponent }) {
  useEffect(() => {
    document.title = "COPOD - Create an Account";
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [submittingForm, setSubmittingForm] = useState(false);
  const { addToast, removeAllToasts } = useToasts();
  const registerUser = () => {
    removeAllToasts();

    //Check if password matches
    if (password.length < 8) {
      addToast("Password must be at least 8 characters", {
        appearance: "error",
        autoDismiss: true,
      });
    }
    if (password !== password2) {
      addToast("Passwords do not match", {
        appearance: "error",
        autoDismiss: true,
      });
    }
    // Validate Email and Name
    const isEmailValid = validateEmail(email);
    if (!isEmailValid) {
      addToast("Please enter a valid email", {
        appearance: "error",
        autoDismiss: true,
      });
    }
    if (name.length < 4) {
      addToast("Please enter your full name", {
        appearance: "error",
        autoDismiss: true,
      });
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
        if (res.data.auth) {
          //Authentication was successful
          Cookies.set("ud", res.data.token);
        } else {
          addToast("An error occured!", {
            appearance: "error",
            autoDismiss: true,
          });
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
    </>
  );
}
