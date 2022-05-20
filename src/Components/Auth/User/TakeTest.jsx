import Model from "./Top_Half/model.json";
import React, { useState, useEffect } from "react";
import ml5 from "ml5";
import { Navigate } from "react-router-dom";
import { Container } from "@mui/material";
import {
  Select,
  Radio,
  Slider,
  Switch,
  Popconfirm,
  notification,
  Space,
  message,
  Modal,
  InputNumber,
  Row,
  Col,
} from "antd";
import { motion } from "framer-motion";
//Import countries.json for users location entry
import { countries } from "../../../Assets/JSON/JsonExports";

import ModalBlur from "../../ModalBlur";
import NewTestResults from "./NewTestResults";

// Function to send notification
const openNotificationWithIcon = (type, title, description) => {
  notification[type]({
    message: title,
    description: description,
  });
};

function CancelTestButton() {
  const [testCancelled, setTestCancelled] = useState(false);
  const testCloseText = "Are you sure you want to cancel the test?";
  const testClosed = () => {
    message.success("Test cancelled!");
  };
  return (
    <>
      {testCancelled && <Navigate to="/dashboard" />}
      <Popconfirm
        title={testCloseText}
        onConfirm={() => {
          testClosed();
          setTimeout(() => {
            //Redirect to dashboard if user cancels test
            setTestCancelled(true);
          }, 300);
        }}
        okText="Yes"
        cancelText="No"
      >
        <span className="cancel-test">
          <i className="fas fa-times"></i>
        </span>
      </Popconfirm>
    </>
  );
}
export default function TakeTest() {
  const [countriesArray, setCountriesArray] = useState(countries);
  const [showingScreen, setShowingScreen] = useState(1);
  const [testModal, setTestModal] = useState(false);
  const [location, setLocation] = useState("");
  const [age, setAge] = useState(18);
  const [gender, setGender] = useState(1);
  const [fever, setFever] = useState(false);
  const [feverValue, setFeverValue] = useState(37);
  const [soreThroat, setSoreThroat] = useState(false);
  const [cough, setCough] = useState(false);

  const [bodyPain, setBodyPain] = useState(false);
  const [bodyPainValue, setBodyPainValue] = useState(false);
  const [isBodyPainValueDisabled, setBodyPainValueDisabled] = useState(true);

  const [runnyNose, setRunnyNose] = useState(false);
  const [headAche, setHeadache] = useState(false);
  const [breathingDiff, setBreathingDiff] = useState(false);

  const [breathingDiffValue, setBreathingDiffValue] = useState(false);
  const [isBreathingDiffValueDisabled, setBreathingDiffValueDisabled] =
    useState(true);

  const [isSubmitModalVisible, setSubmitModalVisible] = useState(false);

  const processingResultTexts = [
    "Connecting to Model",
    "Processing Results",
    "Waiting for results",
    "Calculating Result",
    "Finishing up",
  ];
  const [processingResultText, setProcessingResultText] = useState(
    processingResultTexts[0]
  );
  const [testResults, setTestResults] = useState([]);
  const showSubmitModal = () => {
    setSubmitModalVisible(true);
  };
  const handleSubmitCancel = (e) => {
    setSubmitModalVisible(false);
    console.log("Submitted falsely!");
  };
  const handleSubmitSucess = (e) => {
    setSubmitModalVisible(false);
    setTestModal(true);

    console.log("Submitted successfully!");
  };
  const getUserResult = () => {
    const neuralOptions = {
      task: "classification",
      debug: true,
    };
    const nn = ml5.neuralNetwork(neuralOptions);
    nn.load("/Top_Half/model.json", () => {
      const input = {
        cough: cough ? 1 : 0,
        fever: fever ? 1 : 0,
        sore_throat: soreThroat ? 1 : 0,
        shortness_of_breath: breathingDiff ? 1 : 0,
        head_ache: headAche ? 1 : 0,
        age_60_and_above: age >= 60 ? 1 : 0,
        gender: gender,
      };

      nn.classify(input, (error, testResult) => {
        if (error) {
          console.error("An error occurred: ", error);
        } else {
          console.log(testResult);
          setTestResults(testResult);
        }
      });
    });
  };
  const PainScaleMarks = {
    1: 1,
    50: 2,
    100: 3,
  };
  const { Option } = Select;

  const changeGender = (e) => {
    setGender(e.target.value);
  };
  const incrementAge = () => {
    if (!isNaN(parseInt(age))) {
      //Age is a valid number
      setAge(parseInt(age) + 1);
    } else {
      setAge(1);
    }
  };
  const decrementAge = () => {
    if (age !== 1) {
      if (!isNaN(parseInt(age))) {
        //Age is a valid number
        setAge(parseInt(age) - 1);
      } else {
        setAge(1);
      }
    }
  };
  const handleChange = (value) => {
    console.log(value);
    const isValid = age + value >= 1 ? true : false;
    console.log(isValid);
    if (isValid) {
      if (!isNaN(parseInt(age))) {
        //Age is a valid number
        setAge(value);
      } else {
        setAge(1);
      }
    }
  };
  const checkAgeIsNumber = (e) => {
    handleChange(e.target.value);
  };
  const cancelTest = () => {
    //Close the test if user clicks the X on test modal
  };
  // Check if age is an empty string when the value changes
  useEffect(() => {
    if (age === "") {
      setAge(1);
    }
  }, [age]);
  useEffect(() => {
    console.log(testResults);
  }, [testResults]);

  //Transition modal text when modal is visible
  useEffect(() => {
    if (testModal) {
      getUserResult();
      function changeProcessingText(index) {
        setProcessingResultText(processingResultTexts[index]);
      }

      setTimeout(() => {
        changeProcessingText(0);
      }, 800);
      setTimeout(() => {
        changeProcessingText(1);
      }, 1000);
      setTimeout(() => {
        changeProcessingText(2);
      }, 1500);
      setTimeout(() => {
        changeProcessingText(3);
      }, 3000);
      setTimeout(() => {
        changeProcessingText(4);
      }, 3600);
    }
  }, [testModal]);

  return (
    <>
      <Container maxWidth="md">
        <div className="test-container flex-row">
          <motion.div
            className="test-segment-container bg-white flex-column"
            initial={{
              opacity: 0,
              display: "flex",
            }}
            animate={{
              opacity: showingScreen === 1 ? 1 : 0,
              display: showingScreen === 1 ? "flex" : "none",
            }}
          >
            <CancelTestButton />
            <div className="test-segment-question flex-column">
              <span className="test-segment-question-text">
                Please select your country / region
              </span>
              <br />
              <br />
              <Select
                defaultValue="NGA"
                style={{ width: "70%" }}
                onChange={handleChange}
              >
                {countriesArray.map((country, index) => {
                  const countryPrefix = (
                    <img src={country.image} className="country-select-image" />
                  );
                  return (
                    <Option value={country.code} key={index}>
                      {countryPrefix}
                      {country.name}
                    </Option>
                  );
                })}
                <Option value="lucy">Lucy</Option>
              </Select>
            </div>
            <div className="test-segment-question flex-column">
              <span className="test-segment-question-text">
                Please input your age
              </span>
              <br />
              <div className="input-test-age flex-row">
                <span
                  className="text-darker-blue"
                  onClick={() => {
                    decrementAge();
                  }}
                >
                  <i className="fas fa-minus"></i>
                </span>
                <input
                  type="text"
                  className="test-age-value cabin"
                  value={age}
                  onChange={checkAgeIsNumber}
                />
                <span
                  className="text-darker-blue"
                  onClick={() => {
                    incrementAge();
                  }}
                >
                  <i className="fas fa-plus"></i>
                </span>
              </div>
            </div>
            <div className="test-segment-question flex-column">
              <span className="test-segment-question-text">Select Gender</span>
              <br />
              <br />
              <Radio.Group onChange={changeGender} value={gender}>
                <Radio.Button value={0}>Male</Radio.Button>
                <Radio.Button value={1}>Female</Radio.Button>
              </Radio.Group>
            </div>

            <div className="test-segment-actions flex-row">
              <button className="test-segment-action cabin" disabled>
                Back
              </button>
              <button
                className="test-segment-action cabin"
                onClick={() => {
                  console.log(age);
                  if (age < 1 || isNaN(age)) {
                    openNotificationWithIcon(
                      "error",
                      "Form error",
                      "Please enter a valid age!"
                    );
                  } else {
                    setShowingScreen(showingScreen + 1);
                  }
                }}
              >
                Continue
              </button>
            </div>
          </motion.div>
          <motion.div
            className="test-segment-container bg-white flex-column"
            initial={{
              opacity: 0,
              display: "flex",
            }}
            animate={{
              opacity: showingScreen === 2 ? 1 : 0,
              display: showingScreen === 2 ? "flex" : "none",
            }}
          >
            <CancelTestButton />

            <div className="test-segment-question flex-column">
              <span className="test-segment-question-text">
                Do you have a fever?
              </span>
              <br />
              <br />
              <div className="test-segment-answer-options flex-row">
                <span className="test-segment-answer-option cabin">No</span>
                <Switch
                  size="default"
                  onChange={(e) => {
                    setFever(e);
                  }}
                />
                <span className="test-segment-answer-option cabin">Yes</span>
              </div>
            </div>
            <div className="test-segment-question flex-column">
              <span className="test-segment-question-text">
                Can you provide your temperature?
              </span>
              <br />
              <br />
              <div className="slider-container">
                <div
                  className="flex-row"
                  style={{
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Row
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Col span={12}>
                      <Slider
                        min={30}
                        max={44}
                        value={typeof feverValue === "number" ? feverValue : 0}
                        onChange={(e) => {
                          setFeverValue(e);
                        }}
                      />
                    </Col>
                    <Col span={4}>
                      <InputNumber
                        min={30}
                        max={44}
                        style={{ margin: "0 16px" }}
                        value={feverValue}
                        onChange={(e) => {
                          setFeverValue(e);
                        }}
                      />
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
            <div className="test-segment-question flex-column">
              <span className="test-segment-question-text">
                Do you have a sore throat?
              </span>
              <br />
              <br />
              <div className="test-segment-answer-options flex-row">
                <span className="test-segment-answer-option cabin">No</span>
                <Switch
                  size="default"
                  onChange={(e) => {
                    setSoreThroat(e);
                  }}
                />
                <span className="test-segment-answer-option cabin">Yes</span>
              </div>
            </div>
            <div className="test-segment-question flex-column">
              <span className="test-segment-question-text">
                Do you have a cough?
              </span>
              <br />
              <br />
              <div className="test-segment-answer-options flex-row">
                <span className="test-segment-answer-option cabin">No</span>
                <Switch
                  size="default"
                  onChange={(e) => {
                    setCough(e);
                  }}
                />
                <span className="test-segment-answer-option cabin">Yes</span>
              </div>
            </div>
            <div className="test-segment-actions flex-row">
              <button
                className="test-segment-action cabin"
                onClick={() => setShowingScreen(showingScreen - 1)}
              >
                Back
              </button>
              <button
                className="test-segment-action cabin"
                onClick={() => setShowingScreen(showingScreen + 1)}
              >
                Continue
              </button>
            </div>
          </motion.div>
          <motion.div
            className="test-segment-container bg-white flex-column"
            initial={{
              opacity: 0,
              display: "flex",
            }}
            animate={{
              opacity: showingScreen === 3 ? 1 : 0,
              display: showingScreen === 3 ? "flex" : "none",
            }}
          >
            <CancelTestButton />

            <div className="test-segment-question flex-column">
              <span className="test-segment-question-text">
                Do you have body pains? <br />
                <br />
                e.g Neck, Back, Waist, Torso.
              </span>
              <br />
              <br />
              <div className="test-segment-answer-options flex-row">
                <span className="test-segment-answer-option cabin">No</span>
                <Switch
                  size="default"
                  onChange={(e) => {
                    setBodyPain(e);
                    setBodyPainValueDisabled(!e);
                  }}
                />
                <span className="test-segment-answer-option cabin">Yes</span>
              </div>
            </div>
            <div
              className={`test-segment-question flex-column ${
                isBodyPainValueDisabled ? "opaque" : ""
              }`}
            >
              <span className="test-segment-question-text">
                Please rate the pain from 1 - 3
              </span>
              <br />
              <br />
              <div className="slider-container">
                <Slider
                  disabled={isBodyPainValueDisabled}
                  marks={PainScaleMarks}
                  step={null}
                  onChange={(e) => {
                    setBodyPainValue(e);
                  }}
                />
              </div>
            </div>
            <div className="test-segment-question flex-column">
              <span className="test-segment-question-text">
                Do you have a runny nose?
              </span>
              <br />
              <br />
              <div className="test-segment-answer-options flex-row">
                <span className="test-segment-answer-option cabin">No</span>
                <Switch
                  size="default"
                  onChange={(e) => {
                    setRunnyNose(e);
                  }}
                />
                <span className="test-segment-answer-option cabin">Yes</span>
              </div>
            </div>
            <div className="test-segment-actions flex-row">
              <button
                className="test-segment-action cabin"
                onClick={() => setShowingScreen(showingScreen - 1)}
              >
                Back
              </button>
              <button
                className="test-segment-action cabin"
                onClick={() => setShowingScreen(showingScreen + 1)}
              >
                Continue
              </button>
            </div>
          </motion.div>
          <motion.div
            className="test-segment-container bg-white flex-column"
            initial={{
              opacity: 0,
              display: "flex",
            }}
            animate={{
              opacity: showingScreen === 4 ? 1 : 0,
              display: showingScreen === 4 ? "flex" : "none",
            }}
          >
            <CancelTestButton />

            <div className="test-segment-question flex-column">
              <span className="test-segment-question-text">
                Do you have a headache? <br />
                <br />
              </span>
              <br />
              <br />
              <div className="test-segment-answer-options flex-row">
                <span className="test-segment-answer-option cabin">No</span>
                <Switch
                  size="default"
                  onChange={(e) => {
                    setHeadache(e);
                  }}
                />
                <span className="test-segment-answer-option cabin">Yes</span>
              </div>
            </div>

            <div className="test-segment-question flex-column">
              <span className="test-segment-question-text">
                Do you have difficulty in breathing?
              </span>
              <br />
              <br />
              <div className="test-segment-answer-options flex-row">
                <span className="test-segment-answer-option cabin">No</span>
                <Switch
                  size="default"
                  onChange={(e) => {
                    setBreathingDiff(e);
                    setBreathingDiffValueDisabled(!e);
                  }}
                />
                <span className="test-segment-answer-option cabin">Yes</span>
              </div>
            </div>
            <div
              className={`test-segment-question flex-column ${
                isBreathingDiffValueDisabled ? "opaque" : ""
              }`}
            >
              <span className="test-segment-question-text">
                Please rate your breathing difficulty
              </span>
              <br />
              <br />
              <div className="slider-container">
                <Slider
                  disabled={isBreathingDiffValueDisabled}
                  marks={PainScaleMarks}
                  step={null}
                  onChange={(e) => {
                    setBreathingDiffValue(e);
                  }}
                />
              </div>
            </div>
            <div className="test-segment-actions flex-row">
              <button
                className="test-segment-action cabin"
                onClick={() => setShowingScreen(showingScreen - 1)}
              >
                Back
              </button>
              <button
                className="test-segment-action cabin"
                onClick={() => {
                  showSubmitModal();
                }}
              >
                Finish
              </button>
            </div>
            <Modal
              visible={isSubmitModalVisible}
              onOk={handleSubmitSucess}
              onCancel={handleSubmitCancel}
              centered
            >
              <h3 className="cabin">
                Are you sure you want to submit this test?
              </h3>
            </Modal>
          </motion.div>
        </div>

        {/* Modal background to show while processing test results */}
        <ModalBlur visible={testModal} />
        <motion.div
          className="processing-results flex-row"
          initial={{
            display: "none",
            opacity: 0,
          }}
          animate={{
            display: testModal ? "flex" : "none",
            opacity: testModal ? 1 : 0,
          }}
          transition={{
            duration: 0.4,
          }}
        >
          <span className="processing-text cabin">{processingResultText}</span>
          <span className="processing-icon">
            <i className="fas fa-spinner fa-spin"></i>
          </span>
        </motion.div>
      </Container>

      <NewTestResults />
    </>
  );
}
