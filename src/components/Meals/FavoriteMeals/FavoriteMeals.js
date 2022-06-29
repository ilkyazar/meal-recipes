import { useStore } from '../../../hooks-store/store';
import Modal from '../../UI/Modal';
import FavMealItem from './FavMealItem';

import classes from './FavoriteMeals.module.css';

const FavoriteMeals = (props) => {
  const state = useStore()[0];

  const favMealsList = state.favMeals.map((meal) => (
    <FavMealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      cookHandler={props.onClose}
    />
  ));

  return (
    <Modal onClose={props.onClose}>
      <h3>Your Favorited Meals</h3>
      <ul className={classes.favsList}>{favMealsList}</ul>
    </Modal>
  );
};

export default FavoriteMeals;
