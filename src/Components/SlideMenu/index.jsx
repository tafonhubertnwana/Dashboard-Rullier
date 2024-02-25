import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuItems } from './Slideitems/slide';


function Menubar(props ) {
  
  return(
    <li className="mm active">
      <NavLink to={props.link}  className="mm active" >
        <div className="menu-icon">
          {props.icon}
        </div>
        <span className="nav-text">{props.label}</span>
      </NavLink>
    </li>
  )
};

const menuItem = MenuItems.map((item) => 
  <Menubar 
    link={item.link}
    label={item.label}
    icon={item.icon} 
  />
)





const Slidebar = () => { 

  
  return (
    <>
      {/***sidebarstart*****/}  
      <div className="deznav">
      <div className="deznav-scroll">
        <ul className="metismenu" id="menu">
          <li className="menu-title"> Tableau de bord</li>
          {menuItem}
        </ul>
      </div>
    </div>
      {/****Sidebar end**/} 
    </>
  )
 
}

export default Slidebar