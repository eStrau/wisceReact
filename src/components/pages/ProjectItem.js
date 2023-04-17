import React from 'react';
import { useParams } from 'react-router-dom'


// this will be useful for swe satellite items for each day
// `` indicate variable as does ${var_name}
const ProjectItem = ({image, name, id}) => {
  return (
    <div className='projectItem'>
        <div style = {{backgroundImage: `url(${image})`}} className = 'bgImage'></div>  
        <h1>{name}</h1>
    </div>
  )
}

export default ProjectItem