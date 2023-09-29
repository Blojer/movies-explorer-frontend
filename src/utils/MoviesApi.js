class moviesApi {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  _request(options) {
    return fetch(`${this._url}`, options).then(this._checkResponse);
  }

  getMovies() {
    return this._request({
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
  }
}
const apiMovies = new moviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default apiMovies;
