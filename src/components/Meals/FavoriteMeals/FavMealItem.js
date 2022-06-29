import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import classes from './FavMealItem.module.css';

const FavMealItem = (props) => {
  return (
    <Fragment>
      <div className={classes.item}>
        <span className={classes.title}>{props.name}</span>
        <Link to={`/meals/${props.id}`}>
          <button
            className={classes.button}
            onClick={props.cookHandler}
          >
            COOK
          </button>
        </Link>
      </div>
    </Fragment>
  );
};

export default FavMealItem;
