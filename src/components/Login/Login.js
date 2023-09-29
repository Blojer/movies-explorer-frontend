import './Login.css';
import AuthForm from '../AuthForm/AuthForm';

function Login({ onLogin, errorMassage }) {
  return (
    <main className='login'>
      <AuthForm
        title={'Рады видеть!'}
        buttonText={'Войти'}
        text={'Ещё не зарегистрированы?'}
        link={'/signup'}
        linkText={'Регистрация'}
        submitForm={onLogin}
        errorMassage={errorMassage}
      />
    </main>
  );
}

export default Login;
