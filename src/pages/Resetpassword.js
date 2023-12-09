import React from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import Container from "../components/Container";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { resetPasswordToken } from "../features/user/userSlice";

const resetPasswordSchema = Yup.object({
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string().required("Confirm password is required"),
});

const Resetpassword = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getToken = location.pathname?.split("/")[2];
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: resetPasswordSchema,
    onSubmit: (values) => {
      if (values.password === values.confirmPassword) {
        dispatch(
          resetPasswordToken({ token: getToken, password: values.password })
        );
        navigate("/login");
      } else {
        toast.error("");
      }
    },
  });
  return (
    <>
      <BreadCrumb title="Reset Your Password" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <h3 className="text-center mb-3">Password</h3>
              <form
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-15"
              >
                <div>
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
                </div>
                <div>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="form-control"
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                    onBlur={formik.handleBlur}
                  />
                  <div className="error">
                    {formik.touched.confirmPassword ? (
                      <div>{formik.errors.confirmPassword}</div>
                    ) : null}
                  </div>
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
      </Container>
    </>
  );
};

export default Resetpassword;
