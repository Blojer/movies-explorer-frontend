import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

function SearchForm({ search, searchString, check, checked }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue
  } = useForm({
    defaultValues: {
      search: ''
    }
  });

  useEffect(() => {
    setValue('search', searchString);
    // eslint-disable-next-line
  }, [searchString]);

  function onSubmit(data) {
    search(data.search);
  }

  return (
    <section>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <div className='form__search'>
          <input
            {...register('search', {
              required: 'Нужно ввести ключевое слово.'
            })}
            type='text'
            className='form__input app__input'
            placeholder={'Фильм'}
          />
          <button className='form__button app__button' type='submit'></button>
        </div>
        <span className='login-form__error'>
          {errors?.search && <p className='login-form__error-message'>{errors?.search.message}</p>}
        </span>
        <FilterCheckbox check={check} checked={checked} />
      </form>
    </section>
  );
}

export default SearchForm;
