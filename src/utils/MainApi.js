import { BASE_URL, MOVIES_URL } from './constants';

class mainApi {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    return res.ok
      ? res.json()
      : Promise.reject({
          status: res.status,
          message: `Ошибка: ${res.status}`
        });
  }

  _request(endpoint, options) {
    return fetch(`${this._url}${endpoint}`, options).then(this._checkResponse);
  }

  register({ name, email, password }) {
    return this._request('/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({ name, email, password })
    });
  }

  login({ email, password }) {
    return this._request('/signin', {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({ email, password })
    });
  }

  logout() {
    return this._request('/signout', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    });
  }

  getUserData() {
    return this._request('/users/me', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    });
  }
  updateUserData({ name, email }) {
    return this._request('/users/me', {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({ name, email })
    });
  }

  saveMovie(movie) {
    return this._request('/movies', {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: MOVIES_URL + movie.image.url,
        trailer: movie.trailerLink,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        thumbnail: MOVIES_URL + movie.image.formats.thumbnail.url,
        movieId: movie.id
      })
    });
  }

  deleteMovie({ _id }) {
    return this._request(`/movies/${_id} `, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    });
  }

  getMoviesUser() {
    return this._request('/movies', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    });
  }
}

const api = new mainApi({
  baseUrl: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default api;
