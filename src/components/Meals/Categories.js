import { useState } from 'react';
import classes from './Categories.module.css';

const Categories = () => {
  const [category, setCategory] = useState();

  const categorySelectHandler = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className={classes.categories}>
      <select
        className={classes.choose}
        value={category}
        onChange={categorySelectHandler}
      >
        <option value="Breakfast">Breakfast</option>
        <option value="Dessert">Dessert</option>
        <option value="Pasta">Pasta</option>
        <option value="Vegan">Vegan</option>
        <option value="Vegetarian">Vegetarian</option>
      </select>

      <button className={classes.button}>Search</button>
    </div>
  );
};

export default Categories;
