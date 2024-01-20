import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/myFridge.style';
import GridComponent from './gridComponent'; 
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import Header from './Header/Header';

const MyFridge = () => {
  const navigation = useNavigation();
  const handlePlusButtonPress = () => {
    navigation.navigate('AddIngredient');
  };
  const PlusIcon = () => (
    <Svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
      <Path d="M12 5v14M5 12h14" />
    </Svg>
  );
  
  const FullRoundButton = () => {
    return (
      <TouchableOpacity style={styles.roundButton} onPress={handlePlusButtonPress}>
        <PlusIcon />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
        <Text style={styles.title}>My Fridge</Text>
        <GridComponent />
        <FullRoundButton />
    </View>
  );
};

export default MyFridge;
