import Card from '../../UI/Card';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useStore } from '../../../hooks-store/store';
import classes from './MealDetail.module.css';

const MealDetail = () => {
  const mealId = useParams().id;

  const [httpError, setHttpError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [meal, setMeal] = useState([]);

  const [state, dispatch] = useStore();

  const toggleFavHandler = () => {
    dispatch('TOGGLE_FAV', { id: mealId, name: meal.strMeal });
  };

  useEffect(() => {
    const fetchMeal = async () => {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/${process.env.REACT_APP_API_KEY}/lookup.php?i=${mealId}`
      );

      if (!res.ok) {
        throw new Error('Something went wrong :(');
      }

      const responseData = await res.json();

      setMeal(responseData.meals[0]);
      setIsLoading(false);
    };

    fetchMeal().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, [mealId]);

  if (httpError) {
    return (
      <section className={classes.mealError}>
        <p>{httpError}</p>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className={classes.mealLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section className={classes.mealSection}>
      <Card>
        <h3>{meal.strMeal}</h3>
        <div className={classes.cardHeader}>
          <img
            className={classes.mealImg}
            src={meal.strMealThumb}
            alt={meal.strMeal}
          />
          <button
            onClick={toggleFavHandler}
            className={classes.button}
          >
            {state.favMeals.some((m) => m.id === mealId)
              ? 'Unfavorite'
              : 'Add To Favorites'}
          </button>
          <div>Tags: {meal.strTags}</div>
          <div>Category: {meal.strCategory}</div>
          <div>Area: {meal.strArea}</div>
        </div>
        <div className={classes.cardContent}>
          <div>
            <h4>Instructions: </h4>
            {meal.strInstructions}
          </div>
        </div>
      </Card>
    </section>
  );
};

export default MealDetail;
