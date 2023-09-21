import './Profile.css';
import React from 'react';

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
      <h2 className='profile__title'>Привет, {name}!</h2>
      <form className='profile__form'>
        <label className='profile__label'>
          Имя
          <input
            className='profile__input'
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
            className='profile__input'
            type='email'
            required
            value={email}
            onChange={handleChangeEmail}
          ></input>
        </label>
        <button className='profile__button profile__button_type_edit link' type='submit'>
          Редактировать
        </button>
        <button className='profile__button profile__button_type_logout link' type='button'>
          Выйти из аккаунта
        </button>
      </form>
    </main>
  );
}

export default Profile;
