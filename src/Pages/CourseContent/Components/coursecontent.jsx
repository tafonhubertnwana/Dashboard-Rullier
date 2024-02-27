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

const CourseContent 
= () => {
  return (
    <>
      <div className='cont'>
        <div>
          <ul class="nav nav-pills nav-justified">
            <li class="nav-item">
              <Link to="/structure"><button type="button" class="btn btns btn-light"><IoIosArrowBack /></button></Link>
            </li>
            <li class="nav-item p-tag fw-bold">
              Getting started with design
            </li>
            <li class="nav-item">
              <button type="button" class="btns btn btn-light"><PiDotsThreeLight /></button><button type="button" className="btn btn-warning">Save</button>
            </li>
          </ul>
        </div>
        <div class="row">
          <div class="col-4 row-col">
            <div id="simple-list-example" class="d-flex flex-column gap-2 simple-list-example-scrollspy">
              <Link class=" list-group-item list-group-item-action  fw-bold" to="/essence">Essence</Link>
              <Link class="list-group-item list-group-item-action fw-bold" aria-current="true" to="/structure">Structure</Link>
              <Link class=" list-group-item list-group-item-action fw-bold" to="/accesoires">Accessoires</Link>
            </div>
          </div>
          <div class="col-8 row-col-8">
            <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
              <h3 id="simple-list-item-1" class="fw-bold ">Course content</h3>
              <p>Start putting together your course by creating sections, lectures and practice (quizzes, coding exercises and assignments).<br/>
                If you’re intending to offer your course for free, the total length of video content must be less than 2 hours.
              </p> 
            </div>
            <div class="container-section border border-secondary-subtle">
              <div className="image-section border border-secondary-subtle">
                <div className="input-section">
                  <div class="input-group form">
                    <span class="input-group-text span1"><PiDotsSixVertical /></span>
                    <p class="fw-bold">Section 1: Introduction</p>
                    <span class="input-group-text span2"><FaRegPenToSquare /></span>
                    <span class="input-group-text span3"><RiDeleteBin5Line /></span>
                  </div>
                  <div className='content'>
                    <button type="button" class="btn bg-warning-subtle text-emphasis-warning text-warning  fst-italic fs-5">+ Add new content <  IoIosArrowUp /></button>
                  </div>
                </div>
                <div className="image-sec">
                  <div className="img">
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
                <hr />
                <div className="image-sec">
                  <div className="img">
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
              <hr/>
              <div className="image-section border border-secondary-subtle">
                <div className="new-support">
                  <div className="support border border-warning rounded">
                    <div class="text-warning fw-bold">
                      New section
                      <br/>
                      Support 
                    </div>
                  </div>
                  <div className="description border border-secondary-subtle rounded">
                    <p class="lh-base fw-bold">Description</p>
                  </div>
                  <div class="button">
                    <button type="button" class="btn btn-primary fw-bold">Cancle</button>
                    <button type="button" class="btn btn-secondary fw-bold">Add section</button >
                  </div>
                </div>
              </div>
              <hr />
              <div className="new-section">
                <p>Add new section</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default CourseContent
