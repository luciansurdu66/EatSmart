import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../styles/myFridge.style';
import RecipeSearchScreen from '/Users/macbook/EatSmart/EatSmart/frontend/src/components/searchScreen.js';
import GridComponent from './gridComponent'; 
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const MyFridge = () => {
  const navigation = useNavigation();
  const handlePlusButtonPress = () => {
    navigation.navigate('AddIngredient');
  };

  const handleSearch = () => {
    navigation.navigate("RecipeSearchScreen");
  }

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

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start', // Align items to the top
        }}
      >
        <Text style={styles.title}>My Fridge</Text>
        <Text style={styles.title} onPress={handleSearch}>Search for recipes...</Text>
      </TouchableOpacity>
      <View style={{ marginTop: 20 }}> {/* Add margin to create space */}
        <GridComponent />
      </View>
      <FullRoundButton />
    </View>
  );
};

export default MyFridge;
