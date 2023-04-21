import React, { useState, useEffect, useCallback } from 'react';
import News from './components/news/News';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const API_KEY = process.env.REACT_APP_API_KEY;

const headerLinks = [
  'Top News',
  'Education',
  'Health',
  'Money',
  'Travel',
  'Business',
  'Science',
  'Technology',
];

function App() {
  const [news, setNews] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState('Top News');

  const fetchNews = useCallback((tag = '', search = '') => {
    const baseUrl = `https://newsapi.org/v2/everything?language=en&apiKey=${API_KEY}`;
    let url = `https://newsapi.org/v2/top-headlines?country=us&language=en&apiKey=${API_KEY}`;

    setIsLoading(true);
    setTitle('Top News');

    if (tag) {
      url = `${baseUrl}&q=${tag}`;
      setSearchInput('');
      setTitle(tag);
    } else if (search) {
      url = `${baseUrl}&q=${search}`;
      setTitle(search);
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setNews(data.articles);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    setIsLoading(true);
    fetchNews('', searchInput);
    setSearchInput('');
  };

  return (
    <div>
      <Header
        searchInput={searchInput}
        handleSearchChange={handleSearchChange}
        handleSubmitForm={handleSubmitForm}
        headerLinks={headerLinks}
        fetchNews={fetchNews}
        title={title}
      />
      <section className="wrapper">
        {isLoading ? <p>Loading...</p> : <News news={news} title={title} />}
      </section>
      <Footer />
    </div>
  );
}

export default App;
