import React from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import Container from "../components/Container";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../features/user/userSlice";

const profileSchema = Yup.object({
  email: Yup.string().required("Email is required"),
  name: Yup.string().required("Name is required"),
  mobile: Yup.string().required("Mobile is required"),
});

const Profile = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.auth.user);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: userState?.name,
      email: userState?.email,
      mobile: userState?.mobile,
    },
    validationSchema: profileSchema,
    onSubmit: (values) => {
      dispatch(updateUser(values));
    },
  });
  return (
    <>
      <BreadCrumb title="My Profile" />
      <Container class1="cart-wrapper home-wrapper-2 py-3">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <h3 className="text-center text-uppercase">Update Profile</h3>
            </div>
          </div>
          <div className="col-12 px-5">
            <form onSubmit={formik.handleSubmit} className="">
              <div className="form-group p-2">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error">{formik.errors.email}</div>
                ) : null}
              </div>
              <div class="form-group p-2">
                <label for="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  id="name"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
              </div>
              {formik.touched.name && formik.errors.name ? (
                <div className="error">{formik.errors.name}</div>
              ) : null}
              <div className="d-flex flex-column p-2">
                <label htmlFor="mobile" id="mobile">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="mobile"
                  name="mobile"
                  placeholder="Phone Number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mobile}
                />
                {formik.touched.mobile && formik.errors.mobile ? (
                  <div className="error">{formik.errors.mobile}</div>
                ) : null}
              </div>

              <div className="d-flex flex-row justify-content-end">
                <button type="submit" className="button m-2">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Profile;
