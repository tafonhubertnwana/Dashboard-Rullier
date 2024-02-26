import React from 'react'
import {Helmet} from 'react-helmet';
import CreateOrder from './Components/order';


function Order() {
  return (
    <>
        <Helmet>
          <title>Yash Admin Sales Management System</title>                                                                                                                                                                                                                                 
        </Helmet>
        <div>
            <CreateOrder />
        </div>
    </>
  )
}

export default Order