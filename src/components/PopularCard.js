import React from "react";
import { Link } from "react-router-dom";

const PopularCard = (props) => {
  const { data } = props;
  return (
    <div className="popular-card-wrapper m-3 gap-10 flex-fill">
      <div className="wrapper">
        <img
          src={data.images[0].url}
          alt="popular"
          className="img-fluid"
          style={{ width: "260px" }}
        />
        <h1> {data.title}</h1>
      </div>
      <div className="button-wrapper">
        <p> ${data.price}</p>
        <Link className="p-btn outline m-2" to={`/product/${data?._id}`}>
          DETAILS
        </Link>
        <Link className="p-btn fill" to={`/product/${data?._id}`}>
          BUY NOW
        </Link>
      </div>
    </div>
  );
};

export default PopularCard;
