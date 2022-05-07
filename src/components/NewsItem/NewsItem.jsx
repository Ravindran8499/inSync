import React from "react";
import "./NewsItem.css";

const NewsItem = (props) => {
  const { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="card m-2 card-container">
      <img src={imageUrl} className="card-img-top" alt="..." />
      <span
        className="position-absolute top-0  badge bg-danger"
        style={{ zIndex: "1", left: "90%" }}
      >
        {source}
      </span>
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}... </h5>
        <p className="card-text">{description.slice(0, 100)}...</p>
        <p>
          Published by <strong>{author}</strong> at
          {new Date(date).toUTCString()}
        </p>
        <a href={newsUrl} className="btn btn-sm btn-dark">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
