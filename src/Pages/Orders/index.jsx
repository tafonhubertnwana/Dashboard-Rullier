import React from 'react'
import {Helmet} from 'react-helmet';
import Index from '../../Components/Head/indexThree';
import CreateOrder from './Components/CreateOrder';


function Order() {
  return (
    <>
        <Helmet>
          <title>Yash Admin Sales Management System</title>                                                                                                                                                                                                                                 
        </Helmet>
        <div>
            <Index />
            <CreateOrder />
        </div>
    </>
  )
}

export default Order