import React from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { registerUser } from "../features/user/userSlice";

const loginSchema = Yup.object({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});
const Login = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(loginSchema(values));
    },
  });
  return (
    <>
      <BreadCrumb title="Login" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <h3 className="text-center mb-3">Login</h3>
              <form
                onSubmit={formik.handleBlur}
                className="d-flex flex-column gap-15"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
                <div className="error">
                  {formik.touched.email ? (
                    <div>{formik.errors.email}</div>
                  ) : null}
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                />
                <div className="error">
                  {formik.touched.password ? (
                    <div>{formik.errors.password}</div>
                  ) : null}
                </div>
                <div>
                  <Link to="/forgot-password">Forgot Password?</Link>
                  <div className="d-flex mt-3 justify-content-center gap-15 align-items-center">
                    <button className="button" type="submit">
                      Login
                    </button>
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
      </Container>
    </>
  );
};

export default Login;
