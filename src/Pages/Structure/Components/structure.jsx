import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { PiDotsThreeLight } from "react-icons/pi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegPenToSquare } from "react-icons/fa6";
import { PiDotsSixVertical } from "react-icons/pi";
import { LuPen } from "react-icons/lu";
import { IoIosArrowUp } from "react-icons/io";
import image2 from '../../../Assests/Images/Rectangle23.jpg'
import image3 from '../../../Assests/Images/Rectangle.png'
import { Link } from 'react-router-dom';


const StructureContent = () => {
  return (
    <>
      <div className='container-fluid bg-white'>
        <div class="">
          <ul class="d-flex justify-content-between py-2 px-3 ">
            <li class="nav-item">
              <Link to="/createproject"><button type="button p-5" class="btn btn-light"><IoIosArrowBack class="fw-bolder fs-4 text-black"/></button></Link>
            </li>
            <li class="nav-item p-tag fw-bold">
              Getting started with design
              <span class=" fs-4 pl-2">(DRAFT)</span>
            </li>
            <li class="nav-item">
              <button button type="button p-5" class="btn btn-light" style={{marginRight: "15px"}}><PiDotsThreeLight class="fw-bolder fs-4 text-black" /></button>
              <button type="button" className="btn btn-warning">Save</button>
            </li>
          </ul>
        </div>

        <div class="row">
          <div class=" col-sm-4 border-end border-black-50 border-top" style={{width: "300px"}}>
            <div class="">
              <div id="simple-list-example" class="d-flex flex-column">
                <ul class="list-group">
                  
                  <li class="list-group-item"><Link>Essence</Link></li>
                  <li class="list-group-item"><Link>Structure</Link></li>
                  <li class="list-group-item"><Link>Accessoires</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="col-sm-8 p-5 border-top border-black-top" style={{width: "77%"}}>
            <div >
              <h3 class="fw-bold ">Structure</h3>
              <p class=" pb-3">Start putting together your course by creating sections, lectures and practice (quizzes, coding exercises and assignments).<br/>
                If you’re intending to offer your course for free, the total length of video content must be less than 2 hours.
              </p> 
            </div>
            <div class=" border border-secondary-subtle p-5 rounded" style={{width: "90%"}}>
              <div className="border border-secondary-subtle rounded">
                <div className="d-flex justify-content-between p-3 border-bottom border-black-50">
                  <div class="d-flex w-50 border">
                    <span class="fs-3"><PiDotsSixVertical /></span>
                    <p className='fw-bold md-5'>Section 1: Introduction</p>
                    <span class="fs-3 "><FaRegPenToSquare /></span>
                    <span class="fs-3"><RiDeleteBin5Line /></span>
                  </div>
                  <div className='content'>
                    <button type="button" class="btn bg-warning-subtle text-emphasis-warning text-warning  fst-italic fs-5">+ Add new content <  IoIosArrowUp /></button>
                  </div>
                </div>
                <div className="d-flex pt-2 px-3">
                  <div className="">
                    <img src={image2} class="rounded" alt="Rectangle2023" />
                  </div>
                  <div className="image-text fw-bold fst-italic">
                    Top 5 UI_UX Design [Trends] Tips by Cuberto (2020).mp
                    <br/>
                    10:24<p class="text-warning "><LuPen /> Edit Content</p> 
                  </div>
                </div>
                <div class=" position-relative">
                  <div class="position-absolute bottom-0 end-0">
                    <button type="button" class="btn bg-warning-subtle text-emphasis-warning"><p class="text-warning ">Preview</p></button>
                  </div>
                </div>

                <hr class="ms-4" style={{width: "95%"}}/>

                <div className="d-flex pt-2 px-3">
                  <div className="">
                    <img src={image3} class="rounded" alt="Rectangle2023" />
                  </div>
                  <div className="image-text fw-bold fst-italic">
                    Top 5 UI_UX Design [Trends] Tips by Cuberto (2020).mp
                    <br/>
                    10:24<p class="text-warning "><LuPen /> Edit Content</p> 
                  </div>
                </div>
                <div class="position-relative">
                  <div class="position-absolute bottom-0 end-0 left-50px">
                    <button type="button" class="btn bg-warning-subtle text-emphasis-warning"><p class="text-warning ">Preview</p></button>
                  </div>
                </div>
              </div>
              <hr class="my-4"/>
              <div style={{borderStyle: "dashed"}} class="rounded border-black-50" >
                <p class="text-center fw-bold fst-italic pt-2">Add new section</p>
              </div>
            </div>
            <div className=" my-4 w-5 ">
              <button type="button" class="btn btn-warning  fst-italic fs-5">Upload all content at once</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StructureContent
