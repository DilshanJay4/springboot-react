import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="z-2 mb-0 mt-0 ml-0 position-fixed d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: '240px', height: '125%' }}>
      <a href="/" className="d-flex align-items-center pl-5 mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-6 fw-bold">Computer Item Repair System (CIRS)</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" activeClassName="active"><i className="bi bi-house"></i> Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/requests" className="nav-link" activeClassName="active"><i className="bi bi-house"></i> Repair Requests</NavLink>
        </li>
        <li>
          <NavLink to="/addrequest" className="nav-link" activeClassName="active"><i className="bi bi-plus-square"></i> ADD</NavLink>
        </li>
        <li>
          <NavLink to="/updaterequest" className="nav-link" activeClassName="active"><i className="bi bi-pencil-square"></i> Update</NavLink>
        </li>
      </ul>
      <hr />
    </div>
  );
}

export default SideBar;
