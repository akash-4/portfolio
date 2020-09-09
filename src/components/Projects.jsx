import React from "react";
function Projects(props) {

  return (
    <div class="project_container">
  <div class="project_bg">
    <img src={props.img}></img>
  </div>
  <div class="project_info">
    <div class="project_title">
      <h4>{props.title}</h4>
    </div>
    <div class="project_desc">
      <p>{props.desc}<br/><br/>{props.tech}</p>
    </div>
    <div class="project_footer">
      <div class="project_date">
      </div>
      <div class="project_more">
        <a class="btn_more">
          Visit Project
        </a>
      </div>
    </div>
  
    </div>
</div>
  );
}

export default Projects;
