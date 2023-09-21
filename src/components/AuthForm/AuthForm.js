import './AuthForm.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function AuthForm({
  title,
  buttonText,
  children,
  handleSubmit,
  email,
  password,
  text,
  link,
  linkText,
  handleChange,
  register
}) {
  return (
    <div className='login-form__body'>
      <Link to='/'>
        <img className='login-form__logo' src={logo} alt='logo' />
      </Link>
      <h2 className='login-form__title'>{title}</h2>
      <form className='login-form' name='login' noValidate onSubmit={handleSubmit}>
        {children}
        <label className='login-form__label'>
          E-mail
          <input
            type='email'
            className='login-form__input'
            name='email'
            placeholder='E-mail'
            required
            minLength='2'
            maxLength='40'
            value={email}
            onChange={handleChange}
          />
        </label>
        <label className='login-form__label'>
          Пароль
          <input
            type='password'
            className='login-form__input'
            name='password'
            placeholder='Пароль'
            required
            value={password}
            onChange={handleChange}
          />
        </label>
        <button
          type='submit'
          className={`login-form__button button ${
            register ? 'login-form__button_type_register' : ''
          }`}
        >
          {buttonText}
        </button>
      </form>
      <h3 className='login-form__text'>
        {text}
        <Link to={link} className='login-form__link link'>
          {linkText}
        </Link>
      </h3>
    </div>
  );
}

export default AuthForm;