import React from "react";
import { ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div id="about">
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <h2 className="text-8xl font-extrabold"> About Me</h2>
          <div>
            <h1 class="text-5xl font-bold">Who am I ?</h1>
            <p class="py-6 px-3 lg: ml-10  text-left">
              I am a junior Web developer. I am from Natore, Bangladesh. I like
              to explore my project and love to finish it on time. Its my habbit
              to learn new technology and capable to complete my project in the
              following list skills. Please scroll down for viewing some of my
              projects and can{" "}
              <span>
                {" "}
                <Link to="/contact"> contact with</Link> me for any query
              </span>
            </p>
            <h1 class="text-5xl font-bold py-5">My skills </h1>
            <ul>
              <li className="flex justify-evenly">
                <p> Html </p>
                <progress class="progress my-auto w-56" value="85" max="100">
                  {" "}
                </progress>
                <span> 85%</span>
              </li>
              <li className="flex justify-evenly">
                <p> CSS </p>
                <progress class="progress my-auto w-56" value="85" max="100">
                  {" "}
                </progress>
                <span> 85%</span>
              </li>
              <li className="flex justify-evenly">
                <p> JavaScript </p>
                <progress class="progress my-auto w-56" value="85" max="100">
                  {" "}
                </progress>
                <span> 85%</span>
              </li>
              <li className="flex justify-evenly">
                <p> React</p>
                <progress class="progress my-auto w-56" value="80" max="100">
                  {" "}
                </progress>
                <span> 80%</span>
              </li>
              <li className="flex justify-evenly">
                <p> Express </p>
                <progress class="progress my-auto w-56" value="80" max="100">
                  {" "}
                </progress>
                <span> 80%</span>
              </li>
              <li className="flex justify-evenly">
                <p> MongoDB </p>
                <progress class="progress my-auto w-56" value="72" max="100">
                  {" "}
                </progress>
                <span> 72%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
