import React from 'react'
import StatisticContent from './Components/statistic';
import {Helmet} from 'react-helmet';
import Statistichead from '../../Components/Head/statistichead';


function Statistics() {
  return (
    <>
      <Helmet>
        <title>Rullier Admin</title>
      </Helmet>
      <div>
        <Statistichead />
        <StatisticContent /> 
      </div>
    </>

  )
}

export default Statistics