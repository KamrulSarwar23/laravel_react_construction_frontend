import React, { useContext } from "react";
import { AuthContext } from "../context/Auth"
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {

  const location = useLocation();

  const isActive = (path) => location.pathname.startsWith(path);

 const {logout} = useContext(AuthContext)

  return (
    <div className="card shadow border-0 mb-3">
      <div className="card-body p-4 sidebar">
        <h4>Sidebar</h4>

        <ul>
            <li>
                <Link
                    to="/admin/dashboard"
                    className={isActive("/admin/dashboard") ? "active" : ""}
                >
                    Dashboard
                </Link>
            </li>
            <li>
                <Link
                    to="/admin/services"
                    className={isActive("/admin/services") ? "active" : ""}
                >
                    Services
                </Link>
            </li>
            <li>
                <Link
                    to="/admin/projects"
                    className={isActive("/admin/projects") ? "active" : ""}
                >
                    Projects
                </Link>
            </li>
            <li>
                <Link
                    to="/admin/articles"
                    className={isActive("/admin/articles") ? "active" : ""}
                >
                    Articles
                </Link>
            </li>
            <li>
                <button onClick={logout} className="btn btn-primary mt-3">
                    Logout
                </button>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
