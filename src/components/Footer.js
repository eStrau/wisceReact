import React from 'react'
import "./Footer.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <LinkedInIcon onClick={() => window.open('https://linkedin.com/in/ellestrauss')}/>
        <GitHubIcon onClick={() => window.open('https://github.com/eStrau')}/>
        <EmailIcon onClick={() => window.location = 'mailto:strausselle01@gmail.com'}/>
      </div>
      <p>© 2023 Elle Strauss</p>
    </div>
    
  )
}

export default Footer