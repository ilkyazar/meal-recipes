import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import HeaderButton from './HeaderButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <Link to={'/'} className={classes.mainTitle}>
          <h1>Recipes</h1>
        </Link>
        <HeaderButton onClick={props.onShowModal} />
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
