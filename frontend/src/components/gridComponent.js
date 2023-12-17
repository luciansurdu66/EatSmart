import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView, Text } from 'react-native';
import axios from 'axios';
import baseURL from "../../assets/constants";
import { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';

const GridComponent = () => {
  const [items, setItems] = useState([]); // Initialize items as an empty array

  const route = useRoute();

  useEffect(() => {
    axios.get(baseURL+"/ingredient/")
      .then((res) => {
        console.log(res.data.ingredients);
        setItems(res.data.ingredients);
      })
      .catch((error) => {
        console.error('Failed to fetch items:', error);
      });
  }, [route.params?.refresh]);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.gridContainer}>
        {items.map((item) => (
          <View style={styles.gridItem} key={item.id}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text>{item.quantity} {item.unit}</Text>
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

    elevation: 2,

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