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
          <div className="container text-center cont">
            <div className="row">
              <div className="col-4">
                <div className="logo-image">
                  <img src={logo} alt="logo-bloc" />
                </div>
                <div class="text-center">
                  <img src={image2} class="rounded" alt="illustration" />
                </div>
                <div className='list-col'>
                  <ul class="list-row fw-bold">
                    <li>Help</li>
                    <li>Terms & Condition</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
              </div>
              <div className="col-8">
                <p className='times'><LiaTimesSolid /></p>
                <div>
                  <h1 class="display-6">Etapes</h1>
                  <p>NB you can change the course title later if you wish to change it</p>
                </div>
              
                <form>
                  <div class="mb-3">
                    <input type="email"  value={currentInput} onChange={handleInputChange} class="form-control form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Entrer une étape '/>
                    <div id="emailHelp" class="form-text">Appuyer sur entrer pour valider</div>
                  </div>
                  <hr/> 
                  <div class="input-group">
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
                <div className='progress-col'>
                  <div class="progress-row">
                    <p>Step 2 of 2</p>
                    <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar progress-bar-warning" style={{width: "100%"}}></div>
                    </div>
                  </div>
                  <div className="btn-col">
                    <button type="button" className="btn btn-primary"><Link to="/titleproject">Back</Link></button>
                    <button type="button" className="btn btn-warning"><Link to="/structure">Next</Link></button>
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