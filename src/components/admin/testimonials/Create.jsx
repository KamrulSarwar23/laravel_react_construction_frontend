import React, { useState } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import SideBar from "../../common/SideBar";
import { useForm } from "react-hook-form";
import { apiUrl, token } from "../../common/http";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export const Create = () => {

  const navigate = useNavigate();

  const [isDisable, setIsDisable] = useState(false);
  const [imageId, setImageId] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const newData = { ...data, "imageId": imageId }; // Add content to the data object
    const res = await fetch(apiUrl + "testimonials", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token()}`,
      },
      body: JSON.stringify(newData),
    });

    const result = await res.json();

    if (result.status) {
      toast.success(result.message);
      navigate("/admin/testimonials");
    } else {

      if (result.status == false) {
        toast.error(result.errors.slug[0])
      }
      toast.error(result.message);
    }
  };

  // State to store the selected image preview

  const handleFile = async (e) => {
    const file = e.target.files[0];

    if (file) {
      // Generate a preview URL for the selected file
      const previewUrl = URL.createObjectURL(file);
      setPreviewImage(previewUrl);
    }

    const formData = new FormData();
    formData.append("image", file);

    setIsDisable(true); // Disable the submit button during upload

    try {
      const response = await fetch(apiUrl + "temp-images", {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token()}`,
        },
        body: formData,
      });

      const result = await response.json();

      if (result.status === false) {
        toast.error(result.errors.image[0]);
        setPreviewImage(null); // Clear preview on error
      } else {
        setImageId(result.data.id);
        toast.success("Image Uploaded! Now You Can Submit the Form");
      }
    } catch (error) {
      toast.error("An error occurred while uploading the image." , error);
      setPreviewImage(null); // Clear preview on error
    } finally {
      setIsDisable(false); // Re-enable the submit button after upload
    }
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
                    <h4 className="h5">Create Testimonials</h4>
                  </div>

                  <hr />

                  <form onSubmit={handleSubmit(onSubmit)}>

               
                    <div className="mb-3">
                      <label htmlFor="testimonial" className="form-label">
                      Testimonial
                      </label>
                      <textarea
                        placeholder="Testimonial"
                        {...register("testimonial", {
                          required: "The Testimonial field is required",
                        })}
                        className={`form-control ${errors.testimonial ? "is-invalid" : ""
                          }`}
                        rows={5}
                        id="testimonial"
                      ></textarea>
                      {errors.testimonial && (
                        <p className="invalid-feedback">
                          {errors.testimonial.message}
                        </p>
                      )}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="citation" className="form-label">
                      Citation
                      </label>
                      <input
                        placeholder="Citation"
                        {...register("citation", {
                          required: "The citation field is required",
                        })}
                        type="text"
                        id="title"
                        className={`form-control ${errors.citation ? "is-invalid" : ""
                          }`}
                      />
                      {errors.citation && (
                        <p className="invalid-feedback">
                          {errors.citation.message}
                        </p>
                      )}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="designation" className="form-label">
                      Designation
                      </label>
                      <input
                        placeholder="Designation"
                        {...register("designation", {
                          required: "The designation field is required",
                        })}
                        type="text"
                        id="title"
                        className={`form-control ${errors.designation ? "is-invalid" : ""
                          }`}
                      />
                      {errors.designation && (
                        <p className="invalid-feedback">
                          {errors.designation.message}
                        </p>
                      )}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="content" className="form-label">
                        Image
                      </label>
                      <br />
                      <input onChange={handleFile} className="form-control mb-3" type="file" />

                      {/* Show the preview of the selected image */}
                      {previewImage && (
                        <img
                          width={150}
                          height={180}
                          src={previewImage}
                          alt="Selected Preview"
                          className="img-thumbnail"
                        />
                      )}
                    </div>


                    <div className="mb-3">
                      <label htmlFor="status" className="form-label">
                        Status
                      </label>
                      <select
                        {...register("status", {
                          required: "The status field is required",
                        })}
                        id="status"
                        className={`form-control ${errors.status ? "is-invalid" : ""
                          }`}
                      >
                        <option value="1">Active</option>
                        <option value="0">Inactive</option>
                      </select>
                      {errors.status && (
                        <p className="invalid-feedback">
                          {errors.status.message}
                        </p>
                      )}
                    </div>
                    <button disabled={isDisable} type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
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

export default Create;
