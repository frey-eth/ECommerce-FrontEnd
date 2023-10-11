import React from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <BreadCrumb title="Login" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="login-top"></div>
        <div className="login-bottom"></div>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="login-card">
                <h3 className="text-center mb-3">Login</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <Link to="/forgot-password">Forgot Password?</Link>
                    <div className="d-flex mt-3 justify-content-center gap-15 align-items-center">
                      <button className="button">Login</button>
                    </div>
                    <div className="d-flex justify-content-center gap-10 mt-3">
                      <p>Don't have an Account?</p>
                      <Link to="/signup" className="mt-0">
                        Sign Up
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
