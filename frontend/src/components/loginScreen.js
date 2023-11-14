import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AddIngredient from "./addIngredient";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleLogin = () => {
    // Implementează logica de autentificare aici
    console.log("Autentificare: ", email, password);
    // Navighează către ecranul "FirstPage" după autentificare
    navigation.navigate("AddIngredient");
  };
  return (

      <View style={{flex: 1, flexDirection: 'column', alignItems: 'flex-start', paddingLeft: 20, paddingTop: 100 }}>
        <Text style={{ fontSize: 40 }}>Login</Text>
        <Text style={{fontSize: 20, color: '#9796A1', paddingTop: 30}}>E-mail</Text>
        <TextInput
          placeholder="Your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={{ height: 40, borderColor: "gray", borderWidth: 1, marginBottom: 10, width: '90%', borderRadius: 10, textAlign: 'center' }}
        />
        <Text style={{fontSize: 20, color: '#9796A1', paddingTop: 30}}>Password</Text>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          style={{ height: 40, borderColor: "gray", borderWidth: 1, marginBottom: 10, width: '90%', borderRadius: 10, textAlign: 'center'}}
        />
    	  <Button title="Login" onPress={handleLogin} />
      </View>
      
  )

};

export default LoginScreen;


