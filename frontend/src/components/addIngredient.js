import React, { Component } from "react";
import axios from "axios";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button, ActivityIndicator } from "react-native";
import RNPickerSelect from 'react-native-picker-select';

export default class AddIngredient extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ingredient_name: "",
            ingredient_quantity: "",
            ingredient_unit: null,
            ingredient_description: "",
        };
    }

    onChangeIngredient = (field, value) => {
        this.setState({
            [field]: value,
        });
    };


    onSubmit = () => {
        const newIngredient = {
            ingredientName: this.state.ingredientName,
            ingredientQuantity: this.state.ingredientQuantity,
            ingredientUnit: this.state.ingredientUnit,
            ingredientDescription: this.state.ingredientDescription,
        };

        axios.post("http://localhost:5000/ingredients/add", newIngredient)
            .then((res) => console.log(res.data));

        this.setState({
            ingredient_name: "",
            ingredient_quantity: "",
            ingredient_unit: null,
            ingredient_description: "",

        });
    };

    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.header}>Add New Ingredient</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Ingredient Name"
                    value={this.state.ingredient_name}
                    onChangeText={(text) => this.onChangeIngredient('ingredient_name', text)}

                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Ingredient Quantity"
                    value={this.state.ingredient_quantity}
                    onChangeText={(text) => this.onChangeIngredient('ingredient_quantity', text)}
                    keyboardType="numeric"
                />
                <RNPickerSelect
                         placeholder={{ label: "Select your unit", value: null }}
                    onValueChange={(value) =>{ 
                            this.onChangeIngredient('ingredient_unit', value);
                    }}
                    items={[
                        { label: 'Kg', value: 'kg' },
                        { label: 'g', value: 'g' },
                        { label: 'mg', value: 'mg' },
                        { label: 'l', value: 'l'},
                        { label: 'ml', value: 'ml'},
                        // Adaugă alte opțiuni de unitate de măsură
                    ]}
                    style={{
                        inputIOS: {
                            fontSize: 16,
                            paddingVertical: 12,
                            paddingHorizontal: 10,
                            borderWidth: 1,
                            borderColor: 'gray',
                            borderRadius: 4,
                            color: 'black',
                            paddingRight: 30 // to ensure the text is never behind the icon
                        },
                        inputAndroid: {
                            fontSize: 16,
                            paddingHorizontal: 10,
                            paddingVertical: 8,
                            borderWidth: 0.5,
                            borderColor: 'purple',
                            borderRadius: 8,
                            color: 'black',
                            paddingRight: 30, // to ensure the text is never behind the icon
                            textAlign: "left"
                        }
                    }}
                    
                />
                <TextInput
                    style={[styles.textInput, styles.multilineInput]}
                    placeholder="Ingredient Description"
                    value={this.state.ingredient_description}
                    onChangeText={(text) => this.onChangeIngredient('ingredient_description', text)}
                    multiline
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onSubmit}
                >
                    <Text style={styles.buttonText}>Add Ingredient</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 15,
        width: '100%',
    },
    multilineInput: {
        height: 100,
    },
    button: {
        backgroundColor: 'black',
        borderRadius: 8,
        paddingVertical: 15,
        paddingHorizontal: 30,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
