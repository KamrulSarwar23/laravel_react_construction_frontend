import React, { useState } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import SideBar from "../../common/SideBar";
import { useForm } from "react-hook-form";
import { apiUrl, fileUrl, token } from "../../common/http";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";


export const Update = () => {

    const navigate = useNavigate();

    const [isDisable, setIsDisable] = useState(false);
    const [imageId, setImageId] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [teamMember, setTeamMember] = useState('');
    const params = useParams();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: async () => {
            const res = await fetch(apiUrl + 'teams/' + params.id, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Bearer ${token()}`,
                },
            });

            const result = await res.json();
            setTeamMember(result.data);

            return {
                name: result.data.name,
                job_title: result.data.job_title,
                linkedin_url: result.data.linkedin_url,
                status: result.data.status,
            }
        }
    });

    const onSubmit = async (data) => {
        const newData = { ...data, "imageId": imageId }; // Add content to the data object
        const res = await fetch(apiUrl + "teams/" + params.id, {
            method: "PUT",
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
            navigate("/admin/teams");
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
            toast.error("An error occurred while uploading the image.", error);
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
                                        <h4 className="h5">Edit Team Member</h4>
                                    </div>

                                    <hr />

                                    <form onSubmit={handleSubmit(onSubmit)}>


                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">
                                                Name
                                            </label>
                                            <input
                                                placeholder="Name"
                                                {...register("name", {
                                                    required: "The name field is required",
                                                })}
                                                type="text"
                                                id="title"
                                                className={`form-control ${errors.name ? "is-invalid" : ""
                                                    }`}
                                            />
                                            {errors.name && (
                                                <p className="invalid-feedback">
                                                    {errors.name.message}
                                                </p>
                                            )}
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="job_title" className="form-label">
                                                Job Title
                                            </label>
                                            <input
                                                placeholder="Job Title"
                                                {...register("job_title", {
                                                    required: "The job title field is required",
                                                })}
                                                type="text"
                                                id="job_title"
                                                className={`form-control ${errors.job_title ? "is-invalid" : ""
                                                    }`}
                                            />
                                            {errors.job_title && (
                                                <p className="invalid-feedback">
                                                    {errors.job_title.message}
                                                </p>
                                            )}
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="linkedin_url" className="form-label">
                                                Linkedin Url
                                            </label>
                                            <input
                                                placeholder="Linkedin Url"
                                                {...register("linkedin_url")}
                                                type="text"
                                                id="linkedin_url"
                                                className={`form-control ${errors.linkedin_url ? "is-invalid" : ""
                                                    }`}
                                            />
                                            {errors.linkedin_url && (
                                                <p className="invalid-feedback">
                                                    {errors.linkedin_url.message}
                                                </p>
                                            )}
                                        </div>


                                        <div className="mb-3">
                                            <label htmlFor="image" className="form-label">
                                                Image
                                            </label>
                                            <br />
                                            <input
                                                onChange={handleFile}
                                                className="form-control mb-3"
                                                type="file"
                                            />

                                            {/* Show preview if a new image is selected, otherwise show existing image */}

                                            {previewImage ? (
                                                <img
                                                    width={150}
                                                    height={180}
                                                    src={previewImage}
                                                    alt="New Preview"
                                                    className="img-thumbnail"
                                                />
                                            ) : teamMember.image && <img width={150} height={180} src={fileUrl + 'uploads/teams/' + teamMember.image} alt="" />}
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

export default Update;
