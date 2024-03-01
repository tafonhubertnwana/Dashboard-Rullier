import React, { useState } from 'react'
import { LiaTimesSolid } from "react-icons/lia";
import logo from "../../../Assests/Images/Bloc-Logo.png";
import image1 from '../../../Assests/Images/image1.png';
import "../../../App.css"
import {Link } from 'react-router-dom'



const TitleProjectContent = () => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-lg-4 pt-4">
            <div className="ml-5">
              <img class="w-30 ml-5" src={logo} alt="logo-bloc" />
            </div>
            <div class="text-center">
              <img src={image1} class="rounded w-75 pt-5" alt="illustration" />
            </div>
            <div className='list-col'>
              <ul class="list-row fw-bold d-flex my-5 justify-content-around ">
                <li class="border-right border-dark">Help</li>
                <li class="border-right border-dark">Terms & Condition</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8 bg-white p-5 ml-4">
            <div class="mb-5">
              <p class="fw-bold fs-3"><LiaTimesSolid /></p>
              <div>
                <h1 class="display-6 fw-bold pt-2 ">Titre du Project</h1>
                <p class="fst-italic">NB Vous pourrez le titre du project plustard si vous le souhaitez</p>
              </div>
            </div>
            <div>
              <div class="mb-5"> 
                <input type="email" className="form-control " id="exampleFormControlInput1" placeholder="Bardage extérieur" value={inputValue} onChange={handleInputChange} />
              </div>
              <div class='d-flex justify-content-between pt-5'>
                <div class="progress-row border w-50">
                  <p class="fst-italic fs-4 fw-bold">Step 1 of 2</p>
                  <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar  progress-bar-warning" style={{width: "50%"}}></div>
                  </div>
                </div>
                <div className="">
                  <button type="button" className="btn btn-primary"><Link to="/">Back</Link></button>
                  <button type="button" className="btn btn-warning"><Link to="/createproject">Next</Link></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default TitleProjectContent