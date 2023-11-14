import React, { Component } from "react";
import axios from "axios";
import { View, Text, Button, TextInput, StyleSheet, ActivityIndicator } from "react-native";

export default class AddIngredient extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ingredientName: "",
            ingredientQuantity: "",
            ingredientUnit: "",
            ingredientDescription: "",
            loading: false,
            error: null,
        };
    }

    onChangeIngredientName(text) {
        this.setState({
            ingredientName: text,
        });
    }

    onChangeIngredientQuantity(text) {
        this.setState({
            ingredientQuantity: text,
        });
    }

    onChangeIngredientUnit(text) {
        this.setState({
            ingredientUnit: text,
        });
    }

    onChangeIngredientDescription(text) {
        this.setState({
            ingredientDescription: text,
        });
    }

    onSubmit() {
        this.setState({ loading: true, error: null });

        const newIngredient = {
            ingredientName: this.state.ingredientName,
            ingredientQuantity: this.state.ingredientQuantity,
            ingredientUnit: this.state.ingredientUnit,
            ingredientDescription: this.state.ingredientDescription,
        };

        axios
            .post("http://localhost:5000/ingredients/add", newIngredient)
            .then((res) => {
                console.log(res.data);
                // Additional handling for success, if needed.
            })
            .catch((error) => {
                console.error("Error adding ingredient:", error);
                this.setState({ error: "Error adding ingredient." });
            })
            .finally(() => {
                this.setState({ loading: false });
            });

        this.setState({
            ingredientName: "",
            ingredientQuantity: "",
            ingredientUnit: "",
            ingredientDescription: "",
        });
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.header}>Add New Ingredient</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Ingredient Name"
                    value={this.state.ingredientName}
                    onChangeText={(text) => this.onChangeIngredientName(text)}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Ingredient Quantity"
                    value={this.state.ingredientQuantity}
                    onChangeText={(text) => this.onChangeIngredientQuantity(text)}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Ingredient Unit"
                    value={this.state.ingredientUnit}
                    onChangeText={(text) => this.onChangeIngredientUnit(text)}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Ingredient Description"
                    value={this.state.ingredientDescription}
                    onChangeText={(text) => this.onChangeIngredientDescription(text)}
                />
                {this.state.loading ? (
                    <ActivityIndicator style={styles.loader} size="large" color="blue" />
                ) : (
                    <Button
                        title="Add Ingredient"
                        onPress={() => this.onSubmit()}
                        color="green"
                        style={styles.button}
                    />
                )}
                {this.state.error && <Text style={styles.errorText}>{this.state.error}</Text>}
                <View style={styles.spacing}></View>
                {}
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
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'black',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 300,
    },
    button: {
        padding: 10,
        margin: 0, 
        width: 300,
        backgroundColor: 'green',
    },
    spacing: {
        height: 40, 
    },
    loader: {
        margin: 20,
    },
    errorText: {
        color: 'orange',
        marginTop: 10,
    },
});
