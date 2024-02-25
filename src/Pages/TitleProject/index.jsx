import React from 'react'
import {Helmet} from 'react-helmet';
import TitleProjectContent from './Components/titleproject';

const TitleProject = () => {
  return (
    
    <div>
      <Helmet>
        <title>Yash Admin Sales Management System</title>                                                                                                                                                                                                                                 
      </Helmet>
      <TitleProjectContent />
    </div>
  )
}

export default TitleProject