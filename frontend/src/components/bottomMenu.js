import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/bottomMenu.syles';

const BottomMenu = () => {
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>Option 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>Option 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>Option 3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>Option 4</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomMenu;