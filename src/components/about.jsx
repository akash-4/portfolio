import React from "react";
function About(props) {
  return (
    <section id="about">
    <br/><br/>
    <div className="about">
         <div class="AboutHeading">
        <h1 class="Heading">About Me</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <a  className="photo">
              <h1>Akash</h1>

              <img src="images/me.jpeg" />
            </a>
          </div>

          <div className="col-md-6">
            <p><strong class="im">I'm a</strong><br/><strong>Application Developer | FullStack Developer | Flutter Developer | Robotics Enthusiast</strong>
             <br/><br/>Currently working as a <span class="yellow sd">Software Developer</span> at <span class="yellow sd"> Bottle Co.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
export default About;
