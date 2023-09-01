import React from "react";
import "./Shoescard.css";


export const IndividualCard = ({ shoeItem }) => {
  return (
    <div className="container-card">
    <div className="card-main">
      <div className="card">
        <div className="content">
          <div className="imgBx">
            <img src={shoeItem.image_url} />
          </div>

          <div className="contentBx">
            <h3>
              {shoeItem.title}
              <br />
              <span>{shoeItem.description}</span>
              <br />
              <span><b>{shoeItem.price}</b></span>
            </h3>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
