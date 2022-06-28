import { initStore } from './store';

const configureStore = () => {
  console.log('Meals store is configuring');
  const actions = {
    TOGGLE_FAV: (curState, mealId) => {
      const updatedFavMeals = [...curState.favMealIds];
      let favoritedMealCount = curState.favCount;

      if (updatedFavMeals.includes(mealId)) {
        const mealIndex = updatedFavMeals.indexOf(mealId);
        updatedFavMeals.splice(mealIndex, 1);
        favoritedMealCount -= 1;
      } else {
        updatedFavMeals.push(mealId);
        favoritedMealCount += 1;
      }

      console.log('Favorites: ', updatedFavMeals);
      console.log('Favorited meal count: ', favoritedMealCount);
      return {
        favMealIds: updatedFavMeals,
        favCount: favoritedMealCount,
      };
    },
  };
  initStore(actions, { favMealIds: [], favCount: 0 });
  console.log('Store initialized');
};

export default configureStore;
