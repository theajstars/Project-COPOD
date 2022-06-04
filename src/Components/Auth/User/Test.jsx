import React, { useState, useEffect } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import { Container } from "@mui/material";

import { baseURL } from "../../../App";
import axios from "axios";
import Cookies from "js-cookie";

import { Radio, message, Modal, Button } from "antd";
import { PieChart, Pie, Cell } from "recharts";

export default function Test() {
  let navigate = useNavigate();
  const testID = useParams().test_id;
  const token = Cookies.get("ud");
  const [logout, setLogout] = useState(false);
  const [noTest, setNoTest] = useState(false);
  const [userCovidResult, setUserCovidResult] = useState([]);
  const [userVerdict, setUserVerdict] = useState(null);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [userResult, setUserResult] = useState({});
  const [colors, setColors] = useState([]);

  const showVerdictInformation = () => {
    message.info(
      "This is the result of an actual test carried out in a medical center or with a PCR kit",
      10
    );
  };
  const showUserNotUpdatedTest = () => {
    message.error("Please set a verdict for the test first!", 10);
  };
  const handleUserVerdictChange = (e) => {
    setUserVerdict(e.target.value);
  };
  useEffect(() => {
    //Check if user is authenticated
    if (!token) {
      //Token does not exist
      setLogout(true);
    } else {
      //Token exists so check if it is valid
      axios
        .get(`${baseURL}/isUserAuth`, {
          headers: { "x-access-token": token },
        })
        .then((res) => {
          if (!res.data.auth) {
            //Token is invalid
            setLogout(true);
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
                  if (res.data.userTestResult === null) {
                    //Test does not exist or user has no permission to access test
                    setNoTest(true);
                  }
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
    document.title = "Test Result - COPOD";
  }, []);
  const updateTest = () => {
    //Check if user has actually updated the test
    // if (userVerdict !== "positive" || userVerdict !== "negative") {
    if (!userVerdict) {
      showUserNotUpdatedTest();
    } else {
      const data = {
        testID,
        action: "update",
        content: { userVerdict },
      };
      axios
        .post(`${baseURL}/test/modify`, data, {
          headers: {
            "x-access-token": token,
          },
        })
        .then((res) => {
          console.log(res);
          message.success("Test updated successfully!");
          //Redirect user to dashboard
          navigate(`/test/${testID}`);
        });
    }
  };
  const deleteTest = () => {
    const data = {
      testID,
      action: "delete",
      content: null,
    };
    axios
      .post(`${baseURL}/test/modify`, data, {
        headers: {
          "x-access-token": token,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          //Deleting test was successful
          setNoTest(true);
        }
      });
  };
  return (
    <>
      {logout && <Navigate to="/auth" />}
      <div className="new-test-results-container">
        {noTest && <Navigate to="/dashboard" />}

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

              {userResult.userVerdict == undefined && (
                <>
                  <div className="confirm-result-head flex-row">
                    <p className="cabin">Confirm test result</p>
                    <span
                      className="confirm-result-icon flex-row"
                      onClick={showVerdictInformation}
                    >
                      <i className="fas fa-info"></i>
                    </span>
                  </div>
                  <br />
                  <Radio.Group
                    onChange={handleUserVerdictChange}
                    value={userVerdict}
                  >
                    <Radio value={"negative"}>Negative</Radio>
                    <Radio value={"positive"}>Positive</Radio>
                  </Radio.Group>
                  <Button onClick={() => setUserVerdict("")}>Clear</Button>
                </>
              )}
              <div className="flex-row test-btn-row">
                <button
                  className={`test-segment-action cabin ${
                    userResult.userVerdict != undefined ? "button-disabled" : ""
                  }`}
                  onClick={updateTest}
                  disabled={userResult.userVerdict != undefined ? true : false}
                >
                  Update test
                </button>
                <button
                  className="test-segment-action cabin delete-test-btn"
                  onClick={() => setDeleteModalVisible(true)}
                >
                  Delete test
                </button>
                <Modal
                  visible={isDeleteModalVisible}
                  onOk={deleteTest}
                  onCancel={() => setDeleteModalVisible(false)}
                  centered
                >
                  <h3 className="cabin">
                    Are you sure you want to delete this test?
                  </h3>
                </Modal>
              </div>
            </div>
          </center>
        </Container>
      </div>
    </>
  );
}
