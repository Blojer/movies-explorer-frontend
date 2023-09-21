import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about' id='about'>
      <h2 className='content__title'>О проекте</h2>
      <ul className='about__info'>
        <li className='about__description'>
          <h3 className='about__subtitle'>Дипломный проект включал 5 этапов</h3>
          <p className='about__paragraph'>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
            доработки.
          </p>
        </li>
        <li className='about__description'>
          <h3 className='about__subtitle'>На выполнение диплома ушло 5 недель</h3>
          <p className='about__paragraph'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
            успешно защититься.
          </p>
        </li>
      </ul>
      <div className='about__duration'>
        <p className='about__line-time about__line-time_type_back'>1 неделя</p>
        <p className='about__line-time about__line-time_type_front'>4 недели</p>
        <p className='about__line-time about__line-time_type_text'>Back-end</p>
        <p className='about__line-time about__line-time_type_text'>Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
