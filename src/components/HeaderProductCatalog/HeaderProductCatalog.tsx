import React from 'react';
import './HeaderProductCatalog.scss';

type Props = {
  isFilterMenu: boolean,
  setIsFilterMenu: (shown: boolean) => void;
  category: string;
};

export const HeaderProductCatalog: React.FC<Props> = ({
  isFilterMenu,
  setIsFilterMenu,
  category,
}) => {
  return (
    <>
      <div className="header-product">
        <div className=""> </div>
        <div className="header-product-title">{category}</div>
        <div className="header-product-filter">
          <button
            className="btn-filter"
            type="button"
            onClick={event => {
              setIsFilterMenu(!isFilterMenu);

              return event;
            }}
          >
            Filter
          </button>
        </div>
      </div>
    </>
  );
};
