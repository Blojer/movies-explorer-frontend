import React from 'react';

import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';

function MoviesCardList({
  movies,
  handleSaveMovie,
  Delete,
  savedMovies,
  calculateCardCount,
  roundedVisibleCardCount
}) {
  const location = useLocation();
  const pageSaved = location.pathname === '/saved-movies';

  const handleClick = () => {
    calculateCardCount();
  };
  return (
    <section className='movies__box'>
      <ul className='movies__list'>
        {pageSaved
          ? movies.map(item => (
              <MoviesCard
                key={item.id || item._id}
                movie={item}
                handleSaveMovie={handleSaveMovie}
                Delete={Delete}
                savedMovies={savedMovies}
              />
            ))
          : movies
              ?.slice(0, roundedVisibleCardCount)
              .map(item => (
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
        disabled={movies.length <= roundedVisibleCardCount || pageSaved}
        onClick={handleClick}
      >
        Еще
      </button>
    </section>
  );
}

export default MoviesCardList;
