import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

import AlbumCard from '../cards/AlbumCard';

const Carousel = (props) => {
  const { options, onSelection } = props;

  const PrevArrow = (props) => {
    // eslint-disable-next-line react/prop-types
    const { className, style, onClick } = props;
    return (
      <button className={className} onClick={onClick} style={style}>
        <FaArrowAltCircleLeft size={32} color="white" />
      </button>
    );
  };

  const NextArrow = (props) => {
    // eslint-disable-next-line react/prop-types
    const { className, style, onClick } = props;
    return (
      <button className={className} style={style} onClick={onClick}>
        <FaArrowAltCircleRight size={32} color="white" />
      </button>
    );
  };

  const settings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: options.length < 5 ? options.length : 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel">
      <h2 className="heading-secondary">Albums</h2>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {options.length > 0 ? (
        <Slider {...settings}>
          {options.map((option) => (
            <AlbumCard
              key={option.id}
              album={option}
              onAlbumSelection={onSelection}
            />
          ))}
        </Slider>
      ) : (
        <div className="carousel-no-results-header">No results found</div>
      )}
    </div>
  );
};

Carousel.propTypes = {
  options: PropTypes.array,
  onSelection: PropTypes.func.isRequired,
};

Carousel.defaultProps = {
  options: [],
};

export default Carousel;
