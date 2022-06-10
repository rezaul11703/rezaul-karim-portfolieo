import React from "react";
import project1 from "../../Images/projectOne.PNG";
import project2 from "../../Images/projectOne-2.PNG";
import project3 from "../../Images/projectOne-3.PNG";

const DetailsOne = () => {
  return (
    <>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content grid grid-cols-1 lg:grid-cols-2">
          <div class=" w-full">
            <div id="slide1" class="carousel-item relative w-3/4 mx-auto py-2">
              <img src={project3} class="w-90" />
              {/* <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" class="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" class="btn btn-circle">
                  ❯
                </a>
              </div> */}
            </div>
            <div id="slide2" class="carousel-item relative w-3/4 mx-auto py-2">
              <img src={project2} class="w-90" />
              {/* <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" class="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" class="btn btn-circle">
                  ❯
                </a>
              </div> */}
            </div>
            <div id="slide3" class="carousel-item relative w-3/4 mx-auto py-2">
              <img src={project1} class="w-90" />
              {/* <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" class="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" class="btn btn-circle">
                  ❯
                </a>
              </div> */}
            </div>
          </div>

          <div>
            <h1 class="text-4xl text-center font-bold">
              Computer Parts Corner
            </h1>
            <p class="py-6">
              <span className="text-2xl block text-left font-semibold">
                {" "}
                View Project Summary
              </span>{" "}
              <div className="text-left m-3">
                <li>
                  Visitors can see the items, business summary, and reviews on
                  the home page
                </li>{" "}
                <li>
                  {" "}
                  Customer can buy/order products by signing up / logging in to
                  the site and have to order below the available quantity and
                  above the minimum ordered quantity
                </li>{" "}
                <li>Dashboard has a different view for the user and admin.</li>
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
                <li>React</li>
                <li>Hook Form</li>
                <li>React Query</li>
                <li>React Toastify</li>
                <li>Express</li>
                <li>MongoDB</li>
              </div>
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <button class="btn btn-primary">
                <a href="https://computer-parts-solution-80c80.web.app/">
                  Live Site
                </a>
              </button>
              <button class="btn btn-primary">
                <a href="https://github.com/rezaul11703/manufacturer-webpage-client-side">
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

export default DetailsOne;
