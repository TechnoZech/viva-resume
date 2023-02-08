import React, { useState } from 'react';
import "./BodyStyles.css";
import {ArrowDown} from "react-feather";


const List = {
  basicInfo: "Basic Info",
  workExp: "Work Experience",
  project: "Projects",
  education: "Education",
  achievements: "Achievements",
  summary: "Summary",
  other: "Other",
};

function Body() {

  const [activeClass, setActiveClass] = useState(Object.keys(List)[0]);


// <---------------   Basic Info Form Body HTML  ---------------->

const basicInfoForm = (
  <>
      <label className="form-title-label">Update Section-Title</label>
      <input type="text" value="Basic Info" className="input"/>

      <div className="form-div">

        <div className="form-input-div">
          <label className="form-label">Job Title</label>
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

// <---------------   Selecting form html  ---------------->

const generateBody = () => {
  switch(List[activeClass]){
    case List.basicInfo: return basicInfoForm;
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