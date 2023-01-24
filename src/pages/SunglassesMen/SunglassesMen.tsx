/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useCallback, useEffect, useState } from 'react';
import { Glasses } from '../../types/Glasses';
import './SunglassesMen.scss';
import { getSunglassesMen } from '../../api/glasses';
import { HeaderProductCatalog } from '../../components/HeaderProductCatalog';
import { Filter } from '../../components/Filter';
import { Loader } from '../../components/Loader';

export const SunglassesMen: React.FC = () => {
  const [spectacles, setSpectacles] = useState<Glasses[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterMenu, setIsFilterMenu] = useState(false);
  const [filterQuery, setFilterQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [spectaclesLenght, setSpectaclesLenght] = useState(0);

  const category = 'sunglasses men';

  window.onscroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
      && currentPage < currentPage + 1
      && spectacles.length > spectaclesLenght) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleClickColor = (addFilter: string) => {
    setFilterQuery(`${filterQuery}${addFilter}`);
    if (addFilter.includes('glass_variant_frame_variant_frame_tag_configuration_names')) {
      setSelectedFilter([...selectedFilter, addFilter]);
    }

    if (addFilter.includes('glass_variant_frame_variant_colour_tag_configuration_names')) {
      setSelectedFilter([...selectedFilter, addFilter]);
    }

    setCurrentPage(1);
    setSpectacles([]);
  };

  const handleRemoveFilter = (filterName: string): void => {
    setSpectacles([]);
    setCurrentPage(1);
    setFilterQuery(filterQuery.replace(filterName, ''));
    setSelectedFilter(selectedFilter.filter(filter => filter !== filterName));
  };

  const loadGlasses = useCallback(async () => {
    try {
      const res:any = await getSunglassesMen(currentPage, filterQuery);

      if (spectacles?.length !== 0) {
        setSpectacles([...spectacles, ...res.glasses]);
      }

      if (spectacles?.length === 0) {
        setSpectacles(res.glasses);
      }

      setSpectaclesLenght(spectacles.length);
      setIsLoading(false);
    } catch {
      throw new Error('Error loading phones');
    }
  }, [currentPage, filterQuery, selectedFilter]);

  useEffect(() => {
    setIsLoading(true);
    loadGlasses();
  }, [currentPage, filterQuery, selectedFilter]);

  return (
    <>
      {spectacles !== null
        ? (
          <>
            <HeaderProductCatalog
              isFilterMenu={isFilterMenu}
              setIsFilterMenu={setIsFilterMenu}
              category={category}
            />
            {isFilterMenu
              && (
                <>
                  <Filter
                    handleClickColor={handleClickColor}
                    selectedFilter={selectedFilter}
                    handleRemoveFilter={handleRemoveFilter}
                  />
                </>
              )}
            <div className="items">
              {spectacles.map(item => (
                <div className="product-item" key={item.id}>
                  <div className="product-item-title">{item.name}</div>
                  <div>
                    {item.glass_variants === null
                      ? (<p>image not found</p>)
                      : (
                        <img
                          src={
                            item?.glass_variants[0]?.media[0]?.url
                          }
                          className="product-item-image"
                          alt=""
                        />
                      )}
                  </div>
                </div>
              ))}
            </div>
            {isLoading && <Loader />}
          </>
        )
        : (<h1>Loading...</h1>)}
    </>
  );
};
