import { useEffect, useState, useContext } from 'react';
import classes from './AvailableMeals.module.css';
import CategoryContext from '../../store/category-context';
import MealItem from './MealItem/MealItem';
import { useStore } from '../../hooks-store/store';
const AvailableMeals = () => {
  const state = useStore()[0];

  const categoryCtx = useContext(CategoryContext);
  const category = categoryCtx.selectedCategory;

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      // You can use the test API key "1"
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/${process.env.REACT_APP_API_KEY}/filter.php?c=${category}`
      );

      if (!res.ok) {
        throw new Error('Something went wrong :(');
      }

      const responseData = await res.json();

      console.log(responseData.meals);

      setMeals(responseData.meals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, [category]);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  let content;

  if (meals != null) {
    const mealsList = meals.map((meal) => (
      <MealItem
        id={meal.idMeal}
        key={meal.idMeal}
        name={meal.strMeal}
        imgUrl={meal.strMealThumb}
        isFav={state.favMealIds.includes(meal.idMeal) ? true : false}
      />
    ));
    content = <ul>{mealsList}</ul>;
  } else {
    content = <p>No meals found...</p>;
  }

  return <section className={classes.meals}>{content}</section>;
};

export default AvailableMeals;
