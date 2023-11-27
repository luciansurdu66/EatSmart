import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from '../styles/recipesearchScreen.style';

const RecipeSearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const sampleBreakfastRecipes = [
    { id: 1, name: 'Scrambled Eggs', image: 'https://retete.unica.ro/wp-content/uploads/2021/02/omleta_sufleu.jpg', ingredients: 'Eggs, Salt, Pepper' },
    { id: 2, name: 'Pancakes', image: 'https://www.lauralaurentiu.ro/wp-content/uploads/2013/03/clatite-simple-reteta-laura-laurentiu-reteta-de-clatite-simple-reteta-simpla-clatite-reteta-aluat-de-clatite.jpg', ingredients: 'Flour, Milk, Eggs, Baking Powder,Sparkling Watter , Oil' },
    { id: 3, name: 'Muffins', image: 'https://retetepapabun.ro/wp-content/uploads/2022/02/Briose-cu-Nutella.jpg', ingredients: 'Flour, Milk, Eggs, Baking Powder,Cocoa,Oil' },
    { id: 4, name: 'Carrot Cake', image: 'https://static01.nyt.com/images/2020/11/01/dining/Carrot-Cake-textless/Carrot-Cake-textless-threeByTwoMediumAt2X.jpg', ingredients: 'Flour, Milk, Eggs, Baking Powder,Carrots,Sugar' },
    { id: 5, name: 'Burger', image: 'https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg', ingredients: 'Buns,Meat,Onion,Tomato,Mayonaise' },
    { id: 6, name: 'Pizza', image: 'https://panda.ro/wp-content/uploads/2023/04/PANDA-PIZZA-2.jpg', ingredients: 'Flour, Milk, Eggs, Baking Powder,Peperoni,Tomato,Onion,Olive Oil' },
    { id: 7, name: 'Pasta', image: 'https://www.retetepractice.ro/wp-content/uploads/2018/04/Paste-carbonara-cu-smantana-si-bacon-1024x683.jpg', ingredients: 'Flour, Milk, Eggs, Baking Powder' },
    { id: 8, name: 'Sarmale', image: 'https://retete-thermomix.ro/wp-content/uploads/2021/12/Sarmale.webp', ingredients: 'rice,cabbage,peppers,meat' },
    { id: 9, name: 'Salata', image: 'https://gabitzasgreenkitchen.com/wp-content/uploads/2016/05/Salata-Verde-Asortata-Cu-Avocado1.jpg', ingredients: 'Salad,Onion,Tomato,Chicken,Mayonaise' },
    { id: 10, name: 'Papanas', image: 'https://depozitulderetete.ro/wp-content/uploads/2015/06/reteta-de-papanasi-08.jpg', ingredients: 'Flour, Milk, Eggs, Baking Powder,Nutella' },
    { id: 11, name: 'Gulas', image: 'https://cumsa.ro/wp-content/uploads/2020/08/cum-sa-faci-gulas-unguresc-cu-carne-de-porc-cea-mai-buna-reteta.jpg', ingredients: 'Potato,Beans,Meat,Tomato Sauce' },
    { id: 12, name: 'Paella', image: 'https://bucate-aromate.ro/wp-content/uploads/2023/07/Reteta-Paella-cu-fructe-de-mare-10.jpg', ingredients: 'Rice,Tomato Sauce,Chicken Meat' },
  ];
  

  const searchRecipes = () => {
    if (searchQuery.trim() === '') {
      setErrorMessage('Please enter something to search.');
      setSearchResults([]);
    } else {
      const filteredRecipes = sampleBreakfastRecipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.ingredients.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setSearchResults(filteredRecipes);
      setErrorMessage('');
    }
  };

  return (
    <View style={styles.recipeSearchView}>
      <Text style={styles.recipeSearchText}>Recipe Book</Text>
      <Text style={styles.text}>Search for various recipes:</Text>
      <TextInput
        type="text"
        placeholder="Enter ingredients or dish name"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
        style={styles.textInput}
      />
      <TouchableOpacity onPress={searchRecipes} style={styles.buttonLogin}>
        <Text style={styles.button}>Search</Text>
      </TouchableOpacity>
      {errorMessage !== '' && (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      )}
      <View style={styles.recipeList}>
        {searchResults.map((recipe) => (
          <View key={recipe.id} style={styles.recipeItem}>
            <Image source={{ uri: recipe.image }} style={styles.recipeImage} />
            <Text style={styles.recipeName}>{recipe.name}</Text>
            <Text style={styles.ingredients}>Ingredients: {recipe.ingredients}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default RecipeSearchScreen;
