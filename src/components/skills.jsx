import React from "react";
import SkillBox from "./SkillBox";
function Skills(props) {
  var a=["Flutter","Firebase","HTML","CSS","JS","mongoDB","Express","React","NodeJS","C++","C","Git","Dart","Figma","XD","PS","jQuery","Bootstrap", "AWS", "Sockets"];
  

  return (
    <section id="skills">
    
    <br/><br/>
    <div className="skills-top">
         <div class="SkillHeading">
        <h1 class="Heading">Skills</h1>
      </div>
      <div className="container">
        <div className="row">
        {a.map((item,index)=>{
         return (<SkillBox skillName={item} img={"images/"+ item+".png"} />)
         })
        }
        </div>
      </div>
      <br/>
      <p className="coolStuff skills-more" >...many more</p>
    </div>
    </section>
  );
}
export default Skills;
