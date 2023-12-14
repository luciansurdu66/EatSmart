import React, { useState } from "react";
import { View, TextInput, Text, Touchable, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AddIngredient from "./addIngredient";
import styles from "../styles/resetpass.style";
import { Colors } from "react-native/Libraries/NewAppScreen";
//import styles from "../styles/loginAndSignIn.style";




const ResetPasswordScreen = () => {
    const [email, setEmail] = useState("");
    const navigation = useNavigation();
    const handleLogin = () => {
        navigation.navigate("LoginScreen");
      }

      return (
        <View>
        <Text style={styles.resetText}>Reset password</Text>
        <Text style={{color: 'grey', fontSize: 20, top: 20, paddingLeft: 20}}>Please enter your email address to request a password reset</Text>
        <TextInput
          placeholder="enter your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.textInput}
        />
        <TouchableOpacity style={styles.container1} onPress={handleLogin}>        
          <Text style={styles.container1.SendBut}>Send new password</Text>
        </TouchableOpacity>
        <View style={styles.CircleShape3}/>
        <View style={styles.CircleShape1}/>
        <View style={styles.CircleShape2}/>
        </View>
      )


}
export default ResetPasswordScreen;
  