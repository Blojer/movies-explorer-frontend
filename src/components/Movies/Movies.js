import './Movies.css';
import React, { useEffect } from 'react';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import apiMovies from '../../utils/MoviesApi';

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
    setLoading(false);

    // eslint-disable-next-line
  }, [searchString, isShortMovies, allMovies]);

  function search(value) {
    if (!allMovies.length) {
      setLoading(true);
      apiMovies.getMovies().then(res => {
        setVisibleMovies(res);
        localStorage.setItem('movies', JSON.stringify(res));
        setAllMovies(res);
      });
    }
    setLoading(false);

    setSearchString(value);
    localStorage.setItem('searchString', JSON.stringify(value));
  }

  function check(e) {
    const value = e.target.checked;
    setShortMovies(value);
    localStorage.setItem('isShort', value);
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
      ) : visibleMovies.length === 0 ? (
        ''
      ) : (
        <MoviesCardList
          movies={visibleMovies}
          handleSaveMovie={handleSaveMovie}
          savedMovies={savedMovies}
        />
      )}
    </main>
  );
}

export default Movies;
