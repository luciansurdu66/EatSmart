import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  recipeSearchView: {
    alignItems: 'center',
    margin: 20,
  },
  recipeSearchText: {
    fontSize: 30,
    color: '#DA6A00',
    paddingBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#9796A1',
    paddingBottom: 10,
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 20,
    width: '90%',
  },buttonLogin: {
    backgroundColor: '#DA6A00', // Orange color
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 30, // Increase vertical padding for a bigger button
    paddingHorizontal: 120, // Increase horizontal padding for a bigger button
    margin: 10,
    alignSelf: 'center',
  },
  button: {
    color: 'white', // White text color
    fontSize: 20,
  },
  recipeList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  recipeItem: {
    border: '1px solid #ddd',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: 180,
  },
  recipeImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  recipeName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  ingredients: {
    fontSize: 14,
  },
});

export default styles;
