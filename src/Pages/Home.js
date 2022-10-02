import React from "react";
import Nav from "../Components/Nav";

function Home({ themeToggler }) {
  return (
    <div>
      <Nav themeToggler={themeToggler} />
      <div className="container text-center" style={{
        backgroundImage: 'url("./image/header_banner.jpg")',height:"460px",width:"75%",marginTop:"3%",overflow:"hidden"
              
}}>
        <div className="row">
          <div className="col-sm-6 col-md-5 " style={{ marginTop: "18%" }}>
            <h3 style={{ color: "white" }}>
              Hi ,I am <b>Viji Rajhamohan</b>
            </h3>
            <p>
              <i>
                <b style={{ color: "white" }}>Full Stack Developer</b>
              </i>
            </p>
            <a href="./image/Resume.pdf" target={"_blank"}>
              <button className="btn btn-success">Resume</button>
            </a>
          </div>

          <div
            className="col-sm-2 col-md-6 p-5 mt-2"
           
          >
            {/* <img
              className="pic"
              src="./image/46207-programmer-1.gif"
              height={400}
              width={450}
             
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
