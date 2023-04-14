import React, { useState, useEffect, useCallback } from 'react';
import News from './components/news/News';

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [news, setNews] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const getTopHeadlinesNews = useCallback(() => {
    const topHeadlinesUrl = `https://newsapi.org/v2/top-headlines?country=ua&language=uk&apiKey=${API_KEY}`;
    fetch(topHeadlinesUrl)
      .then((response) => response.json())
      .then((data) => setNews(data.articles))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    getTopHeadlinesNews();
  }, [getTopHeadlinesNews]);

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const url = `https://newsapi.org/v2/everything?language=uk&apiKey=${API_KEY}&q=${searchInput}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setNews(data.articles));
  };

  return (
    <div>
      <News
        news={news}
        searchInput={searchInput}
        handleSearchChange={handleSearchChange}
        handleSubmitForm={handleSubmitForm}
        getTopHeadlinesNews={getTopHeadlinesNews}
      />
    </div>
  );
}

export default App;
