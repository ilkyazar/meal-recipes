import classes from './HeaderButton.module.css';
import { useStore } from '../../hooks-store/store';
import { Fragment, useContext } from 'react';
import AuthContext from '../../store/auth-context';

const HeaderButton = (props) => {
  const state = useStore()[0];

  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <Fragment>
      {authCtx.isLoggedIn && (
        <button className={classes.button} onClick={props.onClick}>
          <span>Your Favorites</span>
          <span className={classes.badge}>{state.favCount}</span>
        </button>
      )}
      {authCtx.isLoggedIn && (
        <button
          className={classes.logoutButton}
          onClick={logoutHandler}
        >
          Logout
        </button>
      )}
    </Fragment>
  );
};

export default HeaderButton;
