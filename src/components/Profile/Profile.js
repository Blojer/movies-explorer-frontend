import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import React from 'react';
import { useForm } from 'react-hook-form';

function Profile({ handleLogout, handleUpdateUserData, message }) {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    watch,
    setValue
  } = useForm({
    mode: 'onChange'
  });

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setValue('name', currentUser.name);
    setValue('email', currentUser.email);
    // eslint-disable-next-line
  }, []);

  function onSubmit(data) {
    handleUpdateUserData(data);
  }

  const buttonOn =
    isValid && (watch('name') !== currentUser.name || watch('email') !== currentUser.email);

  return (
    <main className='profile'>
      <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
      <form className='profile__form' onSubmit={handleSubmit(onSubmit)}>
        <label className='profile__label'>
          Имя
          <input
            {...register('name', {
              required: true,
              pattern: {
                value: /^([a-яё]+(?:[ -][a-яё]+)*[ -]?|)$/i,
                message: 'Доступные символы для имени: латиница, кириллица, пробел и дефис.'
              },
              minLength: {
                value: 2,
                message: 'Минимум 2 символа'
              },
              maxLength: {
                value: 40,
                message: 'Слишком длинное имя'
              }
            })}
            className='profile__input app__input'
            type='text'
            placeholder='Имя'
          ></input>
        </label>
        <span className='login-form__error'>
          {errors?.name && <p className='login-form__error-message'>{errors?.name.message}</p>}
        </span>
        <label className='profile__label'>
          E-mail
          <input
            {...register('email', {
              required: true,
              pattern: {
                value: /.+@.+\..+/i,
                message: 'Неверный формат E-mail'
              },
              minLength: {
                value: 4,
                message: 'Минимум 4 символа'
              },
              maxLength: {
                value: 40,
                message: 'Слишком длинный E-mail'
              }
            })}
            className='profile__input  app__input'
            type='email'
            placeholder='E-mail'
          ></input>
        </label>
        <span className='login-form__error'>
          {errors?.email && <p className='login-form__error-message'>{errors?.email.message}</p>}
        </span>
        <p className='login-form__error-message login-form__error-message_type_server'>{message}</p>
        <button
          className='profile__button profile__button_type_edit  app__link'
          type='submit'
          disabled={!buttonOn}
        >
          Редактировать
        </button>
        <button
          className='profile__button profile__button_type_logout app__link'
          type='button'
          onClick={handleLogout}
        >
          Выйти из аккаунта
        </button>
      </form>
    </main>
  );
}

export default Profile;
