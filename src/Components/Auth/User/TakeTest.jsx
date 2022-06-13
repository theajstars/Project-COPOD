import React, { useState, useEffect } from "react";
import ml5 from "ml5";
import { Navigate } from "react-router-dom";
import { Container } from "@mui/material";
import Cookies from "js-cookie";
import {
  Select,
  Radio,
  Slider,
  Switch,
  Popconfirm,
  notification,
  Checkbox,
  message,
  Modal,
  DatePicker,
  Input,
  Button,
} from "antd";
import { motion } from "framer-motion";
//Import countries.json for users location entry
import { countries } from "../../../Assets/JSON/JsonExports";

import ModalBlur from "../../ModalBlur";
import NewTestResults from "./NewTestResults";
import { baseURL } from "../../../App";
import axios from "axios";

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
  const token = Cookies.get("ud");
  const [logout, setLogout] = useState(false);
  //Check if user is signed in
  useEffect(() => {
    document.title = "New Test - COPOD";
    // if (!token) {
    //   setLogout(true);
    //   console.log("User is not logged in!");
    // } else {
    //   //Token exists so check if token is valid
    //   axios
    //     .get(`${baseURL}/isUserAuth`, { headers: { "x-access-token": token } })
    //     .then((res) => {
    //       if (!res.data.auth) {
    //         //Token is not valid so logout user
    //         setLogout(true);
    //       }
    //     });
    // }
  }, []);
  const [countriesArray, setCountriesArray] = useState(countries);
  const [showingScreen, setShowingScreen] = useState(1);
  const [testModal, setTestModal] = useState(false);
  const [location, setLocation] = useState("");
  const [age, setAge] = useState(18);
  const [gender, setGender] = useState(1);
  const [fever, setFever] = useState(false);
  const [soreThroat, setSoreThroat] = useState(false);
  const [cough, setCough] = useState(false);

  const [bodyPain, setBodyPain] = useState(false);

  const [runnyNose, setRunnyNose] = useState(false);
  const [heartAttack, setHeartAttack] = useState(false);
  const [headAche, setHeadache] = useState(false);
  const [breathingDiff, setBreathingDiff] = useState(false);

  const [medicalConditions, setMedicalConditions] = useState({
    highBloodPressure: false,
    heartDiseases: false,
    diabetes: false,
  });
  const [breathingDiffValue, setBreathingDiffValue] = useState(1);
  const [isBreathingDiffValueDisabled, setBreathingDiffValueDisabled] =
    useState(true);

  const [isVaccinated, setVaccinated] = useState(false);
  const [vaccineType, setVaccineType] = useState(1);
  const [vaccinationDate, setVaccinationDate] = useState("2022-06-01");

  const [anosmia, setAnosmia] = useState(false);
  const [lossOfTaste, setLossOfTaste] = useState(false);
  const [fatigue, setFatigue] = useState(false);

  const [appetite, setAppetite] = useState(false);
  const [difficultSwallowing, setDifficultSwallowing] = useState(false);
  const [sleep, setSleep] = useState(50);

  const [diarrhea, setDiarrhea] = useState(false);
  const [testObject, setTestObject] = useState({});

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
      debug: false,
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

      setTestObject(input);
      nn.classify(input, (error, testResult) => {
        if (error) {
          console.error("An error occurred: ", error);
        } else {
          console.log(testResult);
          var score = 0.0;
          const getNumberOfVaccineDays = () => {
            const d = new Date(vaccinationDate);
            const today = new Date(Date.now());
            const difference = today - d;
            const daysBetween = Math.floor(difference / 1000 / 60 / 60 / 24);
            return daysBetween;
          };
          // Add bias based on other factors not in the dataset
          if (isVaccinated) {
            //User has been vaccinated
            const daysSinceVaccination = getNumberOfVaccineDays();
            if (daysSinceVaccination > 21) {
              // Since vaccines require at least 2 - 4 weeks to become effective,
              // any vaccine taken less than 3  weeks ago should possibly be slighly ineffective, I believe so at least!
              score = +2.5;
            }
          } else {
            score = -1;
          }
          if (bodyPain) {
            score = -1;
          }

          if (
            (runnyNose && cough) ||
            (runnyNose && soreThroat && cough) ||
            (soreThroat && cough)
          ) {
            score = -1.5;
          }

          if (heartAttack) {
            score = -2;
          }

          if (breathingDiff) {
            if (breathingDiffValue >= 50) {
              score = -1;
            } else {
              score = -0.5;
            }
          }

          if (diarrhea) {
            score = -1;
          }

          const sensesRelatedCount = 0;
          if (anosmia === true) {
            sensesRelatedCount += 1;
          }
          if (lossOfTaste === true) {
            sensesRelatedCount += 1;
          }
          if (fatigue === true) {
            sensesRelatedCount += 1;
          }
          if (difficultSwallowing === true) {
            sensesRelatedCount += 1;
          }
          if (appetite === true) {
            sensesRelatedCount += 1;
          }

          if (sensesRelatedCount >= 3) {
            score = -3;
          } else if (sensesRelatedCount >= 1 && sensesRelatedCount < 3) {
            score = -1.5;
          }

          if (sleep === 50) {
            score = -0.3;
          }
          if (sleep === 100) {
            score = -0.5;
          }
          if (
            medicalConditions.highBloodPressure ||
            medicalConditions.heartDiseases ||
            medicalConditions.diabetes
          ) {
            score = +1;
          }
          if (heartAttack) {
            score = +0.7;
          }
          console.log(score);
          var tempResult = testResult;
          testResult.map((res) => {
            if (res.label === "positive" && score < 0) {
              const thisBias = res.confidence * Math.abs(score);
              console.log("This Bias: ", thisBias);
              // res.confidence = thisBias + res.confidence;
              tempResult = tempResult.filter((e) => e.label !== "positive");
              tempResult.push({
                positive: thisBias + res.positive,
                label: "positive",
                confidence: thisBias + res.positive,
              });
              console.log(res.confidence);
            } else if (res.label === "negative" && score > 0) {
              const thisBias = res.confidence * Math.abs(score);
              console.log("This Bias: ", thisBias);
              // res.confidence = thisBias + res.confidence;
              tempResult = tempResult.filter((e) => e.label !== "negative");
              tempResult.push({
                negative: this.bias + res.negative,
                label: "negative",
                confidence: thisBias + res.negative,
              });
            }
          });
          console.log(tempResult);

          setTestResults(tempResult);
        }
      });
    });
  };
  const [showResults, setShowResults] = useState(false);
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
      }, 1600);
      setTimeout(() => {
        changeProcessingText(2);
      }, 3000);
      setTimeout(() => {
        changeProcessingText(3);
      }, 4500);
      setTimeout(() => {
        changeProcessingText(4);
        setShowResults(true);
        setTestModal(false);
      }, 6000);
    }
  }, [testModal]);

  return (
    <>
      {logout && <Navigate to="/auth" />}

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
                e.g Neck, Muscle, Waist aches.
              </span>
              <br />
              <br />
              <div className="test-segment-answer-options flex-row">
                <span className="test-segment-answer-option cabin">No</span>
                <Switch
                  size="default"
                  onChange={(e) => {
                    setBodyPain(e);
                  }}
                />
                <span className="test-segment-answer-option cabin">Yes</span>
              </div>
            </div>
            <div className="test-segment-question flex-column">
              <span className="test-segment-question-text">
                Do you have any of the following diseases? <br />
              </span>
              <br />
              <br />
              <div className="flex-row">
                <Checkbox
                  value={medicalConditions.highBloodPressure}
                  checked={medicalConditions.highBloodPressure}
                  onChange={(e) => {
                    setMedicalConditions((medicalConditions) => ({
                      ...medicalConditions,
                      ...{ highBloodPressure: e.target.checked },
                    }));
                  }}
                >
                  High Blood Pressure
                </Checkbox>
                <Checkbox
                  value={medicalConditions.heartDiseases}
                  checked={medicalConditions.heartDiseases}
                  onChange={(e) => {
                    setMedicalConditions((medicalConditions) => ({
                      ...medicalConditions,
                      ...{ heartDiseases: e.target.checked },
                    }));
                  }}
                >
                  Heart Diseases
                </Checkbox>
                <Checkbox
                  value={medicalConditions.diabetes}
                  checked={medicalConditions.diabetes}
                  onChange={(e) => {
                    setMedicalConditions((medicalConditions) => ({
                      ...medicalConditions,
                      ...{ diabetes: e.target.checked },
                    }));
                  }}
                >
                  Diabetes
                </Checkbox>
                <Button
                  onClick={() => {
                    setMedicalConditions({
                      highBloodPressure: false,
                      heartDiseases: false,
                      diabetes: false,
                    });
                  }}
                >
                  Clear
                </Button>
              </div>
            </div>
            <div className="test-segment-question flex-column">
              <span className="test-segment-question-text">
                Have you ever had a heart attack?
              </span>
              <br />
              <br />
              <div className="test-segment-answer-options flex-row">
                <span className="test-segment-answer-option cabin">No</span>
                <Switch
                  size="default"
                  onChange={(e) => {
                    setHeartAttack(e);
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
                Have you been vaccinated? <br />
                <br />
              </span>
              <br />
              <br />
              <div className="test-segment-answer-options flex-row">
                <span className="test-segment-answer-option cabin">No</span>
                <Switch
                  size="default"
                  onChange={(e) => {
                    setVaccinated(e);
                  }}
                  checked={isVaccinated}
                />
                <span className="test-segment-answer-option cabin">Yes</span>
              </div>
            </div>
            <div
              className={`test-segment-question flex-column ${
                !isVaccinated ? "opaque" : ""
              }`}
            >
              <span className="test-segment-question-text">
                When were you vaccinated? <br />
                <br />
              </span>
              <br />
              <br />

              <DatePicker
                disabled={!isVaccinated}
                onChange={(date, dateString) => {
                  setVaccinationDate(dateString);
                }}
              />
            </div>
            <div
              className={`test-segment-question flex-column ${
                !isVaccinated ? "opaque" : ""
              }`}
            >
              <span className="test-segment-question-text">
                What kind of COVID vaccine did you get? <br />
                <br />
              </span>
              <br />
              <br />
              <Radio.Group
                disabled={!isVaccinated}
                onChange={(e) => setVaccineType(e.target.value)}
                value={vaccineType}
              >
                <Radio.Button value={1}>Single Dose</Radio.Button>
                <Radio.Button value={2}>Two Dose</Radio.Button>
              </Radio.Group>
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
              opacity: showingScreen === 5 ? 1 : 0,
              display: showingScreen === 5 ? "flex" : "none",
            }}
          >
            <CancelTestButton />
            <div className="test-segment-question flex-column">
              <span className="test-segment-question-text">
                Are you experiencing loss of smell (Anosmia)?
              </span>
              <br />
              <br />
              <div className="test-segment-answer-options flex-row">
                <span className="test-segment-answer-option cabin">No</span>
                <Switch
                  size="default"
                  onChange={(e) => {
                    setAnosmia(e);
                  }}
                />
                <span className="test-segment-answer-option cabin">Yes</span>
              </div>
            </div>
            <div className="test-segment-question flex-column">
              <span className="test-segment-question-text">
                Are you experiencing loss of taste?
              </span>
              <br />
              <br />
              <div className="test-segment-answer-options flex-row">
                <span className="test-segment-answer-option cabin">No</span>
                <Switch
                  size="default"
                  onChange={(e) => {
                    setLossOfTaste(e);
                  }}
                />
                <span className="test-segment-answer-option cabin">Yes</span>
              </div>
            </div>
            <div className="test-segment-question flex-column">
              <span className="test-segment-question-text">
                Are you experiencing tiredness (Fatigue)?
              </span>
              <br />
              <br />
              <div className="test-segment-answer-options flex-row">
                <span className="test-segment-answer-option cabin">No</span>
                <Switch
                  size="default"
                  onChange={(e) => {
                    setFatigue(e);
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
              opacity: showingScreen === 6 ? 1 : 0,
              display: showingScreen === 6 ? "flex" : "none",
            }}
          >
            <CancelTestButton />
            <div className="test-segment-question flex-column">
              <span className="test-segment-question-text">
                Are you losing appetite? <br />
                <br />
              </span>
              <br />
              <br />
              <div className="test-segment-answer-options flex-row">
                <span className="test-segment-answer-option cabin">No</span>
                <Switch
                  size="default"
                  onChange={(e) => {
                    setAppetite(e);
                  }}
                />
                <span className="test-segment-answer-option cabin">Yes</span>
              </div>
            </div>
            <div className="test-segment-question flex-column">
              <span className="test-segment-question-text">
                Do you have difficulty in swallowing food? <br />
                <br />
              </span>
              <br />
              <br />
              <div className="test-segment-answer-options flex-row">
                <span className="test-segment-answer-option cabin">No</span>
                <Switch
                  size="default"
                  onChange={(e) => {
                    setDifficultSwallowing(e);
                  }}
                />
                <span className="test-segment-answer-option cabin">Yes</span>
              </div>
            </div>
            <div className="test-segment-question flex-column">
              <span className="test-segment-question-text">
                How well do you sleep at night?
              </span>
              <br />
              <br />
              <div className="slider-container">
                <Slider
                  marks={{
                    1: "Bad",
                    50: "Fair",
                    100: "Good",
                  }}
                  value={sleep}
                  step={null}
                  onChange={(e) => {
                    setSleep(e);
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
              opacity: showingScreen === 7 ? 1 : 0,
              display: showingScreen === 7 ? "flex" : "none",
            }}
          >
            <CancelTestButton />
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
            <div className="test-segment-question flex-column">
              <span className="test-segment-question-text">
                Are you experiencing Diarrhea?
              </span>
              <br />
              <br />
              <div className="test-segment-answer-options flex-row">
                <span className="test-segment-answer-option cabin">No</span>
                <Switch
                  size="default"
                  onChange={(e) => {
                    setDiarrhea(e);
                  }}
                />
                <span className="test-segment-answer-option cabin">Yes</span>
              </div>
            </div>
            <div className="test-segment-question flex-column">
              <span className="test-segment-question-text">
                How long have you been experiencing Diarrhea?
              </span>
              <br />
              <br />
              <Input
                size="large"
                style={{
                  width: "20%",
                }}
                placeholder="Input days"
              />
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
              opacity: showingScreen === 8 ? 1 : 0,
              display: showingScreen === 8 ? "flex" : "none",
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
      {showResults && (
        <NewTestResults result={testResults} testObject={testObject} />
      )}
    </>
  );
}
