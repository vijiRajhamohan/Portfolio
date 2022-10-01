import { Button } from "bootstrap";
import React from "react";

function Home() {
  return (
    <div className="container text-center" style={{ backgroundColor: "white" }}>
      <div className="row">
        <div className="col-sm-6 col-md-5 " style={{ marginTop: "15%" }}>
          <h3 style={{ color: "darkred" }}>
            Hi ,I am <b>Viji Rajhamohan</b>
          </h3>
          <p>
            <i>
              <b>Full Stack Developer</b>
            </i>
          </p>
          <a href="./image/Resume.pdf" target={"_blank"}>
            <button className="btn btn-success">Resume</button>
          </a>
        </div>

        <div
          className="h col-sm-2 col-md-6 p-5 mt-2"
          style={{ marginRight: "5%" }}
        >
          <img src="./image/46207-programmer-1.gif" height={400} width={550} />
        </div>
      </div>
    </div>
  );
}

export default Home;
