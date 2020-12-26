import React from 'react';
import style from './CompaniesHeader.module.css';

function Header() {
  return (
    <div className={style.companies_header}>
      <header>
        <h1>Companies</h1>
      </header>
    </div>
  );
}

export default Header;
