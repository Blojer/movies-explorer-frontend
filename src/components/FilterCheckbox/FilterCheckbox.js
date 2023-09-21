import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className='checkbox'>
      <label className='checkbox__item'>
        <input type='checkbox' className='checkbox__input' />
        <span className='checkbox__custom'></span>
        Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;
