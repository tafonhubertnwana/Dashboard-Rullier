import React from 'react'
import DashboardLayout from "../../Pages/DashboardLayout/index";
import {Route, Routes } from "react-router-dom";
import Quote from '../../Pages/Quote/index';
import Project from '../../Pages/Project/index';
import Statistics from '../../Pages/Statistics/index';
import Order from '../../Pages/Orders/index';
import TitleProject from '../../Pages/TitleProject/index'; 
import Structure from '../../Pages/Structure/index';


const Root = () => {
  return (
    <div>  
      <Routes>
        <Route path="/"  element={<DashboardLayout />} >
          <Route path='/' index element={<Statistics />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/project" element={<Project />} />
          <Route path='/createorder' element={<Order />} /> 
        </Route>
        <Route path="/createproject" element={<TitleProject />} />
        <Route path="/structure" element={<Structure />} />
      </Routes>
    </div>
  )
}
 
export default Root