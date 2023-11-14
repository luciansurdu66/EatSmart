import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    title: {
        display: 'flex',
        position: 'absolute',
        left: '50%',
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
       buttonLogin:
       {
           borderWidth: 1,
           borderRadius: 10
           
       }
      },
    button: {
        alignItems: 'center',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        alignSelf: 'center',    
        color: '#DA6A00',
},

});

export default styles;


//{
//flex: 1, flexDirection: 'column', alignItems: 'flex-start', paddingLeft: 20, paddingTop: 100 