import React, { Component } from "react";
import axios from "axios";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

export default class AddIngredient extends Component {
    constructor(props) {
        super(props);

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
    }

    onChangeIngredientName(e) {
        this.setState({
            ingredient_name: e.target.value,
        });
    }

    onChangeIngredientQuantity(e) {
        this.setState({
            ingredient_quantity: e.target.value,
        });
    }

    onChangeIngredientUnit(e) {
        this.setState({
            ingredient_unit: e.target.value,
        });
    }

    onChangeIngredientDescription(e) {
        this.setState({
            ingredient_description: e.target.value,
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const newIngredient = {
            ingredient_name: this.state.ingredient_name,
            ingredient_quantity: this.state.ingredient_quantity,
            ingredient_unit: this.state.ingredient_unit,
            ingredient_description: this.state.ingredient_description,
        };

        axios
            .post("http://localhost:5000/ingredients/add", newIngredient)
            .then((res) => console.log(res.data));

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
                    onChange={this.onChangeIngredientName}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Ingredient Quantity"
                    value={this.state.ingredient_quantity}
                    onChange={this.onChangeIngredientQuantity}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Ingredient Unit"
                    value={this.state.ingredient_unit}
                    onChange={this.onChangeIngredientUnit}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Ingredient Description"
                    value={this.state.ingredient_description}
                    onChange={this.onChangeIngredientDescription}
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
    titleText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginBottom: 20
    },
    input: {
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
    },
    buttonText: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginBottom: 20
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginBottom: 20
    }
    });