import React from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import { Link } from "react-router-dom";

const Resetpassword = () => {
  return (
    <>
      <BreadCrumb title="Reset Your Password" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="login-card">
                <h3 className="text-center mb-3">Sign Up</h3>
                <form action="" className="d-flex flex-column gap-15">
                 
                  <div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="confirmpassword"
                      placeholder="Confirm Password"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <div className="d-flex mt-3 justify-content-center gap-15 align-items-center">
                      <button className="button" type="submit">
                        OK
                      </button>
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

export default Resetpassword;
