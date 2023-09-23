import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ movies }) {
  const savedMovies = movies.filter(item => item.owner);

  return (
    <main className='movies'>
      <SearchForm />
      <MoviesCardList movies={savedMovies} hidden={true} />
    </main>
  );
}

export default SavedMovies;
