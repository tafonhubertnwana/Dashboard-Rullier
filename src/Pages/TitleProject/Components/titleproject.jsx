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
          <div className="col-lg-4 px-5 pt-5">
            <div className="mb-4">
              <img class="w-30 ml-5" style={{width: "150px", height: "50px"}} src={logo} alt="logo-bloc" />
            </div>
            <div class=" py-5">
              <img  style={{width: "230px", height: "300px"}} src={image1} class="rounded w-75" alt="illustration" />
            </div>
            <div className='list-col'>
              <ul class="list-row fw-bold d-flex my-5 justify-content-center ">
                <li class=" px-3 border-end border-secondary">Help</li>
                <li class=" px-3 border-end border-secondary">Terms & Condition</li>
                <li class=" px-3">Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8 bg-white p-5 ml-4">
            <div class="mb-5">
              <p class="fw-bold fs-3"><LiaTimesSolid /></p>
              <div class="pt-2">
                <h1 class="display-6 fw-bold pt-2 ">Titre du Project</h1>
                <p class="fst-italic">NB Vous pourrez le titre du project plustard si vous le souhaitez</p>
              </div>
            </div>
            <div>
              <div class="mb-5" > 
                <input type="email" className="form-control " id="exampleFormControlInput1" placeholder="Bardage extérieur" value={inputValue} onChange={handleInputChange} />
              </div>
              <div class='d-flex justify-content-between' style={{ paddingTop: "200px"}}>
                <div class="progress-row w-50">
                  <p class="fst-italic fs-4 fw-bold text-warning">Step 1 of 2</p>
                  <div class="progress" style={{height: "15px"}} role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar  progress-bar-warning " style={{width: "50%"}}></div>
                  </div>
                </div>
                <div>
                  <button type="button" className="btn btn-primary text-white " style={{marginRight: "25px"}}><Link to="/">Back</Link></button>
                  <button type="button" className="btn btn-warning text-white"><Link to="/createproject">Next</Link></button>
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