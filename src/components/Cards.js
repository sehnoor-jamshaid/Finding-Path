import React from "react";
import { IMAGE_CDN } from "../utils/constants";
import { Link } from "react-router-dom";
const Cards = ({ data }) => {
  console.log("data", data);
  const { avgRatingString, name, costForTwo, cuisines, cloudinaryImageId,id } =
    data.info;
  console.log(avgRatingString, name, costForTwo, cuisines, cloudinaryImageId);
  return (
    <Link to={`restuarant/${id}`}>
      {" "}
      <div className="card-container">
        <div className="img_cont">
          <img
            alt="card"
            src={IMAGE_CDN + cloudinaryImageId}
            className="image"
          />
        </div>
        <div className="title">
          <h3>{name}</h3>
        </div>
        <div className="content_cont">
          <p>{avgRatingString}</p>
          <p>{costForTwo}</p>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
