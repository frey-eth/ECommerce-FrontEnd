import React from "react";
import { Link } from "react-router-dom";

const PopularCard = (props) => {
  const { data } = props;
  return (
    <div className="popular-card-wrapper col-3 m-3 d-flex">
      <div className="wrapper">
        <img src={data.images[0].url} alt="popular" className="img-fluid" />
        <h1> {data.title}</h1>
        <p> ${data.price}</p>
      </div>
      <div className="button-wrapper">
        <Link className="p-btn outline" to={`/product/${data?._id}`}>
          DETAILS
        </Link>
        <button className="p-btn fill">BUY NOW</button>
      </div>
    </div>
  );
};

export default PopularCard;
