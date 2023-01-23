/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarMenu.scss';
// import arrow from './img/right-arrow.svg';
import { ReactComponent as RightArrow } from './img/right-arrow.svg';

type Props = {
  setIsShown: (shown: boolean) => void;
  isShown: boolean;
  setIsSubmenuShown: (shown: boolean) => void;
  isSubmenuShown: boolean;
  currentCategory: string,
  setCurrentCategory: (category: string) => void;
};

export const SidebarMenu: React.FC<Props> = ({
  setIsShown,
  isShown,
  setIsSubmenuShown,
  isSubmenuShown,
  currentCategory,
  setCurrentCategory,
}) => {
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
          spectacles
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
          sunglasses
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
        <Link
          className="sidebar-submenu-item sidebar-submenu-item-link"
          to={`${currentCategory}-women`}
          // onTouchEnd={() => {
          //   setIsSubmenuShown(false);
          //   setIsShown(false);
          // }}
          onClick={() => {
            setIsSubmenuShown(false);
            setIsShown(false);
          }}
        >
          women
        </Link>
        <Link
          to={`${currentCategory}-men`}
          className="sidebar-submenu-item sidebar-submenu-item-link"
          onClick={() => {
            setIsSubmenuShown(false);
            setIsShown(false);
          }}
        >
          {/* <Link
            className="sidebar-submenu-item-link"
            to={`${currentCategory}-men`}
            onTouchEnd={() => {
              setIsSubmenuShown(false);
              setIsShown(false);
            }}
          > */}
          man
          {/* </Link> */}
        </Link>
      </ul>
    </nav>
  );
};
