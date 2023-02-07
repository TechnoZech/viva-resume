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

  const[activeclass, setActiveClass] = useState(Object.key(List)[0]);

  return (
    <>
       <section className="body-section">
            <div className="body-container">
                <div className="main-body-div">
                  <div className="from-div">Form Div</div>
                  <div className="option-div">

                    {Object.keys(List)?.map((key)=>{
                      return<button className={`"side-btn"`} key={key} onClick={()=>setActiveClass(key)}>{List[key]}</button>
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