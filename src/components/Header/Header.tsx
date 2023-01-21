import React from 'react';
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
          <a
            href="/#"
            onMouseEnter={() => setIsShown(true)}
          >
            Menu
          </a>
        </div>
        <div className="header__logo">
          <img src={logo} alt="bloobloom logo" />
        </div>
        <div className="header__right-menu" />
      </header>
    </>
  );
};
