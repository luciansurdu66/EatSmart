import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 36,
    position: 'relative',
  },
  title: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#14471E', // You can replace this with your desired color
      marginBottom: 10,
  },
  roundButton: {
    position: 'absolute',
    bottom: 24,
    right: 32,
    backgroundColor: '#EE9B01',
    borderRadius: 64, // Set a large enough value to make it fully round
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default styles;