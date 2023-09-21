import './Techs.css';

function Techs() {
  return (
    <section className='technology' id='technology'>
      <h2 className='content__title'>Технологии</h2>
      <h3 className='technology__title'>7 технологий</h3>
      <p className='technology__subtitle'>
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
      </p>
      <ul className='technology__all'>
        <li className='technology__item'>HTML</li>
        <li className='technology__item'>CSS</li>
        <li className='technology__item'>JS</li>
        <li className='technology__item'>React</li>
        <li className='technology__item'>Git</li>
        <li className='technology__item'>Express.js</li>
        <li className='technology__item'>mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
