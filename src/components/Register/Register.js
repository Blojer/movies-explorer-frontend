import './Register.css';
import AuthForm from '../AuthForm/AuthForm';

function Register({ name, handleChange }) {
  return (
    <main className='register'>
      <AuthForm
        title={'Добро пожаловать!'}
        buttonText={'Зарегистрироваться'}
        text={'Уже зарегистрированы?'}
        link={'/signin'}
        linkText={'Войти'}
        register={true}
      >
        <label className='login-form__label'>
          Имя
          <input
            type='email'
            className='login-form__input app__input'
            name='name'
            placeholder='Имя'
            required
            minLength='2'
            maxLength='40'
            value={name}
            onChange={handleChange}
          />
        </label>
      </AuthForm>
    </main>
  );
}

export default Register;
