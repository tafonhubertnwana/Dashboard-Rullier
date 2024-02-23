import React from 'react'
import DashboardLayout from "../../Pages/DashboardLayout/index";
import {Route, Routes } from "react-router-dom";
import Quote from '../../pages/Qoute';
import Project from '../../pages/Project';
import Statistics from '../../pages/Statistics';
import Order from '../../pages/CreateOrder';
import CreateProject from '../../pages/CreateProject/components/CreateProject';
import CreateProjectTwo from '../../pages/CreateProjectTwo/Components/CreateProjectTwo';
import Structure from '../../pages/Structure/Components/structure';


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
        <Route path="/createproject" element={<CreateProject />} />
        <Route path="createprojecttwo" element={<CreateProjectTwo />} />
        <Route path="/structure" element={<Structure />} />
        
      </Routes>
    </div>
  )
}

export default Root