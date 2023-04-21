import React from 'react';

const HeaderLink = ({
  className = 'header-actions__link',
  fetchNews,
  title,
}) => {
  return (
    <li className={className} onClick={() => fetchNews(title)}>
      {title}
    </li>
  );
};

export default HeaderLink;
