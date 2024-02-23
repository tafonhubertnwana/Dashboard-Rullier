import React from 'react'
import QuoteContent from './Components/quote';
import {Helmet} from 'react-helmet';
import Quotehead from '../../Components/Head/quotehead';



function Quote() {
  return (
    <>
    <Helmet>
      
    </Helmet>
      <div>
        <Quotehead />
        <QuoteContent />
      </div>
    </>
  )
}  

export default Quote