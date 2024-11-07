import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/frontend/Home";
import About from "./components/frontend/About";
import Contact from "./components/frontend/Contact";
import Blog from "./components/frontend/Blog";
import Project from "./components/frontend/Project";
import Service from "./components/frontend/Service";
import Login from "./components/admin/Login";
import { Dashboard } from "./components/admin/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/css/style.scss";
import RequireAuth from "./components/common/requireAuth";
import  Show from "./components/admin/services/Show";
import  Create from "./components/admin/services/Create";
import Update from "./components/admin/services/Update";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/admin/login" element={<Login />} />

          <Route
            path="/admin/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />

          <Route
            path="/admin/services"
            element={
              <RequireAuth>
                <Show />
              </RequireAuth>
            }
          />

        <Route
            path="/admin/services/create"
            element={
              <RequireAuth>
                <Create />
              </RequireAuth>
            }
          />

        <Route
            path="/admin/services/edit"
            element={
              <RequireAuth>
                <Update />
              </RequireAuth>
            }
          />


        </Routes>

      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
