import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ movies, Delete }) {
  const [visibleMovies, setVisibleMovies] = React.useState([]);
  const [searchString, setSearchString] = React.useState('');
  const [isShortMovies, setShortMovies] = React.useState(false);

  React.useEffect(() => {
    const filteredMovies = movies.filter(movie =>
      isShortMovies
        ? (movie.nameRU.toUpperCase().includes(searchString.toUpperCase()) ||
            movie.nameEN.toUpperCase().includes(searchString.toUpperCase())) &&
          movie.duration < 40
        : movie.nameRU.toUpperCase().includes(searchString.toUpperCase()) ||
          movie.nameEN.toUpperCase().includes(searchString.toUpperCase())
    );
    setVisibleMovies(filteredMovies);
    // eslint-disable-next-line
  }, [searchString, isShortMovies, movies]);

  function search(value) {
    setSearchString(value);
  }

  function check(e) {
    const value = e.target.checked;
    setShortMovies(value);
    localStorage.setItem('isShort', value);
  }

  return (
    <main className='movies'>
      <SearchForm
        searchString={searchString}
        search={search}
        check={check}
        checked={isShortMovies}
      />
      {visibleMovies.length === 0 ? (
        <p className='movie__nothing'>Ничего не найдено</p>
      ) : (
        <MoviesCardList movies={visibleMovies} hidden={true} Delete={Delete} />
      )}
    </main>
  );
}

export default SavedMovies;
