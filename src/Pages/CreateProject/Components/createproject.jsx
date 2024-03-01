import React, { useRef, useState } from 'react'
import { LiaTimesSolid } from "react-icons/lia";
import logo from "../../../Assests/Images/Bloc-Logo.png"
import image2 from '../../../Assests/Images/x35.png';
import "../../../App.css"
import {Link } from 'react-router-dom'
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegPenToSquare } from "react-icons/fa6";
import { PiDotsSixVertical } from "react-icons/pi";

const CreateProjectTwo = () => {

  const [showInput, setShowInput] = useState(true)
  const [inputValues, setInputValues] = useState([])
  const [currentInput, setCurrentInput] = useState('');
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState('');

  const handleCopy = () => {
    inputRef.current.select();
    document.execCommand('copy');
    alert('Copied to Clipboard!');
  }

  const handleDeleteInput = () => {
    setShowInput(false);
  }
  const handleInputChange = (e) => {
    setCurrentInput(e.target.value)
  }

  const handleAddInput = () => {
    setInputValues([...inputValues, currentInput]);
    setCurrentInput('');
  };



  return (
    <div>
       <div>
          <div className="container-fluid color">
            <div className=" row ">
              <div className="col-lg-4 p-5">
                <div className="ml-5">
                  <img class="w-30 ml-5" src={logo} alt="logo-bloc" />
                </div>
                <div class="text-center">
                  <img src={image2} class="rounded w-75 pt-5" alt="illustration" />
                </div>
                <div className='pt-5 pl-5 pr-5'>
                  <ul class="list-row fw-bold d-flex mt-5 justify-content-around ">
                    <li class="border-right border-dark">Help</li>
                    <li class="border-right border-dark">Terms & Condition</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8  bg-white p-5 ml-4">
                <div class="mb-5">
                  <p className=' fw-bold fs-3'><LiaTimesSolid /></p>
                  <div>
                    <h1 class="display-6 fw-bold pt-2">Etapes</h1>
                    <p class="fst-italic">NB you can change the course title later if you wish to change it</p>
                  </div>
                </div>
                <form>
                  <div class="mb-5">
                    <input type="email"  value={currentInput} onChange={handleInputChange} class="form-control form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Entrer une étape '/>
                    <div id="emailHelp" class="form-text fst-italic">Appuyer sur entrer pour valider</div>
                  </div>
                  <hr/> 
                  <div class="input-group mb-5">
                    <div class="input-group-append">
                      <button type='button' class=" btn input-group-text span1" onClick={handleAddInput} ><PiDotsSixVertical /></button>
                      <ul>
                        {inputValues.map((input, index) => (
                          <li key={index}>{input}</li>
                        ))}
                      </ul>
                    
                    </div>
                    { showInput && <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder="Etape 1:ESSENCE" />}
                    <div class="input-group-append">
                      <button type='button' class=" btn input-group-text span2" onClick={handleCopy}><FaRegPenToSquare /></button>
                    </div>
                    <div class="input-group-append">
                      <button type="button" class=" btn input-group-text span3" onClick={handleDeleteInput }><RiDeleteBin5Line /></button>
                    </div>
                  </div>
                </form>
                <div class='d-flex justify-content-between pt-5'>
                  <div class="progress-row border border-dark w-50">
                    <p class="fst-italic fs-4 fw-bold ">Step 2 of 2</p>
                    <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar progress-bar-warning fs-1" style={{width: "100%"}}></div>
                    </div>
                  </div>
                  <div class="border border-dark w-25 ">
                    <button type="button" className="btn btn-primary "><Link to="/titleproject">Back</Link></button>
                    <button type="button" className="btn btn-warning ml-4"><Link to="/structure">Next</Link></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CreateProjectTwo