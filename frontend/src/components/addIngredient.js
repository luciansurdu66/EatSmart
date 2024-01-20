import React, { Component } from "react";
import axios from "axios";
<<<<<<< Updated upstream
import { Text, StyleSheet, TouchableOpacity, TextInput, ImageBackground } from "react-native";
import baseURL from "../../assets/constants";
import { SelectList } from "react-native-dropdown-select-list";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const AddIngredient = () => {
    const [ingredientName, setIngredientName] = useState("");
    const [ingredientQuantity, setIngredientQuantity] = useState("");
    const [ingredientUnit, setIngredientUnit] = useState("");
    const [ingredientDescription, setIngredientDescription] = useState("");
=======
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { IngredientsContext } from './IngredientsContext'; 

export default class AddIngredient extends Component {
    static contextType = IngredientsContext; 

    constructor(props) {
        super(props);
>>>>>>> Stashed changes

        this.onChangeIngredientName = this.onChangeIngredientName.bind(this);
        this.onChangeIngredientQuantity = this.onChangeIngredientQuantity.bind(this);
        this.onChangeIngredientUnit = this.onChangeIngredientUnit.bind(this);
        this.onChangeIngredientDescription = this.onChangeIngredientDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            ingredient_name: "",
            ingredient_quantity: "",
            ingredient_unit: "",
            ingredient_description: "",
        };
<<<<<<< Updated upstream
        console.log(ingredient);
        axios
        .post(baseURL+"/ingredient/add", ingredient)
        .then((res) => {
            console.log(res.data);
            navigation.navigate("MyFridge", { refresh: Date.now() });
        })
        .catch((error) => {
            console.error('Failed to add ingredient',error);
        });
    };

    return (
        <ImageBackground source={require('../../images/addingr.jpg')} style={styles.wrapper}>
<<<<<<< Updated upstream
=======
=======
>>>>>>> Stashed changes
    }

    onChangeIngredientName(e) {
        this.setState({ ingredient_name: e.target.value });
    }

    onChangeIngredientQuantity(e) {
        this.setState({ ingredient_quantity: e.target.value });
    }

    onChangeIngredientUnit(e) {
        this.setState({ ingredient_unit: e.target.value });
    }

    onChangeIngredientDescription(e) {
        this.setState({ ingredient_description: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const newIngredient = {
            ingredient_name: this.state.ingredient_name,
            ingredient_quantity: this.state.ingredient_quantity,
            ingredient_unit: this.state.ingredient_unit,
            ingredient_description: this.state.ingredient_description,
        };

        // Add ingredient to the context
        const { addIngredient } = this.context;
        addIngredient(newIngredient);

        // Reset state
        this.setState({
            ingredient_name: "",
            ingredient_quantity: "",
            ingredient_unit: "",
            ingredient_description: "",
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Add New Ingredient</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Ingredient Name"
                    value={this.state.ingredient_name}
                    onChangeText={(text) => this.setState({ ingredient_name: text })}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Ingredient Quantity"
                    value={this.state.ingredient_quantity}
                    onChangeText={(text) => this.setState({ ingredient_quantity: text })}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Ingredient Unit"
                    value={this.state.ingredient_unit}
                    onChangeText={(text) => this.setState({ ingredient_unit: text })}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Ingredient Description"
                    value={this.state.ingredient_description}
                    onChangeText={(text) => this.setState({ ingredient_description: text })}
                />
                <Button
                    title="Add Ingredient"
                    onPress={this.onSubmit}
                    style={styles.button}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
        paddingHorizontal: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 10,
        margin: 10,
        width: 300
    }
});
