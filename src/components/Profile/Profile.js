import './Profile.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  const [name, setName] = React.useState('Виталий');
  const [email, setEmail] = React.useState('poctha@yandex.ru');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  return (
    <main className='profile'>
      <h1 className='profile__title'>Привет, {name}!</h1>
      <form className='profile__form'>
        <label className='profile__label'>
          Имя
          <input
            className='profile__input app__input'
            type='text'
            required
            minLength='2'
            maxLength='30'
            value={name}
            onChange={handleChangeName}
          ></input>
        </label>
        <label className='profile__label'>
          E-mail
          <input
            className='profile__input  app__input'
            type='email'
            required
            value={email}
            onChange={handleChangeEmail}
          ></input>
        </label>
        <button className='profile__button profile__button_type_edit  app__link' type='submit'>
          Редактировать
        </button>
        <button className='profile__button profile__button_type_logout' type='button'>
          <Link className='profile__link app__link' to='/'>
            Выйти из аккаунта
          </Link>
        </button>
      </form>
    </main>
  );
}

export default Profile;
