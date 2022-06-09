import React from "react";
import { Link } from "react-router-dom";
import Portfolieo from "../../Images/PortfolieoPic.png";

const Banner = () => {
  return (
    <div>
      <div className="hero max-h-screen">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col justify-center align-center p-5">
              <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
              <p class="my-5">
                This is Md. Rezaul Karim . I am a Junior Frontend Developer. You
                can download my resume From here
              </p>
              <button class=" w-80  mx-auto btn btn-primary">
                <a
                  href="https://drive.google.com/file/d/13isVuShXiDTj9l34dX9Rr6vzFIN4qw_T/view?usp=sharing"
                  target="_blank"
                >
                  {" "}
                  Download Resume
                </a>
              </button>
            </div>
            <div>
              {" "}
              <img src={Portfolieo} className="w-3/4 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
