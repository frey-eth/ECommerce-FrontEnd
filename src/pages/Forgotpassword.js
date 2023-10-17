import React from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Forgotpassword = () => {
  return (
    <>
      <BreadCrumb title="Forgot Password" />
      <Container className="login-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <div className="forgot-card">
                <h3 className="text-center mb-3">Reset Your Password</h3>
                <p className="text-center">
                  We will send you an email to reset your password
                </p>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                  <div className="d-flex mt-3 justify-content-center gap-15 align-items-center flex-column">
                    <button className="button" type="submit">
                      Submit
                    </button>
                    <Link to="/login" className="text-dark">
                      Cancel
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default Forgotpassword;
