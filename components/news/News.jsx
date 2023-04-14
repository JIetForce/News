import React from 'react';
import NewsItem from './NewsItem';

const News = ({
  news,
  searchInput,
  handleSearchChange,
  handleSubmitForm,
  getTopHeadlinesNews,
}) => {
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
      <h1>News</h1>
      <form className="news-actions" onSubmit={handleSubmitForm}>
        <button type="button" onClick={getTopHeadlinesNews}>
          Top News
        </button>
        <input
          type="search"
          value={searchInput}
          onChange={(e) => handleSearchChange(e)}
        />
        <button type="submit">Find</button>
      </form>
      <ul className="news-list">
        {news.map((article, index) => (
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
