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

  const newsItems = news?.map((article, index) => (
    <NewsItem
      {...article}
      title={removeSourceFromTitle(article.title)}
      key={index}
    />
  ));

  return (
    <div className="news">
      <h1 className="news-title">{title}</h1>
      <ul className="news-list">{newsItems}</ul>
    </div>
  );
};

export default News;
