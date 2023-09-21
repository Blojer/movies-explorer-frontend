import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <h3 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className='footer__info'>
        <p className='footer__copyright'>&copy; 2023</p>
        <ul className='footer__items'>
          <li className='footer__item'>Яндекс.Практикум</li>
          <li className='footer__item'>Github</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
