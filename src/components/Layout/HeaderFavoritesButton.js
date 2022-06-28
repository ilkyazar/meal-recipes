import classes from './HeaderFavoritesButton.module.css';

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>Your Favorites</span>
      <span className={classes.badge}>4</span>
    </button>
  );
};

export default HeaderCartButton;
