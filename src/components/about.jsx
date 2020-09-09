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
          <div className="col-lg-6">
            <a href="#" className="photo">
              <h1>Akash Agarwal</h1>

              <img src="images/me.jpeg" />
            </a>
          </div>

          <div className="col-lg-6">
            <p>
              I am a Full Stack Developer and UI/UX designer.I am very passionate about Mobile application and Web development
              and I love to code 

            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
export default About;
