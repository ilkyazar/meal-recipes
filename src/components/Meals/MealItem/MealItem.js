import Card from '../../UI/Card';
import { useStore } from '../../../hooks-store/store';
import { Link } from 'react-router-dom';
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
        <Link to={`/meals/${props.id}`}>
          <button className={classes.button}>Go To Recipe</button>
        </Link>
        <button className={classes.button} onClick={toggleFavHandler}>
          {!props.isFav ? 'Add To Favorites' : 'Unfavorite'}
        </button>
      </Card>
    </li>
  );
};

export default MealItem;
