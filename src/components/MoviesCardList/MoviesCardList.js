import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
function MoviesCardList({ movies, hidden }) {
  return (
    <section className='movies__box'>
      <ul className='movies__list'>
        {movies.map(item => (
          <MoviesCard key={item.movieId} movie={item} />
        ))}
      </ul>
      <button type='button' className='movies__button-more app__button' disabled={hidden}>
        Еще
      </button>
    </section>
  );
}

export default MoviesCardList;
