import React from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { forgotPasswordToken } from "../features/user/userSlice";

const forgotPasswordSchema = Yup.object({
  email: Yup.string().required("Email is required"),
});
const Forgotpassword = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
    },
    validationSchema: forgotPasswordSchema,
    onSubmit: (values) => {
      dispatch(forgotPasswordToken(values));
    },
  });
  return (
    <>
      <BreadCrumb title="Forgot Password" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="forgot-card">
              <h3 className="text-center mb-3">Reset Your Password</h3>
              <p className="text-center">
                We will send you an email to reset your password
              </p>
              <form
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-15"
              >
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
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
