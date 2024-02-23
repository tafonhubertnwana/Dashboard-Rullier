import React from 'react'
import StatisticContent from './components/StatisticContentBody';
import {Helmet} from 'react-helmet';
import Index from '../../Components/Head';


function Statistics() {
  return (
    <>
      <Helmet>
        <title>Rullier Admin</title>
      </Helmet>
      <div>
        <Index />
        <StatisticContent /> 
      </div>
    </>

  )
}

export default Statistics