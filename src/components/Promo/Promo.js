import './Promo.css';

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__background'>
        <h1 className='promo__header'>Учебный проект студента факультета Веб-разработки.</h1>
        <ul className='promo__navigate'>
          <li className='promo__navigate-item'>
            <a href='#about' className='promo__link button'>
              О проекте
            </a>
          </li>
          <li className='promo__navigate-item'>
            <a href='#technology' className='promo__link button'>
              Технологии
            </a>
          </li>
          <li className='promo__navigate-item'>
            <a href='#student' className='promo__link button'>
              Студент
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Promo;
