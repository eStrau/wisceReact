import React from 'react';
import ProjectItem from './ProjectItem';
import { ProjectList } from '../../data/ProjectList';

import './Projects.css';

const Projects = () => {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
      {
        ProjectList.map((project) => {
          return <ProjectItem name = {project.name} image = {project.image}/>
        })
      }
      </div>
      {/* helper item that specifically creates project items */}
    </div>
  )
}

export default Projects