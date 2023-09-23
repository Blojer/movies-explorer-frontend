import { movies } from '../../utils/moviesList';

import './App.css';
import { Routes, Route } from 'react-router-dom';

import Layout from '../Layout/Layout';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='movies' element={<Movies movies={movies} />} />
          <Route path='saved-movies' element={<SavedMovies movies={movies} />} />
          <Route path='profile' element={<Profile />} />
        </Route>

        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
