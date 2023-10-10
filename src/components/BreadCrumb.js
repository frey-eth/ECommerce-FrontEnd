import React from "react";
import { Link } from "react-router-dom";

export const BreadCrumb = (props) => {
  const { title } = props;
  return (
    <div className="bread-crumb bg-light py-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p>
              <Link to="/" className="text-dark">
                Home/{title}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
