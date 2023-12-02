import React, { useEffect } from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getBlog } from "../features/blog/blogSlice";
import Loading from "../components/Loading";

const SingleBlog = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const blogId = location.pathname.split("/")[2];
  useEffect(() => {
    dispatch(getBlog(blogId));
  }, []);
  const blogData = useSelector((state) => state.blog.blogData);
  return (
    <>
      {blogData ? (
        <div>
          <BreadCrumb title={blogData.title} />
          <Container className="blog-wrapper home-wrapper-2 py-5">
            <div className="row">
              <div className="col-12">
                <div className="single-blog-card">
                  <Link to="/blogs" className="mb-2 d-flex align-items-center">
                    <IoIosArrowBack /> Go Back to Blogs
                  </Link>
                  <h3 className="title">{blogData.title}</h3>
                  <div className="single-inner-blog d-flex flex-row justify-content-between gap-15">
                    <img
                      src={blogData.images[0].url}
                      className="img-fluid w-50 my-4"
                      alt="blog"
                    />
                    <p className="align-self-center w-50">
                      {blogData.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default SingleBlog;
