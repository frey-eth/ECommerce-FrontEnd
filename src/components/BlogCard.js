import React from "react";
import { Link } from "react-router-dom";

const BlogCard = (props) => {
  const { data } = props;
  const options = { year: "numeric", month: "long", day: "numeric" };

  return (
    <div className="blog-card d-flex h-100" style={data?.style}>
      <Link to={`/blog/${data?._id}`} className="blog-card-link">
        <div className="card-image">
          <img src={data?.images[0].url} alt="blog" className="img-fluid" />
          <div className="blog-content">
            <p className="date">
              {Intl.DateTimeFormat("en-US", options).format(
                new Date(data?.createdAt)
              )}
            </p>
            <h5 className="title">{data?.title}</h5>
            <p className="desc">{data?.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
