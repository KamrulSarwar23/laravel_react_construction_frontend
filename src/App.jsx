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

import ServiceShow from "./components/admin/services/Show";
import ServiceCreate from "./components/admin/services/Create";
import ServiceUpdate from "./components/admin/services/Update";

import ProjectShow from "./components/admin/projects/Show";
import ProjectCreate from "./components/admin/projects/Create";
import ProjectUpdate from "./components/admin/projects/Update";

import ArticleShow from "./components/admin/articles/Show";
import ArticleCreate from "./components/admin/articles/Create";
import ArticleUpdate from "./components/admin/articles/Update";

function App() {
  return (
    <>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
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
                <ServiceShow />
              </RequireAuth>
            }
          />

          <Route
            path="/admin/services/create"
            element={
              <RequireAuth>
                <ServiceCreate />
              </RequireAuth>
            }
          />

          <Route
            path="/admin/services/edit/:id"
            element={
              <RequireAuth>
                <ServiceUpdate />
              </RequireAuth>
            }
          />

          <Route
            path="/admin/projects"
            element={
              <RequireAuth>
                <ProjectShow />
              </RequireAuth>
            }
          />

          <Route
            path="/admin/projects/create"
            element={
              <RequireAuth>
                <ProjectCreate />
              </RequireAuth>
            }
          />

          <Route
            path="/admin/projects/edit/:id"
            element={
              <RequireAuth>
                <ProjectUpdate />
              </RequireAuth>
            }
          />


          <Route
            path="/admin/articles"
            element={
              <RequireAuth>
                <ArticleShow />
              </RequireAuth>
            }
          />

          <Route
            path="/admin/articles/create"
            element={
              <RequireAuth>
                <ArticleCreate />
              </RequireAuth>
            }
          />

          <Route
            path="/admin/articles/edit/:id"
            element={
              <RequireAuth>
                <ArticleUpdate />
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
