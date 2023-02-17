import React from 'react';
import { NavLink } from 'react-router-dom';
import './Info.scss';

type Props = {
  title: string,
  urlMen: string,
  urlWomen: string,
};

export const Info: React.FC<Props> = ({
  title,
  urlMen,
  urlWomen,
}) => (
  <div className="info">
    <h2>
      {title}
    </h2>
    <div className="info-buttons">
      <NavLink className="info-button" to={urlMen}>Men</NavLink>
      <NavLink className="info-button" to={urlWomen}>Women</NavLink>
    </div>
    <p>
      For every pair sold, we donate a pair
      to someone in need. #PairForPair
    </p>
  </div>
);
