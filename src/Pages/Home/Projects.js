import React from "react";
import projectOne from "../../Images/projectOne.PNG";
import projectTwo from "../../Images/projectTwo.PNG";
import projectThree from "../../Images/projectThree.PNG";

const Projects = () => {
  return (
    <div>
      <h2 className="text-center text-2xl my-5 lg:my-10">
        My Projects summary
      </h2>
      <div className="grid  grid-cols-1 lg:grid-cols-3">
        <div>
          <div class="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img src={projectOne} alt="Album" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Project Name 1</h2>
              <p>Computer Parts Corner</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">See Details</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div class="card lg:card-side bg-base-100 shadow-xl">
              <figure>
                <img src={projectTwo} alt="Album" />
              </figure>
              <div class="card-body">
                <h2 class="card-title"> Project Name 2</h2>
                <p>Smart Point</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">See Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div class="card lg:card-side bg-base-100 shadow-xl">
              <figure>
                <img src={projectThree} alt="Album" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">Project Name 3</h2>
                <p>Simple Doctors Portal</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">See Details</button>
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
