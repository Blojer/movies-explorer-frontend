import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
function SearchForm() {
  return (
    <section>
      <form className='form'>
        <div className='form__search'>
          <input type='text' className='form__input app__input' placeholder='Фильм' />
          <button className='form__button app__button' type='submit'></button>
        </div>

        <FilterCheckbox />
      </form>
    </section>
  );
}

export default SearchForm;
