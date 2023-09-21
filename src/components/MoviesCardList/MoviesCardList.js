import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
function MoviesCardList({ movies, hidden }) {
  return (
    <section className='movies__box'>
      <div className='movies__list'>
        {movies.map(item => (
          <MoviesCard key={item.movieId} movie={item} />
        ))}
      </div>
      <button className='movies__button-more button' disabled={hidden}>
        Еще
      </button>
    </section>
  );
}

export default MoviesCardList;
