import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  recipeSearchView: {
    textAlign: 'center',
    margin: 20,
    overflowY: 'auto', // Add overflow property for vertical scrolling
    height: '80vh', // Set a fixed height or use a percentage of the viewport height
  },

  recipeList: {
    display: 'flex',
    flexWrap: 'wrap', // Allow recipes to wrap to the next line
    justifyContent: 'center',
    alignItems: 'flex-start', // Align items at the top of the container
    gap: '20px', // Add some space between recipes
  },
  recipeItem: {
    border: '1px solid #ddd',
    margin: '10px',
    padding: '10px',
    borderRadius: '5px',
    textAlign: 'center',
    width: '200px', // Set a fixed width for each recipe item
  },
  recipeImage: {
    width: '30%',
    height: '120px', // Adjust the height of the image
    objectFit: 'cover',
    borderRadius: '5px 5px 0 0',
  },
  recipeSearchText: {
    fontSize: 40,
    color: '#DA6A00',
    paddingTop: 100,
  },
  text: {
    display: 'block',
    fontSize: 20,
    color: '#9796A1',
    paddingTop: 30,
  },
  textInput: {
    height: 40,
    border: '1px solid gray',
    marginBottom: 10,
    width: '90%',
    borderRadius: 100,
    textAlign: 'center',
  },
  recipeList: {
    listStyleType: 'none',
    padding: 0,
  },
  recipeItem: {
    border: '1px solid #ddd',
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  containerCircle: {
    position: 'relative',
  },
  circleShape1: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#68904D',
    position: 'absolute',
    top: -500,
    right: 100,
    zIndex: 20,
  },
  recipeItem: {
    border: '1px solid #ddd',
    margin: 10,
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
  },

  recipeImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '5px 5px 0 0',
  },

 
  recipeList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    margin: '20px 0',
  },

  recipeSearchView: {
    textAlign: 'center',
    margin: 20,
  },
  recipeList: {
    overflowY: 'auto', // Add overflow property for vertical scrolling
    height: '300px', // Set a fixed height or use a percentage of the viewport height
  }
});

export default styles;
