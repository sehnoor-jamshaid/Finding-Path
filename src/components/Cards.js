import React from "react";
import {IMAGE_CDN} from './utils/constants'

const Cards = ({data}) => {
    console.log("data",data)
    const {avgRatingString,name,costForTwo,cuisines,cloudinaryImageId}=data.info
 console.log(avgRatingString,name,costForTwo,cuisines,cloudinaryImageId)
    return (
      <div className="card-container">
        <div className="img_cont">
          <img alt="card" src={IMAGE_CDN+cloudinaryImageId} className="image" />
        </div>
        <div className="title">
          <h3>{name}</h3>
        </div>
        <div className="content_cont">
          <p>{avgRatingString}</p>
          <p>{costForTwo}</p>
        </div>
      </div>
    );
  };

  export default Cards;