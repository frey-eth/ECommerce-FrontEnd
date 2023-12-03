import React, { useEffect } from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/user/userSlice";
const signUpSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required"),
  mobile: Yup.string().required("Mobile is required"),
  password: Yup.string().required("Password is required"),
});

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDetail = useSelector((state) => state.auth);
  const { isSuccess, isLoading, isError, createdUser } = userDetail;
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
    },
  });
  useEffect(() => {
    if (isSuccess && createdUser) {
      navigate("/");
      formik.resetForm();
    }
  }, [isSuccess, isLoading, isError, createdUser]);
  return (
    <>
      <BreadCrumb title="Sign Up" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <form
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-15"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                />
                <div className="error">
                  {formik.touched.name ? <div>{formik.errors.name}</div> : null}
                </div>
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
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.mobile}
                  onBlur={formik.handleBlur}
                />
                <div className="error">
                  {formik.touched.mobile ? (
                    <div>{formik.errors.mobile}</div>
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
                  <div className="d-flex mt-3 justify-content-center gap-15 align-items-center">
                    <button className="button" type="submit">
                      Sign Up
                    </button>
                  </div>
                  <div className="d-flex justify-content-center gap-10 mt-3">
                    <p>Already have an Account?</p>
                    <Link to="/login" className="mt-0">
                      Login
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

export default Signup;
