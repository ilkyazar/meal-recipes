import classes from './HeaderFavoritesButton.module.css';
import { useStore } from '../../hooks-store/store';

const HeaderCartButton = (props) => {
  const state = useStore()[0];

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>Your Favorites</span>
      <span className={classes.badge}>{state.favCount}</span>
    </button>
  );
};

export default HeaderCartButton;
