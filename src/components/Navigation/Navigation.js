import './Navigation.css';
import { NavLink, Link, useLocation } from 'react-router-dom';
import React from 'react';

function Navigation() {
  const location = useLocation();
  const setActive = ({ isActive }) =>
    isActive ? 'navigate__movies navigate__movies_type_active' : 'navigate__movies app__link';

  const isLoggedIn = location.pathname !== '/';
  const [menuActive, setMenuActive] = React.useState(false);
  return (
    <nav>
      {isLoggedIn ? (
        <>
          <div className={`navigate  navigate_burger ${menuActive ? '  navigate__open' : ''} `}>
            <div className='blur' />
            <NavLink to='/' className={setActive}>
              Главная
            </NavLink>
            <NavLink to='/movies' className={setActive}>
              Фильмы
            </NavLink>
            <NavLink to='/saved-movies' className={setActive}>
              Сохранённые фильмы
            </NavLink>
            <Link to='/profile' className='navigate__profile app__button'>
              Аккаунт
            </Link>
          </div>
          <button
            type='button'
            className={menuActive ? 'burger burger__active' : 'burger'}
            onClick={() => setMenuActive(!menuActive)}
          >
            <span className='burger__button' />
          </button>
        </>
      ) : (
        <div className='navigate'>
          <NavLink to='/signup' className='navigate__sign-up app__link'>
            Регистрация
          </NavLink>
          <NavLink to='/signin' className='navigate__sign-in app__link'>
            Войти
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
