/* eslint-disable max-len */
import React, { useCallback, useEffect, useState } from 'react';
import './HomePage.scss';
import { Slider } from '../../components/Slider';
import { getBestSellers } from '../../api/glasses';
import { Glasses } from '../../types/Glasses';

import slide1 from '../../components/Slider/img/Bloobloom-Home_page-1.jpeg';
import slide2 from '../../components/Slider/img/Bloobloom-Home_page-2.jpeg';
import slide3 from '../../components/Slider/img/Bloobloom-Home_page-3.jpeg';
import slide4 from '../../components/Slider/img/Bloobloom-Home_page-Spectacles-1.jpeg';
import slide5 from '../../components/Slider/img/Bloobloom-Home_page-Spectacles-2.jpeg';
import slide6 from '../../components/Slider/img/Bloobloom-Home_page-Spectacles-3.jpeg';
import slide7 from '../../components/Slider/img/Bloobloom-Home_page-Sunglasses-1.jpeg';
import slide8 from '../../components/Slider/img/Bloobloom-Home_page-Sunglasses-2.jpeg';
import slide9 from '../../components/Slider/img/Bloobloom-Home_page-Sunglasses-3.jpeg';
import { Info } from '../../components/Info';

const slidesFirstBlock = [
  {
    id: 1,
    order: 1,
    url: slide1,
  },
  {
    id: 2,
    order: 2,
    url: slide2,
  },
  {
    id: 3,
    order: 3,
    url: slide3,
  },
];

const slidesSpectacles = [
  {
    id: 4,
    order: 1,
    url: slide4,
  },
  {
    id: 5,
    order: 2,
    url: slide5,
  },
  {
    id: 6,
    order: 3,
    url: slide6,
  },
];

const slidesSunglasses = [
  {
    id: 5,
    order: 2,
    url: slide7,
  },
  {
    id: 6,
    order: 1,
    url: slide8,
  },
  {
    id: 7,
    order: 3,
    url: slide9,
  },
];

export const HomePage: React.FC = () => {
  const [spectacles, setSpectacles] = useState<Glasses[]>([]);

  const loadGlasses = useCallback(async () => {
    try {
      const res:any = await getBestSellers();

      setSpectacles(res.glasses);
    } catch {
      throw new Error('Error loading glasses');
    }
  }, []);

  useEffect(() => {
    loadGlasses();
  }, []);

  // console.log(spectacles);
  // console.log(slidesFirstBlock);
  // console.log(slidesSecondBlock);

  return (
    <div className="home-page-container">
      <div className="home-page-banner">
        <Info
          title="TRY 5 FRAMES AT HOME FOR FREE"
          urlMen="/spectacles-men"
          urlWomen="/spectacles-women"
        />
        <div className="slider">
          <Slider slides={slidesFirstBlock} />
        </div>
      </div>
      <div className="best-seller">
        <h2 className="best-seller-header">Best sellers</h2>
        <div className="best-seller-products">
          {spectacles.map(spectacle => (
            <div className="best-seller-product" key={spectacle.id}>
              <div className="best-seller-product-gallery">
                <div className="best-seller-product-image">
                  <img
                    src={spectacle.glass_variants[0].media[0].url}
                    alt={spectacle.name}
                  />
                </div>
              </div>
              <div className="best-seller-product-title">
                {spectacle.name}
                {' £'}
                {spectacle.cost_breakdown
                  ? (spectacle.cost_breakdown.bloobloom_price)
                  : ('out of stock')}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="home-page-banner">
        <div className="slider">
          <Slider slides={slidesSpectacles} />
        </div>
        <Info
          title="THE SPECTACLES COLLECTION"
          urlMen="/spectacles-men"
          urlWomen="/spectacles-women"
        />
      </div>
      <div className="home-page-banner">
        <Info
          title="THE SUNGLASSES COLLECTION"
          urlMen="/sunglasses-men"
          urlWomen="/sunglasses-women"
        />
        <div className="slider">
          <Slider slides={slidesSunglasses} />
        </div>
      </div>
      <div className="reviews">
        <h2 className="reviews-title">CUSTOMER LOVE</h2>
        <div className="review-block">
          <p>
            {' '}
            :) I’ve ordered from
            other glasses websites but
          </p>
        </div>
      </div>
    </div>
  );
};
