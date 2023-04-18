import React from 'react'
// useful when associating with specific users and will cause a display for that person
// useParams gets the specific url for the website to go to
import { useParams } from 'react-router-dom'
import { ProjectList } from '../../data/ProjectList'
import GitHubIcon from '@mui/icons-material/GitHub';
import './DisplayProject.css'

const DisplayProject = () => {
    const {id} = useParams()
    const project = ProjectList[id]
  return (
    <div className='project'>
      <h1>{project.name}</h1>
      <img src={project.image}/>
      <p>
        <b>Skills: </b>
        {project.skills}
      </p>
      <GitHubIcon className='icons' onClick={() => window.open(project.github)}/>
    </div>
  )
}

export default DisplayProject