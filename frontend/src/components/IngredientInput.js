// IngredientInputScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '/Users/macbook/EatSmart/EatSmart/frontend/src/styles/ingredientInput.style.js';

const IngredientInputScreen = ({ onAddIngredient }) => {
  const [ingredientName, setIngredientName] = useState('');
  const [ingredientQuantity, setIngredientQuantity] = useState('');

  const handleAddIngredient = () => {
    if (ingredientName && ingredientQuantity) {
      onAddIngredient({ name: ingredientName, quantity: ingredientQuantity });
      // Clear input fields after adding ingredient
      setIngredientName('');
      setIngredientQuantity('');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Enter Ingredient Details:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingredient Name"
        value={ingredientName}
        onChangeText={(text) => setIngredientName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantity"
        value={ingredientQuantity}
        onChangeText={(text) => setIngredientQuantity(text)}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddIngredient}>
        <Text>Add Ingredient</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IngredientInputScreen;
