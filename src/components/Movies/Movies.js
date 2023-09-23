import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
function Movies({ movies }) {
  return (
    <main className='movies'>
      <SearchForm />
      <MoviesCardList movies={movies} hidden={false} />
    </main>
  );
}

export default Movies;
