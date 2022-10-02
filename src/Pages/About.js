import React from "react";
import Nav from "../Components/Nav";

function About({themeToggler}) {
  return (
    <div>
      <Nav themeToggler={themeToggler} />
    <div><h3 style={{textAlign:"center",marginTop:"2%",fontWeight:"bold"}}>About Me</h3>
    <div className="row">
      <div className="col">
        <img
          src="./image/about-img.png"
          height="380"
          width={360}
          style={{ marginLeft: "13%", marginTop: "10%" }}
        />
      </div>
      <div
        className="col"
        style={{ paddingRight: "5%", marginTop: "10%" }}
      >
            <h3 style={{ color: "rgb(203, 6, 141)" }}>
          I'm <b>Viji Rajhamohan</b> ,
          <div>
            completed my M.Sc{" "}
            <span style={{ fontSize: "15px" }}>
              (Operation Research And Computer Application)
            </span>{" "}
            in <span > NIT-Trichy </span>
          </div>
        </h3>
        <p>
          <i><b> I am interested in Web development. I love spending time building
          production-ready web applications and also doing open source projects.
          My core interest lies mainly in web development but not restricted to
          it. I always love exploring and learning new technologies.I'm a
          flexible and organized team player. 
          <div>Excellent problem-solver and solution designer with multiple
              programming-languages, platforms, and enterprise applications.</div></b></i>
        </p>
      </div>
    </div>
    </div>
    </div>
  );
}

export default About;
