import './AboutMe.css';
import avatar from '../../images/avatar.png';

function AboutMe() {
  return (
    <section className='student' id='student'>
      <h2 className='app__title'>Студент</h2>
      <div className='student__info'>
        <div className='student__about'>
          <h3 className='student__name'>Виталий</h3>
          <h4 className='student__profession'>Фронтенд-разработчик, 30 лет</h4>
          <p className='student__text'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь.
            Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал
            в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься
            фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            href='https://github.com/Blojer'
            className='student__link link'
            target='_blank'
            rel='noreferrer'
          >
            GitHub
          </a>
        </div>
        <img className='student__avatar' src={avatar} alt='Фото студента' />
      </div>
    </section>
  );
}

export default AboutMe;
