import React from 'react'

import "./Home.css"

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Home = () => {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, my name is Elle Strauss!</h2>
        <div className='prompt'>
          <p>A Computer Science Student with a passion for tech</p>
          <LinkedInIcon onClick={() => window.open('https://linkedin.com/in/ellestrauss')}/>
          <GitHubIcon onClick={() => window.open('https://github.com/eStrau')}/>
          <EmailIcon onClick={() => window.location = 'mailto:strausselle01@gmail.com'}/>
        </div>
      </div>

      <div className='skills'>
        <h2>Skills</h2>
        <ol className='list'>
          <il className='item'>
            <h4>Languages</h4>
            <span>Java, Python, C++, C#</span>
          </il>
        </ol>
        <ol className='list'>
          <il className='item'>
            <h4>Technology</h4>
            <span></span>
          </il>
        </ol>
        <ol className='list'>
          <il className='item'>
            <h4>Coursework</h4>
            <span></span>
          </il>
        </ol>
      </div>
    </div>
  )
}

export default Home