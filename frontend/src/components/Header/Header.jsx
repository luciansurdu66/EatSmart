import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

const Header = ({showBackButton = true }) => {
  const navigation = useNavigation();
  const route = useRoute();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleNavigate = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={{ backgroundColor:'#14471E', flexDirection: 'row', justifyContent: 'space-between', padding: 20, paddingTop:30, alignItems: 'start' }}>
    
      <TouchableOpacity onPress={() => handleNavigate('RecipeSearchScreen')}>
        <Text style={{fontSize: 25, fontWeight: 'bold', color:'white'}}>EatSmart</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row' ,alignItems: 'center' }}>

        <TouchableOpacity onPress={() => handleNavigate('RecipeSearchScreen')}
        style={[
          styles.button,
          route.name === 'RecipeSearchScreen' && styles.activeButton,
        ]}>
          <Text style={styles.navbarItem}>Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleNavigate('MyFridge')}
        style={[
          styles.button,
          route.name === 'MyFridge' && styles.activeButton,
        ]}>
          <Text style={styles.navbarItem}>MyFridge</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  
};

const styles = StyleSheet.create({
  button: {
    marginRight: 20,
    borderBottomWidth: 0,
    borderColor: 'transparent',
  },
  activeButton: {
    borderBottomWidth: 2,
    borderColor: 'red',
  },
});


export default Header;
