import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from './img/logo.svg';

type Props = {
  setIsShown: (shown: boolean) => void;
};

export const Header: React.FC<Props> = ({ setIsShown }) => {
  return (
    <>
      <header className="header">
        <div
          className="header__left-menu"
          onMouseLeave={() => setIsShown(false)}
        >
          <Link
            to="/"
            onMouseEnter={() => setIsShown(true)}
          >
            Menu
          </Link>
        </div>
        <div className="header__logo">
          <img src={logo} alt="bloobloom logo" />
        </div>
        <div className="header__right-menu" />
      </header>
    </>
  );
};
