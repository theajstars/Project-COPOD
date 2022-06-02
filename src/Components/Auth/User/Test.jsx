import React, { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Container } from "@mui/material";

import { baseURL } from "../../../App";
import axios from "axios";
import Cookies from "js-cookie";

import { Radio, message, Modal, Button } from "antd";
import { PieChart, Pie, Cell } from "recharts";

export default function Test() {
  const testID = useParams().test_id;
  const token = Cookies.get("ud");
  const [logout, setLogout] = useState(false);
  const [userCovidResult, setUserCovidResult] = useState([]);
  const [userResult, setUserResult] = useState({});
  const [colors, setColors] = useState([]);

  const showVerdictInformation = () => {
    message.info(
      "This is the result of an actual test carried out in a medical center or with a PCR kit",
      10
    );
  };
  useEffect(() => {
    //Check if user is authenticated
    if (!token) {
      //Token does not exist
    } else {
      //Token exists so check if it is valid
      axios
        .get(`${baseURL}/isUserAuth`, {
          headers: { "x-access-token": token },
        })
        .then((res) => {
          if (!res.data.auth) {
            //Token is invalid
          } else {
            //User is authenticated
            axios
              .post(
                `${baseURL}/test/view`,
                { testID },
                {
                  headers: { "x-access-token": token },
                }
              )
              .then((res) => {
                console.log(res);
                if (res.data.success) {
                  setUserResult(res.data.userTestResult);
                  setUserCovidResult(res.data.userTestResult.testResult);
                  res.data.userTestResult.testResult.map((testItem) => {
                    if (testItem.label === "positive") {
                      // Positive test result so red color

                      setColors((previousColors) => [
                        ...previousColors,
                        "#F15757",
                      ]);
                    } else if (testItem.label === "negative") {
                      //Negative test result so green color
                      setColors((previousColors) => [
                        ...previousColors,
                        "#89E3A8",
                      ]);
                    }
                  });
                }
              });
          }
        });
    }

    //Fetch test data from database

    console.log("Hello world!");
  }, []);
  return (
    <>
      {logout && <Navigate to="/auth" />}
      <div className="new-test-results-container">
        <Container maxWidth="lg">
          <center>
            <span className="text-darker-blue cabin test-result-head">
              Test Results
            </span>
            <div className="test-result-box">
              <PieChart width={300} height={300}>
                <Pie
                  data={userResult.testResult}
                  innerRadius={55}
                  outerRadius={90}
                  fill="#8884d8"
                  paddingAngle={0}
                  dataKey="confidence"
                  label
                >
                  {colors.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={colors[index % colors.length]}
                    />
                  ))}
                </Pie>
              </PieChart>

              <div className="flex-row pie-key-row">
                <span className="pie-key flex-row">
                  <span className="key-color key-color-positive"></span>
                  <span className="key-text cabin">Positive test</span>
                </span>
                <span className="pie-key flex-row">
                  <span className="key-color key-color-negative"></span>
                  <span className="key-text cabin">Negative test</span>
                </span>
              </div>
              <div className="flex-row verdict-row cabin">
                <span className="cabin verdict-text">Verdict: </span>
                <span
                  className={`cabin verdict-value ${
                    userResult.verdict === "negative"
                      ? "negative-verdict"
                      : "positive-verdict"
                  }`}
                >
                  {userResult.verdict}
                </span>
              </div>
              <br />

              <div className="confirm-result-head flex-row">
                <p className="cabin">Confirm test result</p>
                <span
                  className="confirm-result-icon flex-row"
                  onClick={showVerdictInformation}
                >
                  <i className="fas fa-info"></i>
                </span>
              </div>
              {/* <br /> */}
              {/* <Radio.Group
                onChange={handleUserVerdictChange}
                value={userVerdict}
              >
                <Radio value={"negative"}>Negative</Radio>
                <Radio value={"positive"}>Positive</Radio>
              </Radio.Group>
              <Button onClick={() => setUserVerdict("")}>Clear</Button> */}
            </div>
          </center>
        </Container>
      </div>
    </>
  );
}
