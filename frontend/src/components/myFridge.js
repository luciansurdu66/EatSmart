import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from '../styles/myFridge.style';
import RecipeSearchScreen from '/Users/macbook/EatSmart/EatSmart/frontend/src/components/searchScreen.js';
import IngredientInputScreen from '/Users/macbook/EatSmart/EatSmart/frontend/src/components/IngredientInput.js';
import GridComponent from './gridComponent'; 
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const MyFridge = () => {
  const navigation = useNavigation();
  const [ingredients, setIngredients] = useState([]);
  const [isIngredientInputVisible, setIsIngredientInputVisible] = useState(false);

  const handlePlusButtonPress = () => {
    setIsIngredientInputVisible(true);
  };

  const handleAddIngredient = (newIngredient) => {
    setIngredients([...ingredients, newIngredient]);
    setIsIngredientInputVisible(false);
  };

  const PlusIcon = () => (
    <Svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
      <Path d="M12 5v14M5 12h14" />
    </Svg>
  );

  const FullRoundButton = () => (
    <TouchableOpacity style={styles.roundButton} onPress={handlePlusButtonPress}>
      <PlusIcon />
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <View style={styles.ingredientItem}>
      <Text>{item.name} - {item.quantity}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {isIngredientInputVisible && (
        <IngredientInputScreen onAddIngredient={handleAddIngredient} />
      )}
      <TouchableOpacity
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start', // Align items to the top
        }}
      >
        <Text style={styles.title}>My Fridge</Text>
        <Text style={styles.title} onPress={handleSearch}>
          Search for recipes...
        </Text>
      </TouchableOpacity>
      <View style={{ marginTop: 20 }}>
        <FlatList
          data={ingredients}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <GridComponent />
      </View>
      <FullRoundButton />
    </View>
  );
};

export default MyFridge;
