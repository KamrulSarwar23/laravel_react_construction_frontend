import React, { useContext } from "react";
import { AuthContext } from "../context/Auth"
import { Link, NavLink } from "react-router-dom";
const SideBar = () => {

    const {logout} = useContext(AuthContext)

  return (
    <div className="card shadow border-0 mb-3">
      <div className="card-body p-4 sidebar">
        <h4>Sidebar</h4>

        <ul>
            <li><NavLink to="/admin/dashboard">Dashboard</NavLink></li>
            <li><NavLink to="/admin/services">Services</NavLink></li>
            <li><Link to="#">Articles</Link></li>
            <li><Link to="#">Projects</Link></li>
            <li>
                <button onClick={logout} className="btn btn-primary mt-3">Logout</button>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
