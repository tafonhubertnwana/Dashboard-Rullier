import React from 'react'
import { Link } from 'react-router-dom'





function Header () {
 
  
  return (
    <>
      {/***********************************
      Nav header start************************************/}
      <div className="nav-header">
        <Link to="/" className="brand-logo">
          <img src="images/logo_rullier.png" className="brand-logo" alt="" />
        </Link>
        <div className="nav-control">
          <div className="hamburger">
            <span className="line">
              <svg
                width={21}
                height={20}
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7468 5.58925C11.0722 5.26381 11.0722 4.73617 10.7468 4.41073C10.4213 4.0853 9.89369 4.0853 9.56826 4.41073L4.56826 9.41073C4.25277 9.72622 4.24174 10.2342 4.54322 10.5631L9.12655 15.5631C9.43754 15.9024 9.96468 15.9253 10.3039 15.6143C10.6432 15.3033 10.6661 14.7762 10.3551 14.4369L6.31096 10.0251L10.7468 5.58925Z"
                  fill="#452B90"
                />
                <path
                  opacity="0.3"
                  d="M16.5801 5.58924C16.9056 5.26381 16.9056 4.73617 16.5801 4.41073C16.2547 4.0853 15.727 4.0853 15.4016 4.41073L10.4016 9.41073C10.0861 9.72622 10.0751 10.2342 10.3766 10.5631L14.9599 15.5631C15.2709 15.9024 15.798 15.9253 16.1373 15.6143C16.4766 15.3033 16.4995 14.7762 16.1885 14.4369L12.1443 10.0251L16.5801 5.58924Z"
                  fill="#452B90"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/***********************************
      Nav header end************************************/}
    </>
  )
}

export default Header