import React from 'react'
import QuoteContent from './Components/quote';
import {Helmet} from 'react-helmet';
import Index from '../../Components/Head/IndexTwo';



function Quote() {
  return (
    <>
    <Helmet>
      
    </Helmet>
      <div>
        <Index />
        <QuoteContent />
      </div>
    </>
  )
}  

export default Quote