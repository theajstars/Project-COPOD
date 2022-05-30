import React, { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import SideNav from "./SideNav";
import { Link, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Dashboard() {
  const [testHistory, setTestHistory] = useState([123231, 231321]);
  const token = Cookies.get("ud");
  const [logout, setLogout] = useState(false);
  //Check if user is signed in
  useEffect(() => {
    if (!token) {
      // setLogout(true);
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
              <Grid item xs={6} sm={4} md={3} lg={3}>
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
              </Grid>
            </Grid>
          )}
        </div>
      </Container>
    </Container>
  );
}
