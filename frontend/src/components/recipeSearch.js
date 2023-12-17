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
        `https://api.edamam.com/search?q=${query}&app_id=ecdd798b&app_key=3f4a18a8a8382ef9239d0b428698ce25&from=0&to=10`
      );
      setRecipes(response.data.hits);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <NavigationContainer independent={true}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.bigTitle}>Dashboard</Text>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Enter recipe keyword"
            value={query}
            onChangeText={(text) => setQuery(text)}
            style={styles.input}
          />
          <Button title="Search" onPress={searchRecipes} color="#EE9B01"/>
        </View>
        <FlatList
          data={recipes}
          keyExtractor={(item) => item.recipe.uri}
          renderItem={({ item }) => (
            <TouchableOpacity /*onPress={() => Linking.openURL(item.recipe.url)}*/>
              <View style={styles.recipeContainer}>
                <Image source={{ uri: item.recipe.image }} style={styles.recipeImage} />
                <View style={styles.recipeDetails}>
                  <Text style={styles.recipeLabel}>{item.recipe.label}</Text>
                  <Text style={styles.recipeSource}>{item.recipe.source}</Text>
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
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
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
