import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import EngineeringIcon from '@mui/icons-material/Engineering';

const Experience = () => {
  return (
    <div>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement
          className="vertical-timeline-element--education" //function name inside of css styling they give us
          date = "August 2022 - Expected May 2026"
          iconStyle={{background: "#8198FD", color: "#fff"}}
          icon = {<SchoolIcon/>}
        >
          <h3 className="vertical-timeline-element-title"> 
            University of Florida, Gainesville, FL 
          </h3>
          <h4 className="vertical-timeline-element-title">
            Bachelor's Degree
          </h4>
          <p>Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2023 - August 2023"
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon = {<WorkIcon/>}
        >
          <h3 className="vertical-timeline-element-title"> 
            Teaching Assistant
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Girls Who Code Summer Immersion Program 
          </h4>
          <p> - Add description</p>
          <p> - add more</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2023 - Present"
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon = {<EngineeringIcon/>}
        >
          <h3 className="vertical-timeline-element-title"> 
            eSwamp Director
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            UF Society of Women Engineers 
          </h4>
          <p> - Coordinate all-day event to recruit incoming freshman into SWE as well as introducing them to the College of Engineering and the various opportunities the University of Florida has to offer.</p>
          <p> - add more later</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="August 2022 - Present"
          iconStyle={{background: "#3e497a", color: "#fff"}}
        >
          <h3 className="vertical-timeline-element-title"> 
            figure out
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
             
          </h4>
          <p> </p>
          <p> </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience