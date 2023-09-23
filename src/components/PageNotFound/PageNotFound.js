import './PageNotFound.css';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <main className='not-found'>
      <h1 className='not-found__title'>404</h1>
      <h3 className='not-found__subtitle'>Страница не найдена</h3>
      <button type='button' onClick={() => navigate(-1)} className='not-found__button app__link'>
        Назад
      </button>
    </main>
  );
}

export default PageNotFound;
