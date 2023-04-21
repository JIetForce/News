import React from 'react';
import NewsItem from './NewsItem';

const News = ({ news, title }) => {
  const removeSourceFromTitle = (str) => {
    const separatorIndex = str.lastIndexOf('-');
    const hasSourceAtEnd =
      separatorIndex > str.length - 21 && separatorIndex !== -1;
    if (hasSourceAtEnd) {
      return str.substring(0, separatorIndex).trim();
    }
    return str;
  };

  return (
    <div className="news">
      <h2 className="news-title">{title}</h2>
      <ul className="news-list">
        {news?.map((article, index) => (
          <NewsItem
            {...article}
            title={removeSourceFromTitle(article.title)}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default News;
