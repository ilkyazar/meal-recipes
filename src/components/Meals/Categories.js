import { useState, useContext } from 'react';
import classes from './Categories.module.css';
import CategoryContext from '../../store/category-context';

const Categories = () => {
  const [category, setCategory] = useState();
  const categoryCtx = useContext(CategoryContext);

  const categorySelectHandler = (event) => {
    setCategory(event.target.value);
  };

  const categorySearchHandler = () => {
    categoryCtx.updateCategory(category);
  };

  return (
    <div className={classes.categories}>
      <select
        onChange={categorySelectHandler}
        className={classes.choose}
        value={category}
      >
        <option value="Breakfast">Breakfast</option>
        <option value="Dessert">Dessert</option>
        <option value="Pasta">Pasta</option>
        <option value="Vegan">Vegan</option>
        <option value="Vegetarian">Vegetarian</option>
      </select>

      <button
        onClick={categorySearchHandler}
        className={classes.button}
      >
        Search
      </button>
    </div>
  );
};

export default Categories;
