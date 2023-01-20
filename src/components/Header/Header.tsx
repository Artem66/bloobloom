import React from 'react';
import './Header.scss';
import logo from './img/logo.svg';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__left-menu">
        <a href="/#">Menu</a>
      </div>
      <div className="header__logo">
        <img src={logo} alt="bloobloom logo" />
      </div>
      <div className="header__right-menu" />
    </header>
  );
};
