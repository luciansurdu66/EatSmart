import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView, Text } from 'react-native';

const SquareComponent = () => {
  return <View style={styles.square} />;
};

const GridComponent = () => {
  const screenWidth = Dimensions.get('window').width;
  const itemWidth = (screenWidth - 30) / 2; // Subtract padding and margin
  /* const items = [
    { id: 1, name: 'Item 1', quantity: 5, expirationDate: '2023-12-31' },
    { id: 2, name: 'Item 2', quantity: 3, expirationDate: '2023-11-30' },
    { id: 3, name: 'Item 3', quantity: 2, expirationDate: '2023-12-15' },
    { id: 4, name: 'Item 4', quantity: 1, expirationDate: '2024-01-15' },
    // ... 16 more items ...
    { id: 17, name: 'Item 17', quantity: 3, expirationDate: '2023-12-20' },
    { id: 18, name: 'Item 18', quantity: 2, expirationDate: '2023-12-25' },
    { id: 19, name: 'Item 19', quantity: 1, expirationDate: '2024-01-01' },
    { id: 20, name: 'Item 20', quantity: 4, expirationDate: '2023-12-10' },
  ]; */

  const generateItems = () => {
    const items = [];
    for (let i = 1; i <= 20; i++) {
      items.push({
        id: i,
        name: `Item ${i}`,
        quantity: Math.floor(Math.random() * 10) + 1, // Random quantity for demonstration
        expirationDate: '2023-12-31', // Replace with actual expiration dates
      });
    }
    return items;
  };

  const items = generateItems();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.gridContainer}>
            {items.map((item) => (
                <View style={styles.gridItem} key={item.id}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text>Quantity: {item.quantity}</Text>
                    <Text>Expires: {item.expirationDate}</Text>
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