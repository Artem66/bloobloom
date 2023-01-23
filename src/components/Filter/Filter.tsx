/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './Filter.scss';

type Props = {
  handleClickColor: (shown: string) => void;
  selectedFilter: string[];
  handleRemoveFilter:(filter: string) => void;
};

export const Filter: React.FC<Props> = ({
  handleClickColor,
  selectedFilter,
  handleRemoveFilter,
}) => {
  const colors = ['black', 'tortoise', 'coloured', 'crystal', 'dark', 'bright'];
  // eslint-disable-next-line max-len
  const urlFilter = '&filters%5Bglass_variant_frame_variant_colour_tag_configuration_names%5D%5B%5D=';
  const shapes = ['square', 'rectangle', 'round', 'cat-eye'];
  // eslint-disable-next-line max-len
  const urlShapes = '&filters%5Bglass_variant_frame_variant_frame_tag_configuration_names%5D%5B%5D=';

  return (
    <>
      <div className="filter-menu">
        <div className="colours-block">
          <h2 className="filter-menu-header">Colours</h2>
          <div className="colors">
            {colors.map(color => {
              return !selectedFilter.join('').includes(color)
                ? (
                  <div
                    className="color-block"
                    // eslint-disable-next-line max-len
                    onClick={() => handleClickColor(`${urlFilter}${color}`)}
                    onKeyDown={() => {}}
                    key={color}
                  >
                    <span className={`colour-bg ${color}`}> </span>
                    <span className="color-title">{color}</span>
                  </div>
                )
                : (
                  <div
                    className="color-block selected"
                    // eslint-disable-next-line max-len
                    onClick={() => handleRemoveFilter(`${urlFilter}${color}`)}
                    onKeyDown={() => {}}
                    key={color}
                  >
                    <span className={`colour-bg ${color}`}> </span>
                    <span className="color-title">{color}</span>
                  </div>
                );
            })}
          </div>
        </div>
        <div className="shapes-block">
          <h2 className="filter-menu-header">shape</h2>
          <div className="shapes">
            {shapes.map(shape => {
              return !selectedFilter.join('').includes(shape)
                ? (
                  <div
                    className="shape-block"
                    // className={`shape-block ${selectedFilter.includes(shape) ? 'shape-block-selected' : ''}`}
                    // eslint-disable-next-line max-len
                    onClick={() => handleClickColor(`${urlShapes}${shape}`)}
                    onKeyDown={() => {}}
                    key={shape}
                  >
                    <span className="shape-title">{shape}</span>
                  </div>
                )
                : (
                  <div
                    className="shape-block selected"
                    onClick={() => handleRemoveFilter(`${urlShapes}${shape}`)}
                    onKeyDown={() => {}}
                    key={shape}
                  >
                    <span className="shape-title">{shape}</span>
                  </div>
                );
            })}
          </div>
        </div>
      </div>
      <div className="selected-filter">
        {selectedFilter.map(filter => (
          <div
            key={filter}
            onClick={() => handleRemoveFilter(filter)}
            onKeyDown={() => {}}
          >
            <span>{filter.split('=').splice(1)}</span>
            <span> X</span>
          </div>
        ))}
      </div>
    </>
  );
};
