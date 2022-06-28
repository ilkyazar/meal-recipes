import Card from '../../UI/Card';
import { useStore } from '../../../hooks-store/store';
import classes from './MealItem.module.css';

const MealItem = (props) => {
  const dispatch = useStore()[1];

  const toggleFavHandler = () => {
    console.log('Toggle fav for: ', props.id);
    dispatch('TOGGLE_FAV', props.id);
  };

  return (
    <li className={classes.meal}>
      <Card>
        <img
          className={classes.mealImg}
          src={props.imgUrl}
          alt={props.name}
        />
        <h3 className={classes.mealTitle}>{props.name}</h3>
        <button className={classes.button}>Go To Recipe</button>
        <button className={classes.button} onClick={toggleFavHandler}>
          {!props.isFav ? 'Add To Favorites' : 'Unfavorite'}
        </button>
      </Card>
    </li>
  );
};

export default MealItem;
