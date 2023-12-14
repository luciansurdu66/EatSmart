import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView, Text } from 'react-native';
import AddIngredient from './addIngredient';
import axios from 'axios';
import baseURL from "../../assets/constants";
import { useState, useEffect } from 'react';

const SquareComponent = () => {
  return <View style={styles.square} />;
};

const GridComponent = () => {
  const screenWidth = Dimensions.get('window').width;
  const itemWidth = (screenWidth - 30) / 2; // Subtract padding and margin
  const [items, setItems] = useState([]); // Initialize items as an empty array

  useEffect(() => {
    axios.get(baseURL+"/ingredient/")
      .then((res) => {
        console.log(res.data.ingredients);
        setItems(res.data.ingredients);
      })
      .catch((error) => {
        console.error('Failed to fetch items:', error);
      });
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.gridContainer}>
        {items.map((item) => (
          <View style={styles.gridItem} key={item.id}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text>Quantity: {item.quantity}</Text>
          <Text>Unit: {item.unit}</Text>
          <Text>Description: {item.description}</Text>
        </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: '#F8F8F8',
    padding: 10,
    paddingTop: 20,
    paddingBottom: 30,
    borderRadius: 10,

    // Shadow properties for Android
    elevation: 2,

    // Shadow properties for iOS
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  gridItem: {
    width: '48%', // Adjust as needed
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 24,
    justifyContent: 'center',
    borderRadius: 10,
  },

  itemName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default GridComponent;