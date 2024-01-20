// RecipeSearch.js
import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Image, Text, StyleSheet, SafeAreaView, TouchableOpacity, Linking } from 'react-native';
import axios from 'axios';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const RecipeSearch = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=51f681b54480438e82819cd110f546a8&number=10`
      );
      // Assuming each recipe in the response is within the 'results' array
      setRecipes(response.data.results);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <NavigationContainer independent={true}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.bigTitle}>What ingredients do you have?</Text>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Enter recipe keyword"
            value={query}
            onChangeText={(text) => setQuery(text)}
            style={styles.input}
          />
          <Button title="Search" onPress={searchRecipes} color="#68904D"/>
        </View>
        <Button title="Search By Fridge" onPress={searchRecipes} color="#68904D"/>
        <FlatList
          data={recipes}
          keyExtractor={(item) => item.id.toString()} // Assuming each recipe has an 'id'
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('RecipeDetails', { recipe: item })}>
              <View style={styles.recipeContainer}>
                <Image source={{ uri: item.image }} style={styles.recipeImage} />
                <View style={styles.recipeDetails}>
                  <Text style={styles.recipeLabel}>{item.title}</Text>
                  {/* Other recipe details */}
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
    marginTop:40,
  },
  bigTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#68904D'
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
  },
  recipeContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  recipeImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  recipeDetails: {
    marginLeft: 10,
    flex: 1,
  },
  recipeLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  recipeSource: {
    color: 'gray',
  },
});

export default RecipeSearch;
