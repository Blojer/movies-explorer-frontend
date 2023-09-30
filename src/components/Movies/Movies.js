import './Movies.css';
import React, { useEffect } from 'react';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import apiMovies from '../../utils/MoviesApi';
import { useMediaQuery } from '../../hooks/useMediaQuery';

import {
  DESKTOP_ROW_CARD_COUNT,
  TABLE_ROW_CARD_COUNT,
  MOBILE_ROW_CARD_COUNT,
  DESKTOP_INITIAL_CARD_COUNT,
  TABLE_INITIAL_CARD_COUNT,
  MOBILE_INITIAL_CARD_COUNT
} from '../../utils/constants';

function Movies({ handleSaveMovie, savedMovies }) {
  const [allMovies, setAllMovies] = React.useState(
    JSON.parse(localStorage.getItem('movies')) || []
  );
  const [visibleMovies, setVisibleMovies] = React.useState(
    JSON.parse(localStorage.getItem('visibleMovies')) || []
  );
  const [searchString, setSearchString] = React.useState(
    JSON.parse(localStorage.getItem('searchString')) || ''
  );
  const [isShortMovies, setShortMovies] = React.useState(
    JSON.parse(localStorage.getItem('isShort') || false)
  );

  const [isLoading, setLoading] = React.useState(false);
  const [nothing, setNothing] = React.useState(true);

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

  const calculateCardCount = () => {
    if (isDesktop) {
      return setVisibleCardCount(visibleCardCount + DESKTOP_ROW_CARD_COUNT);
    }

    if (isTablet) {
      return setVisibleCardCount(visibleCardCount + TABLE_ROW_CARD_COUNT);
    }

    setVisibleCardCount(visibleCardCount + MOBILE_ROW_CARD_COUNT);
  };
  useEffect(() => {
    setLoading(true);
    const filteredMovies = allMovies.filter(movie =>
      isShortMovies
        ? (movie.nameRU.toUpperCase().includes(searchString.toUpperCase()) ||
            movie.nameEN.toUpperCase().includes(searchString.toUpperCase())) &&
          movie.duration < 40
        : movie.nameRU.toUpperCase().includes(searchString.toUpperCase()) ||
          movie.nameEN.toUpperCase().includes(searchString.toUpperCase())
    );
    setVisibleMovies(localStorage.setItem('visibleMovies', JSON.stringify(filteredMovies)));
    setVisibleMovies(filteredMovies);
    if (visibleMovies.length !== 0) {
      setNothing(false);
    }
    setLoading(false);

    // eslint-disable-next-line
  }, [searchString, isShortMovies, allMovies]);

  function search(value) {
    setLoading(true);

    if (!allMovies.length) {
      setLoading(true);
      apiMovies.getMovies().then(res => {
        setVisibleMovies(res);
        localStorage.setItem('movies', JSON.stringify(res));
        setAllMovies(res);
      });
    }
    setVisibleCardCount(initialCardCount);
    setSearchString(value);
    localStorage.setItem('searchString', JSON.stringify(value));
    setLoading(false);
  }

  function check(e) {
    setLoading(true);

    const value = e.target.checked;
    setShortMovies(value);
    localStorage.setItem('isShort', value);
    setLoading(false);
  }

  return (
    <main className='movies'>
      <SearchForm
        search={search}
        searchString={searchString}
        check={check}
        checked={isShortMovies}
      />

      {isLoading ? (
        <Preloader />
      ) : nothing ? (
        ''
      ) : visibleMovies.length !== 0 ? (
        <MoviesCardList
          movies={visibleMovies}
          handleSaveMovie={handleSaveMovie}
          savedMovies={savedMovies}
          calculateCardCount={calculateCardCount}
          roundedVisibleCardCount={roundedVisibleCardCount}
        />
      ) : (
        <p className='movie__nothing'>Ничего не найдено</p>
      )}
    </main>
  );
}

export default Movies;
