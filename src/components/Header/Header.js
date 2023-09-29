import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header({ isLoggedIn }) {
  return (
    <header className='header '>
      <Link to='/'>
        <img src={logo} alt='Логотип' className='header__logo app__link' />
      </Link>
      <Navigation isLoggedIn={isLoggedIn} />
    </header>
  );
}

export default Header;
