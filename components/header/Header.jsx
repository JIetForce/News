import React from 'react';
import HeaderLink from './HeaderLink';

const Header = ({
  searchInput,
  handleSearchChange,
  handleSubmitForm,
  headerLinks = [],
  fetchNews,
  title = '',
}) => {
  return (
    <header className="header">
      <form className="header-actions" onSubmit={handleSubmitForm}>
        <ul className="header-actions__links">
          {headerLinks?.map((link) => (
            <HeaderLink
              className={`header-actions__link ${
                link?.toLowerCase() === title?.toLowerCase()
                  ? 'header-actions__link--active'
                  : ''
              }`}
              key={link}
              title={link}
              fetchNews={fetchNews}
            />
          ))}
        </ul>
        <input
          type="search"
          className="header-actions__input"
          placeholder="Search"
          value={searchInput}
          onChange={handleSearchChange}
        />
      </form>
    </header>
  );
};

export default Header;
