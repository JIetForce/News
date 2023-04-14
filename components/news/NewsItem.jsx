import React from 'react';

const NewsItem = ({ title, urlToImage, url, source }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="news-item"
    >
      <img src={urlToImage} alt="img" />
      <h3>{title}</h3>
      <p>{source?.name}</p>
    </a>
  );
};

export default NewsItem;
