import React from "react";
function SkillBox(props) {
  return (
    <div className="col-lg-2 col-md-3 col-sm-4 skill-img ">
    <img class="skills" src={props.img} />
  {/* <span className="skill">{props.skillName}</span> */}
  </div>
  );
}

export default SkillBox;
