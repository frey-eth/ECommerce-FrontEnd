import React, { useEffect, useState } from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/user/userSlice";

const loginSchema = Yup.object({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDetail = useSelector((state) => state.auth);
  const { isSuccess, isLoading, isError, user } = userDetail;
  const [forceUpdate, setForceUpdate] = useState(false);

  useEffect(() => {
    if (isSuccess && user) {
      setTimeout(() => {
        formik.resetForm();
        navigate("/");
        navigate(0); // Navigate back to the previous location
      }, 2000);
    }
  }, [isSuccess, isLoading, isError, user, forceUpdate]);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
      setForceUpdate((prev) => !prev);
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
                onSubmit={formik.handleSubmit}
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
