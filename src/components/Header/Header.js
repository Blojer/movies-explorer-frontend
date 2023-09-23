import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header className='header '>
      <Link to='/'>
        <img src={logo} alt='Логотип' className='header__logo app__link' />
      </Link>
      <Navigation />
    </header>
  );
}

export default Header;
