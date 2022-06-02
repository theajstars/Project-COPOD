import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import { PieChart, Pie, Cell } from "recharts";
import axios from "axios";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { Radio, message } from "antd";
import { baseURL } from "../../../App";

export default function NewTestResults({ result, testObject }) {
  const token = Cookies.get("ud");
  const [logout, setLogout] = useState(false);

  const [verdictValue, setVerdictValue] = useState("Negative");
  const [userVerdict, setUserVerdict] = useState("negative");
  const [covidResult, setCovidResult] = useState([]);
  const [colors, setColors] = useState([]);
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
  ];
  // const COLORS = ["#89E3A8", "#F15757"];

  const changeTestResult = (e) => {
    console.log(e);
  };
  const handleUserVerdictChange = (e) => {
    setUserVerdict(e.target.value);
  };

  const showVerdictInformation = () => {
    message.info(
      "This is the result of an actual test carried out in a medical center or with a PCR kit",
      10
    );
  };
  useEffect(() => {
    if (covidResult.length > 0) {
      console.log("COvid Res", covidResult);
      if (covidResult[0].confidence > covidResult[1].confidence) {
        setVerdictValue(covidResult[0].label);
      } else {
        setVerdictValue(covidResult[1].label);
      }
    }
  }, [covidResult]);

  useEffect(() => {
    console.log("User test object: ", testObject);
  }, [testObject]);

  useEffect(() => {
    if (!token) {
      // setLogout(true);
      console.log("User is not logged in!");
    }
    const tempResult = [];
    result.map((res) => {
      if (res.label === "positive") {
        // Positive test result so red color
        var confidence = parseFloat((res.confidence * 100).toFixed(2));
        var obj = {
          label: res.label,
          confidence: confidence,
          color: "#F15757",
        };
        setColors((previousColors) => [...previousColors, "#F15757"]);
        tempResult.push(obj);
      } else if (res.label === "negative") {
        //Negative test result so green color
        var confidence = parseFloat((res.confidence * 100).toFixed(2));
        var obj = {
          label: res.label,
          confidence: confidence,
          color: "#89E3A8",
        };
        setColors((previousColors) => [...previousColors, "#89E3A8"]);
        tempResult.push(obj);
      }
    });
    setCovidResult(tempResult);
  }, []);
  useEffect(() => {
    console.log(colors);
  }, [colors]);

  const saveNewTest = () => {
    axios
      .post(
        `${baseURL}/test/new`,
        { some: "Some data" },
        {
          headers: {
            "x-access-token": token,
          },
        }
      )
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div className="new-test-results-container">
      {logout && <Navigate to="/auth" />}

      <Container maxWidth="lg">
        <center>
          <span className="text-darker-blue cabin test-result-head">
            Test Results
          </span>
          <div className="test-result-box">
            <PieChart width={300} height={300}>
              <Pie
                data={covidResult}
                innerRadius={55}
                outerRadius={90}
                fill="#8884d8"
                paddingAngle={0}
                dataKey="confidence"
                label
              >
                {data.map((entry, index) => (
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
                  verdictValue === "negative"
                    ? "negative-verdict"
                    : "positive-verdict"
                }`}
              >
                {verdictValue}
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
            <Radio.Group onChange={handleUserVerdictChange} value={userVerdict}>
              <Radio value={"negative"}>Negative</Radio>
              <Radio value={"positive"}>Positive</Radio>
            </Radio.Group>
            <div className="flex-row test-btn-row">
              <button
                className="test-segment-action cabin"
                onClick={saveNewTest}
              >
                Save test
              </button>
              <button className="test-segment-action cabin delete-test-btn">
                Delete test
              </button>
            </div>
          </div>
        </center>
      </Container>
    </div>
  );
}
