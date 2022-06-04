import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import * as THREE from "three";
import { Container } from "@mui/material";
import "./Assets/CSS/All.css";
import EarthImage from "./Assets/IMG/earth5.jpg";
import FlowDiagram from "./Assets/IMG/Home_Images/Flow.svg";
import ML5 from "./Assets/IMG/Home_Images/ML5.svg";
import Logo from "./Assets/IMG/Logo.svg";
import Avatar1 from "./Assets/IMG/Avatars/avatar1.jpg";
import Avatar2 from "./Assets/IMG/Avatars/avatar2.jpg";
import Avatar3 from "./Assets/IMG/Avatars/avatar3.jpg";
import Avatar4 from "./Assets/IMG/Avatars/avatar4.jpg";
import DeveloperImage from "./Assets/IMG/devimage.svg";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
export default function App() {
  const [numberOfSlides, updateNumberOfSlides] = useState(3);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [submittingForm, setSubmittingForm] = useState(false);

  //Initialize Keen Slider
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slidesPerView: numberOfSlides,
    mode: "free",
    spacing: 15,
    autoAdjustSlidesPerView: 2,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });
  const globeRef = useRef();
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(62, 1, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
  });
  renderer.setClearColor(0xffffff, 1);

  renderer.setSize(300, 300);
  useEffect(() => {
    globeRef.current.appendChild(renderer.domElement);
    if (window.innerWidth < 1000 && window.innerWidth > 600) {
      updateNumberOfSlides(2);
    } else if (window.innerWidth <= 600) {
      updateNumberOfSlides(1);
    }
  }, []);
  renderer.setPixelRatio(window.devicePixelRatio);

  // create a sphere
  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(5, 50, 50),
    new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(EarthImage),
    })
  );
  var num = 0;
  setInterval(() => {
    sphere.rotateY(num);
    num += 0.000008;
  }, 20);
  setInterval(() => {
    num = 0;
  }, 6000);
  scene.add(sphere);
  camera.position.z = 10;
  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();

  return (
    <>
      <div className="home-container">
        <Container maxWidth="lg">
          <div className="flex-row home-jumbo">
            <div className="flex-column">
              <span className="home-jumbo-text cabin">
                COVID-19 Is Rampaging The World <br /> at an Alarming Rate
              </span>
              <Link
                to="/new"
                className="get-tested-now-btn text-darker-blue cabin bg-white"
              >
                Get Tested now
              </Link>
            </div>
            <div id="globe" ref={globeRef}></div>
          </div>
          <div className="flow-diagram">
            <span className="home-header cabin text-darker-blue">
              How It Works
            </span>
            <br />
            <br />
            <img src={FlowDiagram} alt="" />
          </div>
          <Container maxWidth="md">
            <div className="copod-properties flex-row">
              <div className="copod-property flex-column bg-white">
                <div className="copod-property-top text-darker-blue source-sans">
                  98%
                </div>
                <div className="copod-property-bottom cabin text-gray">
                  Model Accuracy
                </div>
              </div>
              <div className="copod-property flex-column bg-white">
                <div className="copod-property-top text-darker-blue source-sans">
                  <img src={ML5} />
                </div>
                <div className="copod-property-bottom cabin text-gray">
                  Powered by ML5.JS
                </div>
              </div>
              <div className="copod-property flex-column bg-white">
                <div className="copod-property-top text-darker-blue source-sans">
                  2500+
                </div>
                <div className="copod-property-bottom cabin text-gray">
                  Recorded COVID Data
                </div>
              </div>
            </div>
          </Container>
          <Container maxWidth="lg">
            <div className="copod-about flex-row">
              <img src={Logo} alt="" />
              <hr className="copod-about-hr" />
              <div className="copod-about-right flex-column">
                <div className="copod-about-text cabin">
                  Built on Ml5.JS, COPOD was trained and tested using public
                  data from the Pabna Sadar Hospital in Bangladesh. Data
                  included 2,575 patient symptoms. Using ML5’s Neural Network
                  developing features, I built COPODs model which has shown a
                  95% success rate at predicting if a user is positive with
                  COVID 19 by collecting only minimal data
                </div>
                <Link
                  to="/new"
                  className="get-tested-now-btn text-darker-blue cabin bg-white"
                >
                  Get Tested now
                </Link>
              </div>
            </div>

            <div className="testimonial-section">
              <center>
                <span className="home-header cabin text-darker-blue">
                  Testimonials
                </span>
              </center>
              <div ref={sliderRef} className="testimonials flex-row">
                <div className="testimonial keen-slider__slide  flex-column bg-white">
                  <img src={Avatar1} alt="" />
                  <span className="testifier text-darker-blue cabin">
                    Sansa Stark
                  </span>
                  <hr />
                  <span className="testimony cabin">
                    Lorem Ipsum some content goes here that shows the customer
                    loved the product or somethn
                  </span>
                </div>
                <div className="testimonial keen-slider__slide flex-column bg-white">
                  <img src={Avatar2} alt="" />
                  <span className="testifier text-darker-blue cabin">
                    Jon Snow
                  </span>
                  <hr />
                  <span className="testimony cabin">
                    Lorem Ipsum some content goes here that shows the customer
                    loved the product or somethn
                  </span>
                </div>
                <div className="testimonial keen-slider__slide flex-column bg-white">
                  <img src={Avatar3} alt="" />
                  <span className="testifier text-darker-blue cabin">
                    Roose Bolton
                  </span>
                  <hr />
                  <span className="testimony cabin">
                    Lorem Ipsum some content goes here that shows the customer
                    loved the product or somethn
                  </span>
                </div>
                <div className="testimonial keen-slider__slide flex-column bg-white">
                  <img src={Avatar4} alt="" />
                  <span className="testifier text-darker-blue cabin">
                    Tyrion Lannister
                  </span>
                  <hr />
                  <span className="testimony cabin">
                    Lorem Ipsum some content goes here that shows the customer
                    loved the product or somethn
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </Container>
        <div className="contact-developer-section">
          <center>
            <span className="home-header">Contact Developer</span>
          </center>
          <Container maxWidth="md">
            <div className="flex-row contact-developer-container">
              <img src={DeveloperImage} alt="" />
              <div className="flex-column contact-developer-form">
                <input
                  className="auth-input auth-input-full source-sans text-gray"
                  placeholder="Name"
                  spellCheck="false"
                ></input>
                <input
                  className="auth-input auth-input-full source-sans text-gray"
                  placeholder="Email"
                  spellCheck="false"
                ></input>
                <textarea
                  className="auth-input auth-input-full source-sans text-gray contact-message"
                  placeholder="Message"
                  spellCheck="false"
                />
                <button className="auth-btn bg-dark-blue text-white source-sans">
                  Submit Message
                  {submittingForm && (
                    <>
                      &nbsp;&nbsp;&nbsp;
                      <i className="fad fa-spinner-third fa-spin"></i>
                    </>
                  )}
                </button>
              </div>
            </div>
          </Container>
        </div>
        <br />
        <br />
        <br />
      </div>
    </>
  );
}
// const baseURL = "https://copod-api.herokuapp.com";
const baseURL = "http://127.0.0.1:8080";
export { baseURL };
