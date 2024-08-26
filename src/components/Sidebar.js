// "use client";

import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

// import { DarkThemeToggle, Flowbite , Sidebar } from "flowbite-react";
// import {HiShoppingBag, HiUser } from "react-icons/hi";


const Sidebarmenu = () => (

    <div className="sidebar container-fluid">
    <div className="row flex-nowrap">
      <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark sidebar-container">
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white sidebar-content">
          <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <span className="fs-5 d-none d-sm-inline ">Menu</span>
          </a>
          <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
            <li className="nav-item">
              <Link to="/products" className="nav-link align-middle px-0 text-white">
                <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Product Details</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link align-middle px-0">
                <i className="fs-4 bi-person"></i> <span className="ms-1 d-none d-sm-inline text-white">My Profile</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Sidebarmenu;