import './Login.css';
import AuthForm from '../AuthForm/AuthForm';

function Login() {
  return (
    <div className='login'>
      <AuthForm
        title={'Рады видеть!'}
        buttonText={'Войти'}
        text={'Ещё не зарегистрированы?'}
        link={'/signup'}
        linkText={'Регистрация'}
      />
    </div>
  );
}

export default Login;
