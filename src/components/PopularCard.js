import React from "react";
import { Link } from "react-router-dom";

const PopularCard = (props) => {
  const { data } = props;
  return (
    <div className="popular-card-wrapper m-3 gap-10 flex-grow-1">
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
        <Link className="p-btn outline" to={`/product/${data?._id}`}>
          DETAILS
        </Link>
        <button className="p-btn fill">BUY NOW</button>
      </div>
    </div>
  );
};

export default PopularCard;
