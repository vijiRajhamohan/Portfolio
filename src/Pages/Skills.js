import React from "react";
import "./Skills.css";
import Nav from "../Components/Nav";
function Skills({ themeToggler }) {
  return (
    <div>
      <Nav themeToggler={themeToggler} />
    <div className="inner" >
        <br />
      <div >
          <h3 style={{ textAlign: "center", fontWeight: "bold" ,}}>
         My skills
        </h3>
      </div>
      <br/ >
      <div
        
          style={{
           
            borderRadius:"30px",marginLeft:"15%",marginRight:"15%"
          }}
        >
      <div className="content" style={{marginTop:"5%"}}>
        
          <div className="skill-box">
            <div className="skill-title">
              <div className="img">
                <img
                  src="./image/html.jpeg"
                  className="skill-icon"
                  style={{ height: "100px", width: "100px", borderRadius: "25px" }}
                />
              </div>
              <br />
              <h4>HTML</h4>
            </div>
          </div>
        
        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
              <img
                src="./image/c221f800-2674-11eb-9782-d802dc0e8cbb.png"
                className="skill-icon"
                style={{ height: "100px", width: "100px" }}
              />
            </div>
            <br />
            <h4>CSS</h4>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
              <img
                src="./image/bootstrap.jpeg"
                className="skill-icon"
                style={{ height: "100px", width: "100px" }}
              />
            </div>
            <br />
            <h4>Bootstrap</h4>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
              <img
                src="./image/javascript-logo-transparent-logo-javascript-images-3.png"
                className="skill-icon"
                style={{ height: "100px", width: "150px" }}
              />
            </div>
            <br />
            <h4>JavaScript</h4>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
              <img
                src="./image/react.png"
                className="skill-icon"
                style={{ height: "100px" }}
              />
            </div>
            <br />
            <h4>React</h4>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
              <img
                src="./image/node-js-emblem-vector-28501403.jpg"
                className="skill-icon"
                style={{ height: "100px" }}
              />
            </div>
            <br />
            <h4>Node js</h4>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
              <img
                src="./image/express.jpeg"
                className="skill-icon"
                style={{ height: "50px" }}
              />
            </div>
            <br />
            <h4>Express js</h4>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
              <img
                src="./image/images (1).png"
                className="skill-icon"
                style={{ height: "100px" }}
              />
            </div>
            <br />
            <h4>My Sql</h4>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
              <img
                src="./image/MongoDB-Emblem.jpg"
                className="skill-icon"
                style={{ height: "80px" }}
              />
            </div>
            <br />
            <h4>MongoDB</h4>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
              <img
                src="./image/figma.jpeg"
                className="skill-icon"
                style={{ height: "100px" }}
              />
            </div>
            <br />
            <h4>Figma</h4>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
              <img
                src="./image/AWS-logo-2.jpg"
                className="skill-icon"
                style={{ height: "100px", width: "120px" }}
              />
            </div>
            <br />
            <h4>AWS</h4>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
              <img
                src="./image/Postman-featured-2100x1200.jpg"
                className="skill-icon"
                style={{ height: "100px", width: "100px" }}
              />
            </div>
            <br />
            <h4>Postman</h4>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
              <img
                src="./image/netlify.png"
                style={{ height: "65px", width: "60px" }}
                className="skill-icon"
              />
            </div>
            <br />
            <h4>Netlify</h4>
          </div>
        </div>
          <div className="skill-box">
            <div className="skill-title">
              <div className="img">
                <img
                  src="./image/heroku.jpeg"
                  style={{ height: "65px", width: "60px" }}
                  className="skill-icon"
                />
              </div>
              <br />
              <h4>Heroku</h4>
            </div>
          </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
              <img
                src="./image/github-logo.jpg"
                className="skill-icon"
                style={{ height: "80px" }}
              />
            </div>
            <br />
            <h4>GitHub</h4>
          </div>
        </div>

      </div>
        </div>
    </div>
    </div>
  );
}

export default Skills;
