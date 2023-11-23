import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LoginScreen from "./loginScreen";
import styles from "../styles/loginAndSignIn.style";


const SignUpScreen = () =>{
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();

    const handleSignUp = () => {
        // Implementează logica de autentificare aici
        console.SignUp("Inregistrare: ",fullName, email, password);
        //Navigheza catre pagina de Autentificare
        navigation.navigate("LoginScreen");
    };
    return (

        <View style={styles.view}>
          <Text style={styles.loginText}>SignUp</Text>
          <Text style={styles.text}>Full Name</Text>
          <TextInput
            placeholder="Full name"
            value={fullName}
            onChangeText={(text) => setFullName(text)}
            style={styles.textInput}
          />
          <Text style={styles.text}>E-mail</Text>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.textInput}
          />
          <Text style={styles.text}>Password</Text>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            style={styles.textInput}
          />
          <View style={styles.CircleShape1} 
          />
          <Text title="Sign Up" onPress={handleSignUp}> Sign Up </Text>
        </View>
        
    )
}

export default SignUpScreen
