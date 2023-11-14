import React, { useState } from 'react';
import styles from '../styles/recipesearchScreen.style';

const RecipeSearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Sample breakfast recipes with images
  const sampleBreakfastRecipes = [
    { id: 1, name: 'Scrambled Eggs', image: 'https://retete.unica.ro/wp-content/uploads/2021/02/omleta_sufleu.jpg', ingredients: 'Eggs, Salt, Pepper' },
    { id: 2, name: 'Pancakes', image: 'https://www.lauralaurentiu.ro/wp-content/uploads/2013/03/clatite-simple-reteta-laura-laurentiu-reteta-de-clatite-simple-reteta-simpla-clatite-reteta-aluat-de-clatite.jpg', ingredients: 'Flour, Milk, Eggs, Baking Powder' },
    
  ];

  const searchRecipes = () => {
    
    setSearchResults(sampleBreakfastRecipes);
  };

  return (
    <div style={styles.recipeSearchView}>
      <h1 style={styles.recipeSearchText}>Breakfast Recipes</h1>
      <label style={styles.text}>Search for breakfast recipes:</label>
      <input
        type="text"
        placeholder="Enter ingredients or dish name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={styles.textInput}
      />
      <button onClick={searchRecipes} style={styles.button}>Search</button>

      <div style={styles.recipeList}>
        {searchResults.map(recipe => (
          <div key={recipe.id} style={styles.recipeItem}>
            <img src={recipe.image} alt={recipe.name} style={styles.recipeImage} />
            <h3>{recipe.name}</h3>
            <p>Ingredients: {recipe.ingredients}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeSearchScreen;
