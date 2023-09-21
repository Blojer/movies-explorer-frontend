import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

function MoviesCard({ movie }) {
  const location = useLocation();
  const pageSaved = location.pathname === '/saved-movies';

  return (
    <div className='movie'>
      <img src={movie.image} alt={movie.nameRU} className='movie__image' />
      <div className='movie__info'>
        <h3 className='movie__name'>{movie.nameRU}</h3>
        <p className='movie__time'>1ч 17м</p>
      </div>
      <button
        className={`movie__button ${
          movie.saved ? 'movie__button_type_saved button' : 'movie__button_type_save button'
        } ${movie.saved && pageSaved ? 'movie__button_type_delete button' : ''}`}
      >
        Сохранить
      </button>
    </div>
  );
}

export default MoviesCard;
