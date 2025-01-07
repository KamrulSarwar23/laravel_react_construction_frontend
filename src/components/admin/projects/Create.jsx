import React, { useState, useRef, useMemo } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import SideBar from "../../common/SideBar";
import { useForm } from "react-hook-form";
import { apiUrl, token } from "../../common/http";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import JoditEditor from "jodit-react";

export const Create = () => {

    const navigate = useNavigate();
    const editor = useRef(null);
    const [content, setContent] = useState("");
    const [isDisable, setIsDisable] = useState(false);
    const [imageId, setImageId] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    const config = useMemo(
        () => ({
            readonly: false,
            placeholder: "Enter content here...",
        }),
        []
    );

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const newData = { ...data, "content": content, "imageId": imageId }; // Add content to the data object
        const res = await fetch(apiUrl + "projects", {
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
            navigate("/admin/projects");
        } else {

            if (result.status == false) {
                toast.error(result.errors.slug[0])
            }
            toast.error(result.message);
        }
    };

    const handleFile = async (e) => {
        const file = e.target.files[0];

        if (file) {

            const previewUrl = URL.createObjectURL(file);
            setPreviewImage(previewUrl);
        }

        const formData = new FormData();
        formData.append("image", file);

        setIsDisable(true);

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
                setPreviewImage(null);
            } else {
                setImageId(result.data.id);
                toast.success("Image Uploaded! Now You Can Submit the Form");
            }
        } catch (error) {
            toast.error("An error occurred while uploading the image.");
            setPreviewImage(null);
        } finally {
            setIsDisable(false);
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
                                        <h4 className="h5">Create Project</h4>
                                    </div>

                                    <hr />

                                    <form onSubmit={handleSubmit(onSubmit)}>

                                        <div className="mb-3">
                                            <label htmlFor="title" className="form-label">
                                                Title
                                            </label>
                                            <input
                                                placeholder="Title"
                                                {...register("title", {
                                                    required: "The title field is required",
                                                })}
                                                type="text"
                                                id="title"
                                                className={`form-control ${errors.title ? "is-invalid" : ""
                                                    }`}
                                            />
                                            {errors.title && (
                                                <p className="invalid-feedback">
                                                    {errors.title.message}
                                                </p>
                                            )}
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="slug" className="form-label">
                                                Slug
                                            </label>
                                            <input
                                                placeholder="Slug"
                                                {...register("slug", {
                                                    required: "The slug field is required",
                                                })}
                                                type="text"
                                                id="slug"
                                                className={`form-control ${errors.slug ? "is-invalid" : ""
                                                    }`}
                                            />
                                            {errors.slug && (
                                                <p className="invalid-feedback">
                                                    {errors.slug.message}
                                                </p>
                                            )}
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="construction_type" className="form-label">
                                                Construction Type
                                            </label>
                                            <input
                                                placeholder=" Construction Type"
                                                {...register("construction_type")}
                                                type="text"
                                                id="construction_type"
                                                className={`form-control ${errors.construction_type ? "is-invalid" : ""
                                                    }`}
                                            />
                                            {errors.construction_type && (
                                                <p className="invalid-feedback">
                                                    {errors.construction_type.message}
                                                </p>
                                            )}
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="sector" className="form-label">
                                                Sector
                                            </label>
                                            <input
                                                placeholder="Sector"
                                                {...register("sector")}
                                                type="text"
                                                id="sector"
                                                className={`form-control ${errors.sector ? "is-invalid" : ""
                                                    }`}
                                            />
                                            {errors.title && (
                                                <p className="invalid-feedback">
                                                    {errors.sector.message}
                                                </p>
                                            )}
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="location" className="form-label">
                                                Location
                                            </label>
                                            <input
                                                placeholder="Location"
                                                {...register("location")}
                                                type="text"
                                                id="location"
                                                className={`form-control ${errors.location ? "is-invalid" : ""
                                                    }`}
                                            />
                                            {errors.title && (
                                                <p className="invalid-feedback">
                                                    {errors.location.message}
                                                </p>
                                            )}
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="short_desc" className="form-label">
                                                Short Description
                                            </label>
                                            <textarea
                                                placeholder="Short Description"
                                                {...register("short_desc", {
                                                    required: "The short description field is required",
                                                })}
                                                className={`form-control ${errors.short_desc ? "is-invalid" : ""
                                                    }`}
                                                rows={5}
                                                id="short_desc"
                                            ></textarea>
                                            {errors.short_desc && (
                                                <p className="invalid-feedback">
                                                    {errors.short_desc.message}
                                                </p>
                                            )}
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="content" className="form-label">
                                                Content
                                            </label>
                                            <JoditEditor
                                                ref={editor}
                                                value={content}
                                                config={config}
                                                onChange={(newContent) => setContent(newContent)}
                                            />
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
