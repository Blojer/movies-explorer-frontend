import './FilterCheckbox.css';

function FilterCheckbox({ check, checked }) {
  return (
    <div className='checkbox'>
      <label className='checkbox__item'>
        <input type='checkbox' className='checkbox__input' onChange={check} checked={checked} />
        <span className='checkbox__custom'></span>
        Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;
