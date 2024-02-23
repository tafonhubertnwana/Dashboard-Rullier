import React from 'react'
import TitleProject from './Components/titleproject'
import {Helmet} from 'react-helmet';

const index = () => {
  return (
    
    <div>
      <Helmet>
        <title>Yash Admin Sales Management System</title>                                                                                                                                                                                                                                 
      </Helmet>
      <TitleProject />
    </div>
  )
}

export default index