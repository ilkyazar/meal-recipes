import { useEffect, useState } from 'react';
import classes from './AvailableMeals.module.css';

import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      // You can use the test API key "1"
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/${process.env.REACT_APP_API_KEY}/filter.php?c=Breakfast`
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
  }, []);

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

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.idMeal}
      key={meal.idMeal}
      name={meal.strMeal}
      imgUrl={meal.strMealThumb}
    />
  ));

  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
