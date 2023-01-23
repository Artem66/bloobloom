/* eslint-disable no-trailing-spaces */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useCallback, useEffect, useState } from 'react';
import { Glasses } from '../../types/Glasses';
import './SpectaclesMen.scss';
import { getSpectaclesMen } from '../../api/glasses';
import { HeaderProductCatalog } from '../../components/HeaderProductCatalog';
import { Filter } from '../../components/Filter';

// type FrameVariant = {
// };

// type Media = {
//   file_location: string,
//   file_name: string,
//   id: number,
//   medium_type: string,
//   mime_type: string,
//   original_file_name: string,
//   position: number,
//   size: number
//   url: string,
// };

export const SpectaclesMen: React.FC = () => {
  const [spectacles, setSpectacles] = useState<Glasses[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterMenu, setIsFilterMenu] = useState(false);
  const [filterQuery, setFilterQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string[]>([]);

  const category = 'spectacles man';

  window.onscroll = () => {
    // eslint-disable-next-line max-len
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      setCurrentPage(currentPage + 1);
    }
  };

  // eslint-disable-next-line max-len
  const handleClickColor = (addFilter: string) => {
    setFilterQuery(`${filterQuery}${addFilter}`);
    // eslint-disable-next-line max-len
    if (addFilter.includes('glass_variant_frame_variant_frame_tag_configuration_names')) {
      setSelectedFilter([...selectedFilter, addFilter]);
    }

    // eslint-disable-next-line max-len
    if (addFilter.includes('glass_variant_frame_variant_colour_tag_configuration_names')) {
      setSelectedFilter([...selectedFilter, addFilter]);
    }
    // eslint-disable-next-line max-len

    setSpectacles([]);
  };

  const handleRemoveFilter = (filterName: string): void => {
    // console.log('remove???');
    setFilterQuery(filterQuery.replace(filterName, ''));
    setSpectacles([]);
    setSelectedFilter(selectedFilter.filter(filter => filter !== filterName));
  };

  const loadGlasses = useCallback(async () => {
    try {
      const res:any = await getSpectaclesMen(currentPage, filterQuery);

      if (spectacles?.length !== 0) {
        setSpectacles([...spectacles, ...res.glasses]);
      }

      if (spectacles?.length === 0) {
        setSpectacles(res.glasses);
      }
    } catch {
      throw new Error('Error loading phones');
    }
  }, [currentPage, filterQuery]);

  useEffect(() => {
    loadGlasses();
  }, [currentPage, filterQuery]);

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
                <Filter
                  handleClickColor={handleClickColor}
                  selectedFilter={selectedFilter}
                  handleRemoveFilter={handleRemoveFilter}
                />
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
          </>
        )
        : (<h1>Loading...</h1>)}
    </>
  );
};
