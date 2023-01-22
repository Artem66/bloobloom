/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SidebarMenu.scss';
// import arrow from './img/right-arrow.svg';
import { ReactComponent as RightArrow } from './img/right-arrow.svg';

type Props = {
  setIsShown: (shown: boolean) => void;
  isShown: boolean;
  setIsSubmenuShown: (shown: boolean) => void;
  isSubmenuShown: boolean;
};

export const SidebarMenu: React.FC<Props> = ({
  setIsShown,
  isShown,
  setIsSubmenuShown,
  isSubmenuShown,
}) => {
  const [currentCategory, setCurrentCategory] = useState('');

  return (
    <nav
      className={`sidebar-menu ${isShown ? 'menu-active' : ''}`}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <ul className="sidebar-menu-list">
        <li
          className="sidebar-menu-item"
          onMouseEnter={() => {
            setIsSubmenuShown(true);
            setCurrentCategory('spectacles');
          }}
          onMouseLeave={() => setIsSubmenuShown(false)}
        >
          <a className="sidebar-menu-item-link" href="/">spectacles</a>
          <RightArrow />
        </li>
        <li
          className="sidebar-menu-item"
          onMouseEnter={() => {
            setIsSubmenuShown(true);
            setCurrentCategory('sunglasses');
          }}
          onMouseLeave={() => setIsSubmenuShown(false)}
        >
          <a className="sidebar-menu-item-link" href="/">sunglasses</a>
          <RightArrow />
        </li>
        <li className="sidebar-menu-item">
          <a className="sidebar-menu-item-link" href="/">home try on</a>
        </li>
        <li className="sidebar-menu-item">
          <a className="sidebar-menu-item-link" href="/">pair for pair</a>
        </li>
      </ul>
      <ul
        className={`sidebar-submenu-list ${isSubmenuShown ? 'submenu-active' : ''}`}
        onMouseEnter={() => {
          setIsShown(true);
          setIsSubmenuShown(true);
        }}
        onMouseLeave={() => {
          setIsSubmenuShown(false);
          setIsSubmenuShown(false);
        }}
      >
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
        <li
          className="sidebar-submenu-item"
        >
          <Link className="sidebar-submenu-item-link" to={`${currentCategory}-women`}>women</Link>
        </li>
        <li
          className="sidebar-submenu-item"
        >
          <Link className="sidebar-submenu-item-link" to={`${currentCategory}-men`}>man</Link>
        </li>
      </ul>
    </nav>
  );
};
