import React from "react";
import project1 from "../../Images/projectThree.PNG";
import project2 from "../../Images/projectThree-2.PNG";
import project3 from "../../Images/projectThree-3.PNG";

const DetailsThree = () => {
  return (
    <>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content grid grid-cols-1 lg:grid-cols-2">
          <div class=" w-full">
            <div id="slide1" class="carousel-item relative w-3/4 mx-auto py-2">
              <img src={project3} class="w-90" />
            </div>
            <div id="slide2" class="carousel-item relative w-3/4 mx-auto py-2">
              <img src={project2} class="w-90" />
            </div>
            <div id="slide3" class="carousel-item relative w-3/4 mx-auto py-2">
              <img src={project1} class="w-90" />
            </div>
          </div>

          <div>
            <h1 class="text-4xl text-center font-bold">
              DMGHS- Docter Consultancy Point
            </h1>
            <p class="py-6">
              <span className="text-2xl block text-left font-semibold">
                {" "}
                View Project Summary
              </span>{" "}
              <div className="text-left m-3">
                <li>
                  Users or Visitor can see the doctor's info and appointment
                  system
                </li>{" "}
                <li>
                  {" "}
                  Users can book a treatment from the page by giving their
                  information
                </li>{" "}
                <li>
                  Users must have to log in/register to complete the booking
                </li>
              </div>
              <span className="text-2xl block text-left font-semibold">
                {" "}
                Technology Used
              </span>
              <div className="text-left m-3">
                <li>React</li>
                <li>React Bootstrap</li>
                <li>Firebase</li>
                <li>React Route</li>
                <li>React Toastify</li>
              </div>
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <button class="btn btn-primary">
                <a href="https://dmjh-health-point.web.app/">Live Site</a>
              </button>
              <button class="btn btn-primary">
                <a href="https://github.com/rezaul11703/single-doctor-site">
                  Git client
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsThree;
