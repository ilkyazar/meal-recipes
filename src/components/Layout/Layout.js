import { Fragment, useState } from 'react';
import FavoriteMeals from '../Meals/FavoriteMeals/FavoriteMeals';
import Header from './Header';

const Layout = (props) => {
  const [modalIsShown, setModalIsShown] = useState(false);

  const showModalHandler = () => {
    setModalIsShown(true);
  };

  const hideModalHandler = () => {
    setModalIsShown(false);
  };

  return (
    <Fragment>
      {modalIsShown && <FavoriteMeals onClose={hideModalHandler} />}
      <Header onShowModal={showModalHandler} />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
