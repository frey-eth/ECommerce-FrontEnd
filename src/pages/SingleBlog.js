import React from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Container from "../components/Container";
const SingleBlog = () => {
  return (
    <>
      <BreadCrumb title="Dynamic Blog Name" />
      <Container className="blog-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blog" className="mb-2 d-flex align-items-center">
                  <IoIosArrowBack /> Go Back to Blogs
                </Link>
                <h3 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <div className="single-inner-blog d-flex flex-row justify-content-between gap-15">
                  <img
                    src="/images/blog-2.png"
                    className="img-fluid w-50 my-4"
                    alt="blog"
                  />
                  <p>
                    We love our customers! As a former small business marketer
                    myself, I love our passionate dedication to empowering and
                    supporting small business growth...
                  </p>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default SingleBlog;
