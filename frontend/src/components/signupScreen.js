import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/loginAndSignIn.style";
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from "axios";
import baseURL from "../../assets/constants";

const SignUpScreen = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessages, setErrorMessages] = useState({});
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);

    const navigation = useNavigation();

    const handleInputChange = () => {
        setErrorMessages({});
    };

    const handleSignUp = () => {
        const newErrorMessages = {};

        // Validare Email
        if (!email.includes('@') || email.indexOf('@') === 0 || email.lastIndexOf('@') === email.length - 1) {
            newErrorMessages.email = "Please enter a valid email";
        }

        // Validare Nume Complet
        if (fullName.trim() === "") {
            newErrorMessages.fullName = "Please enter your full name";
        }

        // Validare Parolă
        if (password.length < 6) {
            newErrorMessages.password = "Password must have at least 6 characters";
            setPassword("");
        }

        // Actualizează mesajele de eroare
        setErrorMessages(newErrorMessages);

        // Dacă există mesaje de eroare, nu continua cu înregistrarea
        if (Object.keys(newErrorMessages).length > 0) {
            return;
        }

        const user = {
            fullName: fullName,
            email: email,
            password: password,
        };

        console.log(user);

        axios.post(baseURL + "/auth/register", user)
            .then((res) => {
                console.log("Înregistrare cu succes");
                navigation.navigate("LoginScreen");
            })
            .catch((error) => {
                console.error("Eroare în timpul înregistrării", error);
                // Poți gestiona erorile aici, afișând mesaje corespunzătoare sau alte acțiuni
            });
    };

    return (
        <View>
            <Text style={styles.loginText}>Sign Up</Text>
            <Text style={styles.text}>Full Name</Text>
            <TextInput
                placeholder="Full name"
                value={fullName}
                onChangeText={(text) => {
                    setFullName(text);
                    handleInputChange(); // Apelăm funcția pentru a șterge mesajele de eroare
                }}
                style={styles.textInput}
            />
            {/* Mesaj de eroare pentru Nume Complet */}
            {errorMessages.fullName && <Text style={styles.errorMessage}>{errorMessages.fullName}</Text>}

            <Text style={styles.text}>E-mail</Text>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={(text) => {
                    setEmail(text);
                    handleInputChange(); // Apelăm funcția pentru a șterge mesajele de eroare
                }}
                style={styles.textInput}
            />
            {/* Mesaj de eroare pentru Email */}
            {errorMessages.email && <Text style={styles.errorMessage}>{errorMessages.email}</Text>}
            
            <Text style={styles.text}>Password</Text>
            <View>
            <TextInput
            placeholder="Your Password"
            secureTextEntry={isPasswordVisible}
            style={styles.textInput}
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              handleInputChange();}}
          />
          <TouchableOpacity
            style={{ position: 'absolute', right: 30, top: 20 }}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <Icon name={isPasswordVisible ? 'eye-slash' : 'eye'} size={22} color="gray" />
          </TouchableOpacity>
        </View>
            {/* Mesaj de eroare pentru Parolă */}
            {errorMessages.password && <Text style={styles.errorMessage}>{errorMessages.password}</Text>}

            <TouchableOpacity style={styles.container1} onPress={handleSignUp}>
                <Text style={styles.container1.loginBut}>Sign Up</Text>
            </TouchableOpacity>

            <View style={styles.CircleShape3} />
            <View style={styles.CircleShape1} />
            <View style={styles.CircleShape2} />
        </View>
    );
};

export default SignUpScreen;