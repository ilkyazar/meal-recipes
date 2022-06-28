import React from 'react';

const CategoryContext = React.createContext({
  selectedCategory: '',
  updateCategory: (newCategory) => {},
});

export default CategoryContext;
