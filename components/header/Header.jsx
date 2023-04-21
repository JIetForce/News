import React from 'react';
import './header.less';

const Header = ({
  searchInput,
  handleSearchChange,
  fetchNews,
  handleSubmitForm,
}) => {
  return (
    <header className="header">
      <form className="header-actions" onSubmit={handleSubmitForm}>
        <button type="button" onClick={() => fetchNews()}>
          Top News
        </button>
        <button type="button" onClick={() => fetchNews('war')}>
          War
        </button>
        <input
          type="search"
          value={searchInput}
          onChange={(e) => handleSearchChange(e)}
        />
      </form>
    </header>
  );
};

export default Header;
