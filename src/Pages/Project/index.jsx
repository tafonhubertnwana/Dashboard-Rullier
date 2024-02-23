import React from 'react'
import ProjectContent from './Components/project';
import {Helmet} from 'react-helmet';
import Index from '../../Components/Head/indexThree';


function Project() {
  return (
    <>
        <Helmet>
          <title>Yash Admin Sales Management System</title>                                                                                                                                                                                                                                 
        </Helmet>
        <div>
            <Index />
            <ProjectContent />
        </div>
    </>
  )
}

export default Project