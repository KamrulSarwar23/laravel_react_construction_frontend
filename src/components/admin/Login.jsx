import React, { useContext } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth";

const Login = () => {


  const {login} = useContext(AuthContext)

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await fetch("http://localhost:8000/api/admin/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.status == false) {
      toast.error(result.message);
    } else {
      const userinfo = {
        id: result.id,
        token: result.token,
      };

      localStorage.setItem("userinfo", JSON.stringify(userinfo));
      login(userinfo)
      navigate("/admin/dashboard");
    }

  };

  return (
    <div>
      <Header />

      <section className="login py-5">
        <div className="container d-flex justify-content-center py-5">
          <div className="row card p-5 shadow border-0">
            <div className="col-md-5">


            </div>

            <div>
              <h2 className="text-center">Login</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} action="">
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Email
                </label>
                <input
                  {...register("email", {
                    required: "This Field is Required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please enter a valid email address",
                    },
                  })}
                  type="email"
                  className={`form-control ${errors.email && "is-invalid"}`}
                />

                {errors.email && (
                  <p className="invalid-feedback">{errors.email?.message}</p>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Password
                </label>
                <input
                  {...register("password", {
                    required: "This Field is Required",
                  })}
                  type="password"
                  className={`form-control ${errors.password && "is-invalid"}`}
                />

                {errors.password && (
                  <p className="invalid-feedback">{errors.password?.message}</p>
                )}
              </div>

              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
