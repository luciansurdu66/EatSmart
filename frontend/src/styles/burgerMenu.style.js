import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
      burgerButton: {
        padding: 10,
      },
      burgerButtonText: {
        fontSize: 24,
      },
      menu: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '70%', // Adjust the width as needed
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        zIndex: 10,
      },
      menuContent: {
        padding: 20,
        fontSize: 20,
        color: 'black',
      },
      closeButton: {
        padding: 10,
        backgroundColor: 'red',
      },
      closeButtonText: {
        fontSize: 20,
        color: 'white',
      },
  });

export default styles;