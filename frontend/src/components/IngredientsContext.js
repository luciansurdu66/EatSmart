
// IngredientsContext.js
import React, { createContext, useState } from 'react';

export const IngredientsContext = createContext();

export const IngredientsProvider = ({ children }) => {
  const [ingredients, setIngredients] = useState([]);

  const addIngredient = (ingredient) => {
    setIngredients([...ingredients, ingredient]);
  };

  return (
    <IngredientsContext.Provider value={{ ingredients, addIngredient }}>
      {children}
    </IngredientsContext.Provider>
  );
};