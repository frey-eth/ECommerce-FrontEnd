import React from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import BlogCard from "../components/BlogCard";
const Blog = () => {
  return (
    <>
      <BreadCrumb title="Blogs" />
      <div className="blog-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop by Categories</h3>
                <ul className="ps-0">
                  <li>Phone</li>
                  <li>Laptop</li>
                  <li>Smart Watch</li>
                  <li>Tablet</li>
                </ul>
              </div>
            </div>
            <div className="col-9 mb-3">
              <div className="row">
                <div className="col-6">
                  <BlogCard />
                </div>
                <div className="col-6">
                  <BlogCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
