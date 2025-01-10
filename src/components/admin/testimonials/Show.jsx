import React, { useEffect, useState } from "react";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import SideBar from "../../common/SideBar";
import { Link } from "react-router-dom";
import { apiUrl, token } from "../../common/http";
import Swal from "sweetalert2";

const Show = () => {

    const [testimonials, setTestimonials] = useState([]);

    const fetchTestimonials = async () => {
        try {
            const authToken = token();
            if (!authToken) {
                console.error("Error: No token found.");
                return;
            }

              const res = await fetch(apiUrl + "testimonials", {
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
                  setTestimonials(result.data);


        } catch (error) {
            console.error("Error fetching services:", error);
        }
    }

  const deleteTestimonial = async (id) => {
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
          const res = await fetch(`${apiUrl}testimonials/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${authToken}`,
            },
          });
  
          const result = await res.json();
  
          if (result.status === true) {
            setTestimonials(testimonials.filter((testimonial) => testimonial.id !== id));
            Swal.fire("Deleted!", result.message, "success");
          } else {
            Swal.fire("Error", result.message, "error");
          }
        } catch (error) {
          Swal.fire("Error", "Failed to delete the service. Please try again.", error);
        }
      }
    });
  };


    useEffect(() => {
        fetchTestimonials();
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
                                        <h4 className="h5">Services</h4>
                                        <Link
                                            className="btn btn-primary"
                                            to={"/admin/testimonials/create"}
                                        >
                                            Create
                                        </Link>
                                    </div>

                                    <hr />

                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Citation</th>
                                                <th>Designation</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {testimonials.length > 0 ? (
                                                testimonials.map((testimonial) => (
                                                    <tr key={testimonial.id}>
                                                        <td>{testimonial.id}</td>
                                                        <td>{testimonial.citation}</td>
                                                        <td>{testimonial.designation }</td>

                                                        <td>
                                                            {testimonial.status == 1 ? "Active" : "Inactive"}
                                                        </td>

                                                        <td>
                                                            <Link to={`/admin/testimonials/edit/${testimonial.id}`}
                                                                className="btn btn-sm btn-info me-2"
                                                            >
                                                                Edit
                                                            </Link>
                                                            <Link
                                                                onClick={() => deleteTestimonial(testimonial.id)}
                                                                href="#"
                                                                className="btn btn-sm btn-danger"
                                                            >
                                                                Delete
                                                            </Link>

                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="5">No Testimonials Available.</td>
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
    )
}

export default Show