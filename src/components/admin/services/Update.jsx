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
  const [service, setService] = useState('');
  const [isDisable, setIsDisable] = useState(false);
  const [imageId, setImageId] = useState(null);
  const params = useParams();

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
      const res = await fetch(apiUrl + 'services/' + params.id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token()}`,
        },
      });
  
      const result = await res.json();
      setContent(result.data.content);
      setService(result.data);
      return {
        title: result.data.title,
        slug: result.data.slug,
        short_desc: result.data.short_desc,
        status: result.data.status,
      }
    }
  });

  const onSubmit = async (data) => {
    const newData = { ...data, "content": content, "imageId" : imageId};
    const res = await fetch(apiUrl + "services/" + params.id, {
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
      navigate("/admin/services");
    } else {
      toast.error(result.message);
    }
  };

  const handleFile = async (e) => {
      const formData = new FormData();
      const file = e.target.files[0];
      formData.append("image", file);

      await fetch(apiUrl + "temp-images", {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token()}`,
        },
        body: formData
      }).then(response => response.json())
        .then(result => {
            if (result.status == false) {
                toast.error(result.errors.image[0])
            }else{
                setImageId(result.data.id)
                toast.success('Image Upload! Now You Can Update Service')
            }
        })
  }

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
                    <h4 className="h5">Create Service</h4>
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
                        className={`form-control ${
                          errors.title ? "is-invalid" : ""
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
                        className={`form-control ${
                          errors.slug ? "is-invalid" : ""
                        }`}
                      />
                      {errors.slug && (
                        <p className="invalid-feedback">
                          {errors.slug.message}
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
                        className={`form-control ${
                          errors.short_desc ? "is-invalid" : ""
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

                      {
                        service.image && <img width={150} height={180} src={fileUrl + 'uploads/services/small/'+ service.image } alt="" />
                      }

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
                        className={`form-control ${
                          errors.status ? "is-invalid" : ""
                        }`}>
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
                      Update
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
