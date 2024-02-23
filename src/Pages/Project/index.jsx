import React from 'react'
import ProjectContent from './Components/project/inde';
import {Helmet} from 'react-helmet';
import Projecthead from '../../Components/Head/projecthead';


function Project() {
  return (
    <>
        <Helmet>
          <title>Yash Admin Sales Management System</title>                                                                                                                                                                                                                                 
        </Helmet>
        <div>
            <Projecthead />
            <ProjectContent />
        </div>
    </>
  )
}

export default Project