import React from 'react'
import DashboardLayout from "../../Pages/DashboardLayout/index";
import {Route, Routes } from "react-router-dom";
import Quote from '../../Pages/Quote/index';
import Project from '../../Pages/Project/index';
import Statistics from '../../Pages/Statistics/index';
import Order from '../../Pages/Orders/index';
import TitleProject from '../../Pages/TitleProject/index'; 
import Structure from '../../Pages/Structure/index';
import CourseContent from '../../Pages/CourseContent/Components/coursecontent';
import CreateProject from '../../Pages/CreateProject/Components/createproject';


const Root = () => {
  return (
    <div>    
      <Routes>
        <Route path="/"  element={<DashboardLayout />} >
          <Route path='/' index element={<Statistics />} />
          <Route path="quote" element={<Quote />} />
          <Route path="project" element={<Project />} /> 
        </Route>
        <Route path="/createorder" element={<Order /> } />
        <Route path="/titleproject" element={<TitleProject />} />
        <Route path="createproject" element={<CreateProject /> } />
        <Route path="/structure" element={<Structure />} />
        <Route path="/content" element={<CourseContent />} />
      </Routes>
    </div>
  )
}
 
export default Root