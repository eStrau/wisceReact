import React from 'react'
// useful when associating with specific users and will cause a display for that person
import { useParams } from 'react-router-dom'

const DisplayProject = () => {
    const {id} = useParams()
  return (
    <div>DisplayProject
        {id}
    </div>
  )
}

export default DisplayProject