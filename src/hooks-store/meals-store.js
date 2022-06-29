import { initStore } from './store';

const configureStore = () => {
  const actions = {
    TOGGLE_FAV: (curState, meal) => {
      const updatedFavMeals = [...curState.favMeals];

      if (updatedFavMeals.some((m) => m.id === meal.id)) {
        const mealIndex = updatedFavMeals.findIndex(
          (m) => m.id === meal.id
        );
        updatedFavMeals.splice(mealIndex, 1);
      } else {
        updatedFavMeals.push({ id: meal.id, name: meal.name });
      }

      return {
        favMeals: updatedFavMeals,
        favCount: updatedFavMeals.length,
      };
    },
  };
  initStore(actions, {
    favMeals: [],
    favCount: 0,
  });
};

export default configureStore;
