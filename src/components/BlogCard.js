import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="col-3">
      <div className="blog-card">
        <Link to="/" className="blog-card-link">
          <div className="card-image">
            <img src="/images/blog-1.jpg" alt="blog" className="img-fluid" />
            <div className="blog-content">
              <p className="date">07 Oct, 2023</p>
              <h5 className="title">A beautiful sunday morning renaissane</h5>
              <p className="desc">
                We love our customers! As a former small business marketer
                myself, I love our passionate dedication to empowering and
                supporting small business growth...
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
