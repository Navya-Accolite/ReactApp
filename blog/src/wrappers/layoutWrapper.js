import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Avatar from 'react-avatar';

const LayoutWrapper = () => {
  return (
    <div>
      <header>
        <nav>
          <h1>BlogYourWay</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="contact">Contact</NavLink>
          <NavLink to="task">Task</NavLink> 
          <NavLink to="profile"><Avatar  src="https://robohash.org/e10fdc0fbcdbe62e9a782cabfe2154fc?set=set4&bgset=&size=400x400" size="30" round={true} /></NavLink> 
           
        </nav>
      
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutWrapper;
