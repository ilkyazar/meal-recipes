import Categories from './Categories';
import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Recipes</h2>
      <p>
        Discover recipes from our broad selection and enjoy a
        delicious meal.
      </p>
      <p>You can find out new recipes from all around the world!</p>
      <Categories />
    </section>
  );
};

export default MealsSummary;
