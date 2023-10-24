import './MoviesCard.css';
import { MOVIES_URL } from '../../utils/constants';
import { useLocation } from 'react-router-dom';

function MoviesCard({ movie, handleSaveMovie, Delete, savedMovies }) {
  const location = useLocation();
  const pageSaved = location.pathname === '/saved-movies';

  const handelClickSaveButton = () => {
    handleSaveMovie(movie);
  };

  const handelClickDeleteButton = () => {
    Delete(movie);
  };

  const timeFormst = sec => {
    return `${Math.floor(sec / 60)}ч ${sec % 60}м  `;
  };

  const isSaved = savedMovies ? savedMovies.some(item => item.movieId === movie.id) : false;

  return (
    <li className='movie'>
      <a href={movie.trailerLink || movie.trailer} target='_blank' rel='noreferrer'>
        <img
          src={pageSaved ? movie.image : MOVIES_URL + movie.image.url}
          alt={movie.nameRU}
          className='movie__image'
        />
      </a>
      <div className='movie__info'>
        <h2 className='movie__name'>{movie.nameRU}</h2>
        <p className='movie__time'>{timeFormst(movie.duration)}</p>
      </div>
      {pageSaved ? (
        <button
          type='button'
          className='movie__button movie__button_type_delete app__button'
          onClick={handelClickDeleteButton}
        ></button>
      ) : (
        <button
          type='button'
          className={`movie__button ${
            isSaved ? 'movie__button_type_saved app__button' : 'movie__button_type_save app__button'
          } `}
          onClick={handelClickSaveButton}
        >
          Сохранить
        </button>
      )}
    </li>
  );
}

export default MoviesCard;
