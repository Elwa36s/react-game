import React from 'react';
import './footer.css'
import logo from '../../assets/images/rs_school_js.svg'

export default function Footer(){
    return(
    <footer>
    <div id="information">
      <div id="school">
          <a href="https://rs.school/js/" id='rsLink'><img src={logo} alt="RSSchoolLogo" /></a>
        </div>
      <p id='me'>Made by <a href="https://github.com/Elwa36s">Elwa36s,</a><br />2021</p>
    </div>
  </footer>
    )
}