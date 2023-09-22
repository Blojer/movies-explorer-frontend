import './Login.css';
import AuthForm from '../AuthForm/AuthForm';

function Login() {
  return (
    <main className='login'>
      <AuthForm
        title={'Рады видеть!'}
        buttonText={'Войти'}
        text={'Ещё не зарегистрированы?'}
        link={'/signup'}
        linkText={'Регистрация'}
      />
    </main>
  );
}

export default Login;
