import React, { useState, useRef, useMemo } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import SideBar from "../../common/SideBar";
import { useForm } from "react-hook-form";
import { apiUrl, token, fileUrl } from "../../common/http";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import JoditEditor from "jodit-react";

export const Update = () => {

    const navigate = useNavigate();
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [article, setArticle] = useState('');
    const [isDisable, setIsDisable] = useState(false);
    const [imageId, setImageId] = useState(null);
    const params = useParams();
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
    } = useForm({
        defaultValues: async () => {
            const res = await fetch(apiUrl + 'articles/' + params.id, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Bearer ${token()}`,
                },
            });

            const result = await res.json();
            setContent(result.data.content);
            setArticle(result.data);

            return {
                title: result.data.title,
                slug: result.data.slug,
                author: result.data.author,
                content: result.data.content,
                status: result.data.status,
            }
        }
    });

    const onSubmit = async (data) => {
        const newData = { ...data, "content": content, "imageId": imageId };
        const res = await fetch(apiUrl + "articles/" + params.id, {
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
            navigate("/admin/articles");
        } else {
            toast.error(result.message);
        }
    };

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
            toast.error("An error occurred while uploading the image.");
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
                                        <h4 className="h5">Edit Article</h4>
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
                                            <label htmlFor="author" className="form-label">
                                                Author
                                            </label>
                                            <input
                                                placeholder="Author"
                                                {...register("author")}
                                                type="text"
                                                id="author"
                                                className={`form-control ${errors.author ? "is-invalid" : ""
                                                    }`}
                                            />
                                            {errors.author && (
                                                <p className="invalid-feedback">
                                                    {errors.author.message}
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
                                            ) : article.image && <img width={150} height={180} src={fileUrl + 'uploads/articles/small/' + article.image} alt="" />}
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
