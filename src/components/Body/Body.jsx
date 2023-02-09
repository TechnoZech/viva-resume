import React, { useState } from 'react';
import "./BodyStyles.css";
import {ArrowDown} from "react-feather";
import {Edit} from "react-feather";


const List = {
  basicInfo: "Basic Info",
  workExp: "Work Experience",
  project: "Projects",
  education: "Education",
  achievements: "Achievements",
  summary: "Summary",
  skill: "Skills",
};

function Body() {

  const [activeClass, setActiveClass] = useState(Object.keys(List)[0]);


// <---------------   Basic Info Form Body HTML  ---------------->

const basicInfoForm = (
  <>
      <label className="form-title-label">Update Section Title <Edit className="edit"/></label>
      <input type="text" value="Basic Info" className="input"/>

      <div className="form-div">

        <div className="form-input-div">
          <label className="form-label">Wanted Job Title</label>
          <input type="text" className="form-input" placeholder='e.g. Engineer'/>
        </div>

        <div className="form-input-div">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-input"/>
        </div>

        <div className="form-input-div">
          <label className="form-label">Email</label>
          <input type="email" className="form-input"/>
        </div>

        <div className="form-input-div">
          <label className="form-label">Phone</label>
          <input type="number" className="form-input"/>
        </div>

      </div>

      <div className="address-input-div">
          <label className="form-label">Address</label>
          <input type="text" className="form-input address-input"/>
      </div>


      <div className="form-div">
        <div className="form-input-div">
          <label className="form-label">Linkdin</label>
          <input type="text" className="form-input"/>
        </div>

        <div className="form-input-div">
          <label className="form-label">Github</label>
          <input type="text" className="form-input"/>
        </div>
      </div>
  </>
);


// <---------------   Work Experiance Form Body HTML  ---------------->

const workExperienceForm = (
  <>
    <label className="form-title-label">Update Section Title <Edit className="edit"/></label>
      <input type="text" value="Work Experience" className="input"/>

      <div className="form-div">

        <div className="form-input-div">
          <label className="form-label">Job Title</label>
          <input type="text" className="form-input"/>
        </div>

        <div className="form-input-div">
          <label className="form-label">Employer</label>
          <input type="text" className="form-input"/>
        </div>

        <div className="form-input-div">
          <label className="form-label">Start Date</label>
          <input type="month" min="1990-01" max="2030-01" className="form-input"/>
        </div>

        <div className="form-input-div">
          <label className="form-label">End Date</label>
          <input type="month" className="form-input"/>
        </div>

      </div>

      <div className="summary-div">
          <label className="form-label">End Date</label>
          <textarea  rows="4" className="summary-input" placeholder='e.g. Created effective logos and advertisement posters for the company.'/>
      </div>
  </>
)
// <---------------   Project Form Body HTML  ---------------->

const projectForm = (
  <>
    <label className="form-title-label">Update Section Title <Edit className="edit"/></label>
      <input type="text" value="Projects" className="input"/>

        <div className="oneline-input">
          <label className="form-label">Project Title</label>
          <input type="text" className="form-input"/>
        </div>

        <div className="summary-div">
          <label className="form-label">Project Summary</label>
          <textarea type="text" rows="4" className="summary-input"/>
        </div>
  </>
)

// <---------------   Education Form Body HTML  ---------------->

const educationForm = (
  <>
    <label className="form-title-label">Update Section Title <Edit className="edit"/></label>
      <input type="text" value="Education" className="input"/>

      <div className="form-div">

        <div className="form-input-div">
          <label className="form-label">Education Title</label>
          <input type="text" className="form-input" placeholder='e.g. 12th Science'/>
        </div>

        <div className="form-input-div">
          <label className="form-label">Institute Name</label>
          <input type="text" className="form-input"/>
        </div>

        <div className="form-input-div">
          <label className="form-label">University Name</label>
          <input type="text" className="form-input"/>
        </div>

        <div className="form-input-div">
          <label className="form-label">Marks</label>
          <input type="text" className="form-input" placeholder="10 CGPA / 85%"/>
        </div>

        <div className="form-input-div">
          <label className="form-label">Start Date</label>
          <input type="month" min="1990-01" max="2030-01" className="form-input"/>
        </div>

        <div className="form-input-div">
          <label className="form-label">End Date</label>
          <input type="month" className="form-input"/>
        </div>
      
      </div>
  </>
)

// <---------------   Achievements Form Body HTML  ---------------->

const achievementForm = (
  <>
    <label className="form-title-label">Update Section Title <Edit className="edit"/></label>
      <input type="text" value="Achievements" className="input"/>

        <div className="oneline-input">
          <label className="form-label">Achievement Title</label>
          <input type="text" className="form-input"/>
        </div>

        <div className="summary-div">
          <label className="form-label">Achievement Summary</label>
          <textarea type="text" rows="4" className="summary-input"/>
        </div>
  </>
)

// <---------------   Summary Form Body HTML  ---------------->

const summaryForm = (
  <>
    <label className="form-title-label">Update Section Title <Edit className="edit"/></label>
      <input type="text" value="Professional Summary" className="input"/>

        <div className="summary-div">
          <label className="form-label">Summary</label>
          <textarea type="text" rows="4" className="summary-input"/>
        </div>
  </>
)

// <---------------   Skills Form Body HTML  ---------------->

const skillForm = (
  <>
    <label className="form-title-label">Update Section Title <Edit className="edit"/></label>
      <input type="text" value="Skills" className="input"/>

      <div className="form-div">

        <div className="form-input-div">
          <label className="form-label">Skill Title 1</label>
          <input type="text" className="form-input" placeholder='e.g. Languages'/>
        </div>

        <div className="form-input-div">
          <label className="form-label">Skills</label>
          <input type="text" className="form-input" placeholder='e.g. C, C++'/>
        </div>

        <div className="form-input-div">
          <label className="form-label">Skill Title 2</label>
          <input type="text" className="form-input" />
        </div>

        <div className="form-input-div">
          <label className="form-label">Skills</label>
          <input type="text" className="form-input"/>
        </div>
      
      </div>
  </>
)
// <---------------   Selecting form html  ---------------->

const generateBody = () => {
  switch(List[activeClass]){
    case List.basicInfo: return basicInfoForm;
    case List.workExp: return workExperienceForm;
    case List.project: return projectForm;
    case List.education: return educationForm;
    case List.achievements: return achievementForm;
    case List.summary: return summaryForm;
    case List.skill: return skillForm;
    default:
      return null;
  }
}

// <------------------------   Return  ------------------------->
  return (
    <>
       <section className="body-section">
            <div className="body-container">
                <div className="main-body-div">
                  <div className="form-container">{generateBody()}</div>
                  <div className="option-div">
                      
                    {Object.keys(List)?.map((key)=>{
                      return<button className={"side-btn" + (activeClass === key ? " active" : "")} key={key} onClick={()=> setActiveClass(key)}> {List[key]} </button>
                    })}
                    <button className="colour-btn"><input className="color-btn" type="color"/>Choose Color</button>
                    <button className="download-btn">Download<ArrowDown/></button>
                  </div>
                </div>
            </div>
       </section>
    </>
  )
}

export default Body;