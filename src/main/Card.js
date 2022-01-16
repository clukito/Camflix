import React from "react";

function Card({ image, title, url }) {
  return (
    <div className="card">
      <div>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img
            src={
              image?.medium ||
              "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png" //fallback
            }
            alt="movie preview"
          />
        </a>
      </div>

      <div className="description">
        <h1>{title}</h1>
      </div>
    </div>
  );
}
export default Card;
