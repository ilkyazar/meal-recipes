import { useReducer } from 'react';
import CategoryContext from './category-context';

const defaultCategoryState = {
  selectedCategory: 'Breakfast',
};

const categoryReducer = (state, action) => {
  if (action.type === 'UPDATE') {
    return { selectedCategory: action.newCategory };
  }
};

const CategoryProvider = (props) => {
  const [categoryState, dispatchCategoryAction] = useReducer(
    categoryReducer,
    defaultCategoryState
  );

  const updateCategoryHandler = (item) => {
    dispatchCategoryAction({ type: 'UPDATE', newCategory: item });
  };

  const categoryContext = {
    selectedCategory: categoryState.selectedCategory,
    updateCategory: updateCategoryHandler,
  };

  return (
    <CategoryContext.Provider value={categoryContext}>
      {props.children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
