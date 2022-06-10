import React from "react";
import projectOne from "../../Images/projectOne.PNG";
import projectTwo from "../../Images/projectTwo.PNG";
import projectThree from "../../Images/projectThree.PNG";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <h2 className="text-center text-4xl  font-semibold my-5 lg:my-10">
        Projects Overview
      </h2>
      <div className=" container mx-auto grid grid-cols-1 gap-4">
        <div>
          <div class="card lg:card-side bg-base-100  shadow-xl">
            <div class="grid grid-cols-2">
              <figure>
                <img src={projectOne} alt="Album" />
              </figure>
              <div class="card-body">
                <h2 class="text-center text-2xl">Computer Parts Corner</h2>
                <span> A Manufacturer site </span>
                <div class="card-actions justify-center">
                  <button class="btn-sm rounded-box btn-primary">
                    <Link to="/pOne">See Details </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div class="card lg:card-side bg-base-100 shadow-xl">
              <div class="grid grid-cols-2">
                <figure>
                  <img src={projectTwo} alt="Album" />
                </figure>
                <div class="card-body">
                  <h2 class="text-center text-2xl"> Smart Store</h2>
                  <span>A wirehouse Website</span>
                  <div class="card-actions justify-center">
                    <button class="btn-sm rounded-box btn-primary">
                      <Link to="/pTwo">See Details </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div class="card lg:card-side bg-base-100 shadow-xl">
              <div class="grid grid-cols-2">
                <figure>
                  <img src={projectThree} alt="Album" />
                </figure>
                <div class="card-body">
                  <h2 class="text-center text-2xl">DMJH Health Care</h2>
                  <span> A Single Doctor Service Page</span>
                  <div class="card-actions justify-center">
                    <button class="btn-sm rounded-box btn-primary">
                      <Link to="/pThree">See Details </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
