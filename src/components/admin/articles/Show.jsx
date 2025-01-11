import React, { useEffect, useState } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import SideBar from "../../common/SideBar";
import { apiUrl, token } from "../../common/http";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export const Show = () => {

  const [articles, setArticles] = useState([]);
  const [paginator, setPaginator] = useState(null);

  const fetcharticles = async (url = `${apiUrl}articles`) => {
    try {
      const authToken = token();

      if (!authToken) {
        console.error("Error: No token found.");
        return;
      }

      const res = await fetch(url, {
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
      setArticles(result.data.data)

      setPaginator({
        links: result.data.links,
        total: result.data.total,
        from: result.data.from,
        to: result.data.to,
        per_page: result.data.per_page,
      });

    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };


  const deleteArticle = async (id) => {
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
          const res = await fetch(`${apiUrl}articles/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${authToken}`,
            },
          });

          const result = await res.json();

          if (result.status === true) {
            setArticles(articles.filter((article) => article.id !== id));
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
    fetcharticles();
  }, []);

  const handlePageChange = (url) => {
    if (url) fetcharticles(url);
  };

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
                    <h4 className="h5">Articles</h4>
                    <Link
                      className="btn btn-primary"
                      to={"/admin/articles/create"}
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
                        <th>Slug</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {articles.length > 0 ? (
                        articles.map((article) => (
                          <tr key={article.id}>
                            <td>{article.id}</td>
                            <td>{article.title}</td>
                            <td>{article.slug}</td>

                            <td>
                              {article.status == 1 ? "Active" : "Inactive"}
                            </td>

                            <td>
                              <Link to={`/admin/articles/edit/${article.id}`}
                                className="btn btn-sm btn-info me-2"
                              >
                                Edit
                              </Link>
                              <Link
                                onClick={() => deleteArticle(article.id)}
                                href="#"
                                className="btn btn-sm btn-danger">
                                Delete
                              </Link>

                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="5">No Articles Available.</td>
                        </tr>
                      )}
                    </tbody>

                  </table>

                  {/* Pagination */}
                  {paginator && paginator.total > paginator.per_page && (
                    <div className="d-flex flex-column justify-content-center align-items-center mt-4 mb-4">
                      <div className="d-flex flex-wrap gap-2">
                        {paginator.links.map((link, index) => (
                          <button
                            key={index}
                            onClick={() => handlePageChange(link.url)}
                            disabled={!link.url}
                            className={[
                              "btn btn-sm px-4 py-2 rounded-pill transition-all",
                              !link.url
                                ? "btn-secondary disabled text-dark"
                                : "btn-outline-primary",
                              link.active
                                ? "btn-primary text-white fw-bold"
                                : "btn-outline-primary text-dark border-primary",
                            ].join(" ")}
                          >
                            <span
                              dangerouslySetInnerHTML={{ __html: link.label }}
                              className="text-center"
                            ></span>
                          </button>
                        ))}
                      </div>
                      <span className="mt-3 text-muted fw-semibold">
                        Showing <span className="text-primary fw-bold">{paginator.from}</span> to{" "}
                        <span className="text-primary fw-bold">{paginator.to}</span> of{" "}
                        <span className="text-primary fw-bold">{paginator.total}</span> items
                      </span>
                    </div>
                  )}


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
