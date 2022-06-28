import { Fragment } from 'react';

import HeaderFavoritesButton from './HeaderFavoritesButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Recipes</h1>
        <HeaderFavoritesButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img
          src={mealsImage}
          alt="A table full of delicious vegan food!"
        />
      </div>
    </Fragment>
  );
};

export default Header;
