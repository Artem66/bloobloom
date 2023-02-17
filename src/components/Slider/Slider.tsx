/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import './Slider.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

interface Slide {
  id: number,
  order: number,
  url: string,
}

type Props = {
  slides: Slide[];
};

export const Slider: React.FC<Props> = ({ slides }) => {
  const [currentBanner, setCurrentBanner] = useState(1);

  // eslint-disable-next-line consistent-return
  const plusSlides = (num: number) => {
    if (num === -1 && currentBanner !== 1) {
      return setCurrentBanner(currentBanner - 1);
    }

    if (num === -1 && currentBanner === 1) {
      return setCurrentBanner(3);
    }

    if (num === 1 && currentBanner !== 3) {
      setCurrentBanner(currentBanner + 1);
    }

    if (num === 1 && currentBanner === 3) {
      setCurrentBanner(1);
    }
  };

  const currentSlide = (num: number) => {
    // eslint-disable-next-line no-console
    setCurrentBanner(num);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      plusSlides(1);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentBanner]);

  return (
    <>
      <div className="slideshow-container">
        {slides.map(slide => (
          <div
            key={slide.id}
            className={classNames('mySlides fade',
              { active: slide.order === currentBanner })}
          >
            <div className="slider-image" style={{ backgroundImage: `url(${slide.url})` }} onTouchEnd={() => plusSlides(1)} />
          </div>
        ))}
        <div className="arrows-navigation">
          <a className="prev" onClick={() => plusSlides(-1)}> </a>
          <a className="next" onClick={() => plusSlides(1)}> </a>
        </div>
      </div>
      <br />

      <div className="dots">
        {slides.map(slide => (
          <span
            className={classNames('dot',
              { 'dot-active': slide.order === currentBanner })}
            onClick={() => currentSlide(slide.id)}
            key={slide.id}
          />
        ))}
      </div>
    </>
  );
};
