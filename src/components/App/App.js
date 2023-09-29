import './App.css';
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import api from '../../utils/MainApi';

import Layout from '../Layout/Layout';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';

function App() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(
    JSON.stringify(localStorage.getItem('isUserLogin')) || false
  );
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    window.onbeforeunload = () => {
      window.sessionStorage.setItem('lastRoute', JSON.stringify(window.location.pathname));
    };
  }, []);

  const checkToken = () => {
    if (isLoggedIn) {
      api
        .getUserData()
        .then(data => {
          if (!data) {
            return;
          }
          setCurrentUser(data);
          setIsLoggedIn(true);
          navigate(JSON.parse(window.sessionStorage.getItem('lastRoute') || '{}'));
        })
        .catch(err => {
          setIsLoggedIn(false);
        });
    }
  };

  React.useEffect(() => {
    checkToken();
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    if (isLoggedIn) {
      api
        .getMoviesUser()
        .then(res => {
          setSavedMovies(res);
        })
        .catch(err => console.log(err));
    }
    // eslint-disable-next-line
  }, []);

  function handleRegister(data) {
    api
      .register(data)
      .then(res => {
        if (res) {
          handleLogin(data);
        }
      })
      .catch(err => {
        if (err.status === 409) {
          return setMessage('Пользователь с таким email уже существует.');
        }
        if (err.status === 400) {
          return setMessage('При регистрации пользователя произошла ошибка.');
        }
        setMessage('На сервере произошла ошибка.');
      });
  }

  function handleLogin(data) {
    api
      .login(data)
      .then(res => {
        JSON.stringify(localStorage.setItem('isUserLogin', true));
        setIsLoggedIn(true);
        setCurrentUser(res);
        navigate('/movies', { replace: true });
      })
      .catch(err => {
        console.log(err);
        if (err.status === 401) {
          return setMessage(
            'При авторизации произошла ошибка. Вы ввели неправильный логин или пароль. '
          );
        }
        setMessage('На сервере произошла ошибка.');
      });
  }

  function handleLogout() {
    api
      .logout()
      .then(res => {
        localStorage.removeItem('movies');
        localStorage.removeItem('visibleMovies');
        localStorage.removeItem('searchString');
        localStorage.removeItem('isShort');
        localStorage.removeItem('isUserLogin');
        setIsLoggedIn(false);
        navigate('/', { replace: true });
      })
      .catch(err => console.log(err));
  }

  function handleUpdateUserData(data) {
    api
      .updateUserData(data)
      .then(res => {
        setCurrentUser(res);
        setMessage('Данные успешно обновлены');
      })
      .catch(err => {
        if (err.status === 409) {
          return setMessage('Пользователь с таким email уже существует.');
        }
        if (err.status === 404) {
          return setMessage('Пользователя с таким id не найдено');
        }
        if (err.status === 400) {
          return setMessage('При регистрации пользователя произошла ошибка.');
        }
        setMessage('При обновлении профиля произошла ошибка.');
      });
  }

  function handleSaveMovie(movie) {
    const isSavedMovie = savedMovies.some(item => item.movieId === movie.id);
    if (isSavedMovie) {
      const savedMovie = savedMovies.find(res => res.movieId === movie.id);
      handleDeleteMovie(savedMovie);
    } else {
      api
        .saveMovie(movie)
        .then(res => {
          setSavedMovies([...savedMovies, res]);
        })
        .catch(err => console.log(err));
    }
  }

  function handleDeleteMovie(movie) {
    api
      .deleteMovie(movie)
      .then(() => {
        const list = savedMovies.filter(res => (res._id === movie._id ? false : true));

        setSavedMovies(list);
      })
      .catch(err => console.log(err));
  }

  function resetMessage() {
    setMessage('');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app' onClick={message !== '' ? resetMessage : null}>
        <Routes>
          <Route path='/' element={<Layout isLoggedIn={isLoggedIn} />}>
            <Route index element={<Main />} />
            <Route
              path='movies'
              element={
                <ProtectedRoute
                  element={Movies}
                  isLoggedIn={isLoggedIn}
                  handleSaveMovie={handleSaveMovie}
                  savedMovies={savedMovies}
                />
              }
            />
            <Route
              path='saved-movies'
              element={
                <ProtectedRoute
                  element={SavedMovies}
                  isLoggedIn={isLoggedIn}
                  movies={savedMovies}
                  Delete={handleDeleteMovie}
                />
              }
            />
            <Route
              path='profile'
              element={
                <ProtectedRoute
                  element={Profile}
                  isLoggedIn={isLoggedIn}
                  handleLogout={handleLogout}
                  handleUpdateUserData={handleUpdateUserData}
                  message={message}
                />
              }
            />
          </Route>

          <Route
            path='/signup'
            element={<Register onRegister={handleRegister} errorMassage={message} />}
          />
          <Route path='/signin' element={<Login onLogin={handleLogin} errorMassage={message} />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
