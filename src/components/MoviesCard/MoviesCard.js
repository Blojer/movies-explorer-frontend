import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

function MoviesCard({ movie }) {
  const location = useLocation();
  const pageSaved = location.pathname === '/saved-movies';

  return (
    <li className='movie'>
      <img src={movie.image} alt={movie.nameRU} className='movie__image' />
      <div className='movie__info'>
        <h2 className='movie__name'>{movie.nameRU}</h2>
        <p className='movie__time'>1ч 17м</p>
      </div>
      <button
        type='button'
        className={`movie__button ${
          movie.saved
            ? 'movie__button_type_saved app__button'
            : 'movie__button_type_save app__button'
        } ${movie.saved && pageSaved ? 'movie__button_type_delete app__button' : ''}`}
      >
        Сохранить
      </button>
    </li>
  );
}

export default MoviesCard;
