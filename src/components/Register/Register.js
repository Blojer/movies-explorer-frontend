import './Register.css';
import AuthForm from '../AuthForm/AuthForm';

function Register({ onRegister, errorMassage }) {
  return (
    <main className='register'>
      <AuthForm
        title={'Добро пожаловать!'}
        buttonText={'Зарегистрироваться'}
        text={'Уже зарегистрированы?'}
        link={'/signin'}
        linkText={'Войти'}
        registerForm={true}
        submitForm={onRegister}
        errorMassage={errorMassage}
      />
    </main>
  );
}

export default Register;
