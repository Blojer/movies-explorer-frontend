import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
function SearchForm() {
  return (
    <>
      <form className='form'>
        <input type='text' className='form__input' placeholder='Фильм' />
        <button className='form__button button' type='submit'></button>
      </form>
      <FilterCheckbox />
    </>
  );
}

export default SearchForm;
