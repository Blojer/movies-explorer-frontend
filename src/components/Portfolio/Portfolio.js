import './Portfolio.css';
function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__progect'>
        <li className='portfolio__item'>
          <p className='portfolio__text'>Статичный сайт</p>{' '}
          <a
            href='https://blojer.github.io/how-to-learn/'
            className='portfolio__link link'
            target='_blank'
            rel='noreferrer'
          >
            ↗
          </a>
        </li>
        <li className='portfolio__item'>
          <p className='portfolio__text'>Адаптивный сайт</p>{' '}
          <a
            href='https://blojer.github.io/russian-travel/'
            className='portfolio__link link'
            target='_blank'
            rel='noreferrer'
          >
            ↗
          </a>
        </li>
        <li className='portfolio__item'>
          <p className='portfolio__text'>Одностраничное приложение</p>{' '}
          <a
            href='https://blojer.nomoreparties.co/sign-up'
            className='portfolio__link link'
            target='_blank'
            rel='noreferrer'
          >
            ↗
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
