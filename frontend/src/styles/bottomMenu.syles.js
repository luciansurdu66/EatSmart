const styles = StyleSheet.create({
    menuContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#2c3e50', // Background color of the menu
      paddingVertical: 10,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
    menuItem: {
      flex: 1,
      alignItems: 'center',
    },
    menuText: {
      color: 'white',
      fontSize: 16,
    },
  });

export default styles;