import React from "react";
import project1 from "../../Images/projectTwo.PNG";
import project2 from "../../Images/projectTwo-2.PNG";
import project3 from "../../Images/projectTwo-3.PNG";

const DetailsTwo = () => {
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
              Smart Inventory Solution
            </h1>
            <p class="py-6">
              <span className="text-2xl block text-left font-semibold">
                {" "}
                View Project Summary
              </span>{" "}
              <div className="text-left m-3">
                <li>
                  Users/Visitors can see all types of Items, and category wise
                  items on the home page
                </li>{" "}
                <li>
                  {" "}
                  Users can update or delete products by logging in / signing up
                  to the site
                </li>{" "}
                <li>
                  Users can also add products and it will show in the products
                  section
                </li>
              </div>
              <span className="text-2xl block text-left font-semibold">
                {" "}
                Technology Used
              </span>
              <div className="text-left m-3">
                <li>React</li>
                <li>React Bootstrap</li>
                <li>Daisy UI</li>
                <li>Firebase</li>
                <li>Hook Form</li>
                <li>React Query</li>
                <li>React Toastify</li>
                <li>Express</li>
                <li>MongoDB</li>
              </div>
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <button class="btn btn-primary">
                <a href="https://smart-inventory-solution.web.app/">
                  Live Site
                </a>
              </button>
              <button class="btn btn-primary">
                <a href="https://github.com/rezaul11703/wire-house-mangement-client-side">
                  Git client
                </a>
              </button>
              <button class="btn btn-primary">
                <a href="https://github.com/rezaul11703/wire-house-management-server-site">
                  Git Server
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsTwo;
