/* eslint-disable no-trailing-spaces */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useCallback, useEffect, useState } from 'react';
import { Glasses } from '../../types/Glasses';
import './SunglassesWomen.scss';
import { getSunglassesWomen } from '../../api/glasses';

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

export const SunglassesWomen: React.FC = () => {
  const [spectacles, setSpectacles] = useState<Glasses[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterMenu, setIsFilterMenu] = useState(false);
  const [filterQuery, setFilterQuery] = useState('');
  // const [url, setUrl] = useState(`spectacles-women/glasses?page%5Blimit%5D=12&page%5Bnumber%5D=${currentPage}`);

  window.onscroll = () => {
    // eslint-disable-next-line max-len
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleClickColor = (addFilter: string) => {
    setFilterQuery(`${filterQuery}${addFilter}`);
    setSpectacles([]);
    // console.log(addFilter);
  };

  const loadGlasses = useCallback(async () => {
    try {
      const res:any = await getSunglassesWomen(currentPage, filterQuery);

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
    // console.log('ref', loadMore.current);
    loadGlasses();
  }, [currentPage, filterQuery]);

  return (
    <>
      {spectacles !== null
        ? (
          <>
            <div className="header-product">
              <div className=""> </div>
              <div className="header-product-title">sunglasses women</div>
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
            {isFilterMenu
              && (
                <div className="filter-menu">
                  <div className="colours-block">
                    <h2 className="filter-menu-header">Colours</h2>
                    <div className="colors">
                      <div
                        className="color-block"
                        // eslint-disable-next-line max-len
                        onClick={() => handleClickColor('&filters%5Bglass_variant_frame_variant_colour_tag_configuration_names%5D%5B%5D=black')}
                        onKeyDown={() => {}}
                      >
                        <span className="colour-bg black"> </span>
                        <span className="color-title">black</span>
                      </div>
                      <div
                        className="color-block"
                        // eslint-disable-next-line max-len
                        onClick={() => handleClickColor('&filters%5Bglass_variant_frame_variant_colour_tag_configuration_names%5D%5B%5D=tortoise')}
                        onKeyDown={() => {}}
                      >
                        <span className="colour-bg tortoise"> </span>
                        <span className="color-title">tortoise</span>
                      </div>
                      <div
                        className="color-block"
                        // eslint-disable-next-line max-len
                        onClick={() => handleClickColor('&filters%5Bglass_variant_frame_variant_colour_tag_configuration_names%5D%5B%5D=coloured')}
                        onKeyDown={() => {}}
                      >
                        <span className="colour-bg coloured"> </span>
                        <span className="color-title">coloured</span>
                      </div>
                      <div
                        className="color-block"
                        // eslint-disable-next-line max-len
                        onClick={() => handleClickColor('&filters%5Bglass_variant_frame_variant_colour_tag_configuration_names%5D%5B%5D=crystal')}
                        onKeyDown={() => {}}
                      >
                        <span className="colour-bg crystal"> </span>
                        <span className="color-title">crystal</span>
                      </div>
                      <div
                        className="color-block"
                        // eslint-disable-next-line max-len
                        onClick={() => handleClickColor('&filters%5Bglass_variant_frame_variant_colour_tag_configuration_names%5D%5B%5D=dark')}
                        onKeyDown={() => {}}
                      >
                        <span className="colour-bg dark"> </span>
                        <span className="color-title">dark</span>
                      </div>
                      <div
                        className="color-block"
                        // eslint-disable-next-line max-len
                        onClick={() => handleClickColor('&filters%5Bglass_variant_frame_variant_colour_tag_configuration_names%5D%5B%5D=bright')}
                        onKeyDown={() => {}}
                      >
                        <span className="colour-bg bright"> </span>
                        <span className="color-title">bright</span>
                      </div>
                    </div>
                  </div>
                  <div className="shapes-block">
                    <h2 className="filter-menu-header">shape</h2>
                    {/* “square”, “rectangle”, “round” and “cat-eye” */}
                    <div className="shapes">
                      <div
                        className="shape-block"
                        // eslint-disable-next-line max-len
                        onClick={() => handleClickColor('&filters%5Bglass_variant_frame_variant_frame_tag_configuration_names%5D%5B%5D=square')}
                        onKeyDown={() => {}}
                      >
                        {/* https://api.bloobloom.com/user/v1/sales_channels/website/collections/spectacles-men/glasses?sort%5Btype%5D=collection_relations_position&sort%5Border%5D=asc&filters%5Blens_variant_prescriptions%5D%5B%5D=fashion&filters%5Blens_variant_types%5D%5B%5D=classic&page%5Blimit%5D=12&page%5Bnumber%5D=1&filters%5Bglass_variant_frame_variant_colour_tag_configuration_names%5D%5B%5D=coloured&filters%5Bglass_variant_frame_variant_frame_tag_configuration_names%5D%5B%5D=round&filters%5Bframe_variant_home_trial_available%5D=false */}
                        <span className="shape-title">square</span>
                      </div>
                      <div
                        className="shape-block"
                        // eslint-disable-next-line max-len
                        onClick={() => handleClickColor('&filters%5Bglass_variant_frame_variant_frame_tag_configuration_names%5D%5B%5D=rectangle')}
                        onKeyDown={() => {}}
                      >
                        {/* https://api.bloobloom.com/user/v1/sales_channels/website/collections/spectacles-men/glasses?sort%5Btype%5D=collection_relations_position&sort%5Border%5D=asc&filters%5Blens_variant_prescriptions%5D%5B%5D=fashion&filters%5Blens_variant_types%5D%5B%5D=classic&page%5Blimit%5D=12&page%5Bnumber%5D=1&filters%5Bglass_variant_frame_variant_colour_tag_configuration_names%5D%5B%5D=coloured&filters%5Bglass_variant_frame_variant_frame_tag_configuration_names%5D%5B%5D=round&filters%5Bframe_variant_home_trial_available%5D=false */}
                        <span className="shape-title">rectangle</span>
                      </div>
                      <div
                        className="shape-block"
                        // eslint-disable-next-line max-len
                        onClick={() => handleClickColor('&filters%5Bglass_variant_frame_variant_frame_tag_configuration_names%5D%5B%5D=round')}
                        onKeyDown={() => {}}
                      >
                        {/* https://api.bloobloom.com/user/v1/sales_channels/website/collections/spectacles-men/glasses?sort%5Btype%5D=collection_relations_position&sort%5Border%5D=asc&filters%5Blens_variant_prescriptions%5D%5B%5D=fashion&filters%5Blens_variant_types%5D%5B%5D=classic&page%5Blimit%5D=12&page%5Bnumber%5D=1&filters%5Bglass_variant_frame_variant_colour_tag_configuration_names%5D%5B%5D=coloured&filters%5Bglass_variant_frame_variant_frame_tag_configuration_names%5D%5B%5D=round&filters%5Bframe_variant_home_trial_available%5D=false */}
                        <span className="shape-title">round</span>
                      </div>
                      <div
                        className="shape-block"
                        // eslint-disable-next-line max-len
                        onClick={() => handleClickColor('&filters%5Bglass_variant_frame_variant_frame_tag_configuration_names%5D%5B%5D=cat-eye')}
                        onKeyDown={() => {}}
                      >
                        {/* https://api.bloobloom.com/user/v1/sales_channels/website/collections/spectacles-men/glasses?sort%5Btype%5D=collection_relations_position&sort%5Border%5D=asc&filters%5Blens_variant_prescriptions%5D%5B%5D=fashion&filters%5Blens_variant_types%5D%5B%5D=classic&page%5Blimit%5D=12&page%5Bnumber%5D=1&filters%5Bglass_variant_frame_variant_colour_tag_configuration_names%5D%5B%5D=coloured&filters%5Bglass_variant_frame_variant_frame_tag_configuration_names%5D%5B%5D=round&filters%5Bframe_variant_home_trial_available%5D=false */}
                        <span className="shape-title">cat-eye</span>
                      </div>
                    </div>
                  </div>
                </div>
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
