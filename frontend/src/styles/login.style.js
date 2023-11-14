import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    title: {
        display: 'flex',
        position: 'absolute',
        left: '50%'
    },
    text: {
        fontSize: 20, 
        color: '#9796A1', 
        paddingTop: 30
    },
    textInput:
    {
     height: 40, 
     borderColor: "gray", 
     borderWidth: 1, 
     marginBottom: 10, 
     width: '90%',
     borderRadius: 100, 
     textAlign: 'center' 
    },
    loginText:
    {
        fontSize: 40, paddingTop: 100 },
    view:
    {
        marginLeft: 29
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
       justifyContent: 'center',
      },
    containerCircle: {
        position: 'relative'
    },
    CircleShape1: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        backgroundColor: '#68904D',
        //position: absolute,
        top: -500,
        right: 100,
        zindex: 20,
    },
});

export default styles;


