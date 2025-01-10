import React, { useEffect, useState } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import SideBar from "../../common/SideBar";
import { apiUrl, token } from "../../common/http";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export const Show = () => {
    
  const [teamMembers, setTeamMembers] = useState([]);

  const fetchTeamMembers = async () => {
    try {
      const authToken = token();

      if (!authToken) {
        console.error("Error: No token found.");
        return;
      }

      const res = await fetch(apiUrl + "teams", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const result = await res.json();
      setTeamMembers(result.data)
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };


  const deleteTeamMember = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const authToken = token();
        if (!authToken) {
          Swal.fire("Error", "Authorization token missing.", "error");
          return;
        }
  
        try {
          const res = await fetch(`${apiUrl}teams/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${authToken}`,
            },
          });
  
          const result = await res.json();
  
          if (result.status === true) {
            setTeamMembers(teamMembers.filter((teamMember) => teamMember.id !== id));
            Swal.fire("Deleted!", result.message, "success");
          } else {
            Swal.fire("Error", result.message, "error");
          }
        } catch (error) {
          Swal.fire("Error", "Failed to delete the article. Please try again.", "error");
        }
      }
    });
  };
  

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  return (
    <div>
      <Header />
      <main className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <SideBar />
            </div>

            <div className="col-md-9">
              <div className="card shadow border-0">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h4 className="h5">Team Members</h4>
                    <Link
                      className="btn btn-primary"
                      to={"/admin/teams/create"}
                    >
                      Create
                    </Link>
                  </div>

                  <hr />

                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Job Title</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {teamMembers.length > 0 ? (
                        teamMembers.map((teamMember) => (
                          <tr key={teamMember.id}>
                            <td>{teamMember.id}</td>
                            <td>{teamMember.name}</td>
                            <td>{teamMember.job_title}</td>

                            <td>
                              {teamMember.status == 1 ? "Active" : "Inactive"}
                            </td>

                            <td>
                              <Link to={`/admin/teams/edit/${teamMember.id}`}
                                className="btn btn-sm btn-info me-2"
                              >
                                Edit
                              </Link>
                              <Link
                                onClick={() => deleteTeamMember(teamMember.id)}
                                href="#"
                                className="btn btn-sm btn-danger">
                                Delete
                              </Link>

                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="5">No Team Members Available.</td>
                        </tr>
                      )}
                    </tbody>

                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Show;
