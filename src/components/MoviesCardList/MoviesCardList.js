import React from 'react';

import './MoviesCardList.css';
import {
  DESKTOP_ROW_CARD_COUNT,
  TABLE_ROW_CARD_COUNT,
  MOBILE_ROW_CARD_COUNT,
  DESKTOP_INITIAL_CARD_COUNT,
  TABLE_INITIAL_CARD_COUNT,
  MOBILE_INITIAL_CARD_COUNT
} from '../../utils/constants';

import { useMediaQuery } from '../../hooks/useMediaQuery';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, handleSaveMovie, Delete, savedMovies }) {
  const isDesktop = useMediaQuery('(min-width: 1100px)');
  const isTablet = useMediaQuery('(min-width: 690px)');

  const cardColumnCount = isDesktop
    ? DESKTOP_ROW_CARD_COUNT
    : isTablet
    ? TABLE_ROW_CARD_COUNT
    : MOBILE_ROW_CARD_COUNT;

  const initialCardCount = isDesktop
    ? DESKTOP_INITIAL_CARD_COUNT
    : isTablet
    ? TABLE_INITIAL_CARD_COUNT
    : MOBILE_INITIAL_CARD_COUNT;

  const [visibleCardCount, setVisibleCardCount] = React.useState(initialCardCount);

  const roundedVisibleCardCount = Math.floor(visibleCardCount / cardColumnCount) * cardColumnCount;

  const handleClick = () => {
    calculateCardCount();
  };

  const calculateCardCount = () => {
    if (isDesktop) {
      return setVisibleCardCount(visibleCardCount + DESKTOP_ROW_CARD_COUNT);
    }

    if (isTablet) {
      return setVisibleCardCount(visibleCardCount + TABLE_ROW_CARD_COUNT);
    }

    setVisibleCardCount(visibleCardCount + MOBILE_ROW_CARD_COUNT);
  };

  return (
    <section className='movies__box'>
      <ul className='movies__list'>
        {movies?.slice(0, roundedVisibleCardCount).map(item => (
          <MoviesCard
            key={item.id || item._id}
            movie={item}
            handleSaveMovie={handleSaveMovie}
            Delete={Delete}
            savedMovies={savedMovies}
          />
        ))}
      </ul>
      <button
        type='button'
        className='movies__button-more app__button'
        disabled={movies.length <= visibleCardCount}
        onClick={handleClick}
      >
        Еще
      </button>
    </section>
  );
}

export default MoviesCardList;
