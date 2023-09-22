import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <h3 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className='footer__info'>
        <p className='footer__copyright'>&copy; 2023</p>
        <ul className='footer__items'>
          <li className='footer__item'>
            <a
              href='https://practicum.yandex.ru/'
              className='footer__link app__link'
              target='_blank'
              rel='noreferrer'
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className='footer__item'>
            <a
              href='https://github.com/Blojer'
              className='footer__link app__link'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
