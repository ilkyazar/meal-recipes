import Card from '../../UI/Card';

import classes from './MealItem.module.css';

const MealItem = (props) => {
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
        <button className={classes.button}>Add To Favorites</button>
      </Card>
    </li>
  );
};

export default MealItem;
