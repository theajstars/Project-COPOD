import React, { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import SideNav from "./SideNav";
import { Link, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { baseURL } from "../../../App";

export default function Dashboard() {
  const [testHistory, setTestHistory] = useState([]);
  const token = Cookies.get("ud");
  const [logout, setLogout] = useState(false);
  //Check if user is signed in
  useEffect(() => {
    if (!token) {
      // setLogout(true);
      console.log("User is not logged in!");
    } else {
      //Token exists so check if token is valid
      axios
        .get(`${baseURL}/isUserAuth`, { headers: { "x-access-token": token } })
        .then((res) => {
          if (!res.data.auth) {
            //User is not authenticated
            // setLogout(true)
            console.log("Authentication failed");
            console.log(res);
          } else {
            //User is authenticated so fetch recent tests from DB
            axios
              .get(`${baseURL}/test/all`, {
                headers: { "x-access-token": token },
              })
              .then((res) => {
                console.log(res.data);
                setTestHistory(res.data.userTests);
              });
          }
        });
    }
  }, []);
  return (
    <Container maxWidth="lg">
      {logout && <Navigate to="/auth" />}

      <SideNav />
      <Container maxWidth="lg">
        <div className="dashboard-container flex-column">
          <Link
            to="/new"
            className="bg-dark-blue source-sans take-test-button text-white"
            // onClick={() => (window.location.href = "/new")}
          >
            Take a Test
          </Link>
          <hr className="dash-rule" />
          <span className="my-tests-head text-darker-blue">
            Your recent tests
          </span>
          <br />
          {testHistory.length === 0 ? (
            <span
              className="text-darker-blue source-sans"
              style={{ fontSize: "17px" }}
            >
              You have no recent tests
            </span>
          ) : (
            <Grid
              container
              spacing={5}
              alignItems="center"
              justifyContent="center"
              alignContent="center"
            >
              {testHistory.map((test) => {
                function getTestDay(date) {
                  const d = new Date(date);
                  console.log(d);
                  const days = [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ];
                  const day = days[d.getDay()];
                  console.log(day);
                  return day;
                }
                function getTestDate(date) {
                  const d = new Date(date);
                  const months = [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                  ];
                  const month = months[d.getMonth()];
                  const dateNum = d.getDate();
                  const year = d.getFullYear();

                  return `${month} ${dateNum}, ${year}`;
                }
                function getTestScore(testResult, verdict) {
                  var currentScore;
                  testResult.map((res) => {
                    if (res.label === verdict) {
                      currentScore = res.confidence;
                    }
                  });
                  return currentScore;
                }
                if (test.verdict === "negative") {
                  //Negative test result so user has no COVID
                  return (
                    <Grid item xs={6} sm={4} md={3} lg={3}>
                      <div className="test-history-positive-container test-history-container flex-column source-sans">
                        <span className="test-history-date-container flex-column">
                          <span className="test-history-day">
                            {getTestDay(test.testDate)}
                          </span>
                          <span className="test-history-date">
                            {getTestDate(test.testDate)}
                          </span>
                        </span>
                        <span className="test-history-value-container flex-row">
                          <span className="jakarta test-history-value text-dark-green">
                            {getTestScore(test.testResult, test.verdict)}
                          </span>
                          <span className="test-history-remark text-dark-green">
                            {test.verdict}
                          </span>
                        </span>
                        <Link
                          to={`/test/${test.testID}`}
                          className="text-darker-blue view-test-history"
                        >
                          View Details
                        </Link>
                      </div>
                    </Grid>
                  );
                } else {
                  //Positive test result so user HAS COVID

                  return (
                    <Grid item xs={6} sm={4} md={3} lg={3} key={test.testID}>
                      <div className="test-history-negative-container test-history-container flex-column source-sans">
                        <span className="test-history-date-container flex-column">
                          <span className="test-history-day">
                            {getTestDay(test.testDate)}
                          </span>
                          <span className="test-history-date">
                            {getTestDate(test.testDate)}
                          </span>
                        </span>
                        <span className="test-history-value-container flex-row">
                          <span className="jakarta test-history-value text-red">
                            {getTestScore(test.testResult, test.verdict)}
                          </span>
                          <span className="test-history-remark text-red">
                            {test.verdict}
                          </span>
                        </span>
                        <Link
                          to={`/test/${test.testID}`}
                          className="text-darker-blue view-test-history"
                        >
                          View Details
                        </Link>
                      </div>
                    </Grid>
                  );
                }
              })}
              {/* <Grid item xs={6} sm={4} md={3} lg={3}>
                <div className="test-history-positive-container test-history-container flex-column source-sans">
                  <span className="test-history-date-container flex-column">
                    <span className="test-history-day">Friday</span>
                    <span className="test-history-date">Nov 14 2022</span>
                  </span>
                  <span className="test-history-value-container flex-row">
                    <span className="jakarta test-history-value text-dark-green">
                      74.34%
                    </span>
                    <span className="test-history-remark text-dark-green">
                      Negative
                    </span>
                  </span>
                  <Link
                    to="/dashboard"
                    className="text-darker-blue view-test-history"
                  >
                    View Details
                  </Link>
                </div>
              </Grid>

              <Grid item xs={6} sm={4} md={3} lg={3}>
                <div className="test-history-negative-container test-history-container flex-column source-sans">
                  <span className="test-history-date-container flex-column">
                    <span className="test-history-day">Friday</span>
                    <span className="test-history-date">Nov 14 2022</span>
                  </span>
                  <span className="test-history-value-container flex-row">
                    <span className="jakarta test-history-value text-red">
                      74.34%
                    </span>
                    <span className="test-history-remark text-red">
                      Positive
                    </span>
                  </span>
                  <Link
                    to="/dashboard"
                    className="text-darker-blue view-test-history"
                  >
                    View Details
                  </Link>
                </div>
              </Grid> */}
            </Grid>
          )}
        </div>
      </Container>
    </Container>
  );
}
