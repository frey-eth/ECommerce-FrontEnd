import React, { useEffect } from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlog } from "../features/blog/blogSlice";

const Blog = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBlog());
  }, []);
  const blogState = useSelector((state) => state.blog.blogs);
  return (
    <>
      <BreadCrumb title="Blogs" />
      <Container class1="blog-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Blog Categories</h3>
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
              {blogState?.map((blog, index) => (
                <div key={index} className="col-6">
                  <BlogCard data={blog} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blog;
