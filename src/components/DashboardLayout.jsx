import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import './DashboardLayout.css'; // Import CSS file



const DashboardLayout = () => {
  return (
    <div className="layout-container">
      <Navbar />
      <main className="layout-main">
       <Outlet />
     
      </main>
    </div>
  );
};

export default DashboardLayout;
