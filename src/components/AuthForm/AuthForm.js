import './AuthForm.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function AuthForm({
  title,
  buttonText,
  text,
  link,
  linkText,
  registerForm,
  submitForm,
  errorMassage
}) {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit
  } = useForm({
    mode: 'onChange'
  });

  function onSubmit(data) {
    submitForm(data);
  }

  return (
    <div className='login-form'>
      <Link to='/'>
        <img className='login-form__logo app__button' src={logo} alt='Логотип' />
      </Link>
      <h1 className='login-form__title'>{title}</h1>
      <form className='login-form__body' name='login' noValidate onSubmit={handleSubmit(onSubmit)}>
        {registerForm ? (
          <label className='login-form__label'>
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
                  message: 'Слишком длинный E-mail'
                }
              })}
              type='text'
              className='login-form__input app__input'
              placeholder='Имя'
              autoComplete='username'
            />
            <span className='login-form__error'>
              {errors?.name && <p className='login-form__error-message'>{errors?.name.message}</p>}
            </span>
          </label>
        ) : null}
        <label className='login-form__label'>
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
            type='email'
            className='login-form__input app__input'
            placeholder='E-mail'
            autoComplete='email'
          />
          <span className='login-form__error'>
            {errors?.email && <p className='login-form__error-message'>{errors?.email.message}</p>}
          </span>
        </label>
        <label className='login-form__label'>
          Пароль
          <input
            {...register('password', {
              required: true,
              minLength: {
                value: 4,
                message: 'Минимум 4 символа'
              },
              maxLength: {
                value: 40,
                message: 'Слишком длинный E-mail'
              }
            })}
            type='password'
            className='login-form__input  app__input'
            placeholder='Пароль'
            autoComplete='new-password'
          />
          <span className='login-form__error'>
            {errors?.password && (
              <p className='login-form__error-message'>{errors?.password.message}</p>
            )}
          </span>
        </label>
        <p className='login-form__error-message login-form__error-message_type_server'>
          {errorMassage}
        </p>
        <button
          type='submit'
          disabled={!isValid}
          className={`login-form__button app__button ${
            registerForm ? 'login-form__button_type_register' : ''
          }`}
        >
          {buttonText}
        </button>
      </form>
      <h3 className='login-form__text'>
        {text}
        <Link to={link} className='login-form__link app__link'>
          {linkText}
        </Link>
      </h3>
    </div>
  );
}

export default AuthForm;
