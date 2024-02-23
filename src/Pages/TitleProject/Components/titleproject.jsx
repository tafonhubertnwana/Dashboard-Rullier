import React, { useState } from 'react'
import { LiaTimesSolid } from "react-icons/lia";
import {Line } from 'rc-progress'
import logo from "../../../Images/logo.jpg";
import image1 from '../../../Images/image1.png';
import "../../../App.css"
import {Link } from 'react-router-dom'



const TitleProject = () => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <div className="container text-center cont">
        <div className="row">
          <div className="col-4">
            <div className="logo-image">
              <img src={logo} alt="logo" />
            </div>
            <div class="text-center">
              <img src={image1} class="rounded" alt="illustration" />
            </div>
            <div className='list-col'>
              <ul class="list-row fw-bold">
                <li>Help</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="col-8">
            <p className='times'><LiaTimesSolid /></p>
            <div>
              <h1 class="display-6  ">Titre du Project</h1>
              <p>NB Vous pourrez le titre du project plustard si vous le souhaitez</p>
            </div>
            <div className="mb-3"> 
              <input type="email" className="form-control " id="exampleFormControlInput1" placeholder="Bardage extérieur" value={inputValue} onChange={handleInputChange} />
            </div>
            <div className='progress-col'>
              <div class="progress-row">
                <p>Step 1 of 2</p>
                <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-bar  progress-bar-warning" style={{width: "50%"}}></div>
                </div>
              </div>
              <div className="btn-col">
                <button type="button" className="btn btn-primary"><Link to="/titleproject">Back</Link></button>
                <button type="button" className="btn btn-warning"><Link to="/createprojecttwo">Next</Link></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default TitleProject