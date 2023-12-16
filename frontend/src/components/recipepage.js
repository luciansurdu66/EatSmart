import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class  RecipePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipe_name: "",
            recipe_photo: "",
            recipe_ingredients: "",
            recipe_method: "",
            recipe_time: ""
        };
    }
    onChangeIngredient = (field, value) => {
        this.setState({[field]: value});
    };
    

    onSubmit = () => {
        const recipe = {
            recipe_name:this.state.recipe_name,
            recipe_photo: this.state.recipe_photo,
            recipe_ingredients: this.state.recipe_ingredients,
            recipe_method: this.state.recipe_method,
            recipe_time: this.state.recipe_time

        };

        this.setState({
            recipe_name: "",
            recipe_photo: "",
            recipe_ingredients: "",
            recipe_method: "",
            recipe_time: ""

        });
    };

    render() {
    return (
        <ScrollView style={styles.container}>


        <Image
            //source={require('./dish.jpg')}
            style={styles.image}
            resizeMode="cover"
        />
                <TextInput
                        style={styles.heading}
                        placeholder="Recipe name"
                        placeholderTextColor= 'gray'
                        value={this.state.ingredient_name}
                        onChangeText={(text) => this.onChangeIngredient('ingredient_name', text)}

                    />
    <View style={styles.iconContainer}>
            <Icon name="clock-o" size={18} color="#555" />
            <TextInput
                            style={[styles.executionTimeLabel, styles.executionTimeInput]}
                            placeholder="Time"
                            placeholderTextColor='gray'
                            value={this.state.recipe_time}
                            onChangeText={(text) => this.onChangeIngredient('recipe_time', text)}
                        />
    </View>

        <Text style={styles.subheading}>Ingredients:</Text>
        <TextInput
                        style={[styles.textInput, styles.multilineInput]}
                        placeholder="List of ingredients and their quantity"
                        placeholderTextColor= 'gray'
                        value={this.state.recipe_ingredients}
                        onChangeText={(text) => this.onChangeIngredient('recipe_ingredient', text)}
                        multiline
                    />

        <Text style={styles.subheading}>Method:</Text>
        <TextInput
                        style={[styles.textInput, styles.multilineInput]}
                        placeholder="How to do the recipe?"
                        placeholderTextColor= 'gray'
                        value={this.state.recipe_method}
                        onChangeText={(text) => this.onChangeIngredient('recipe_method', text)}
                        multiline
                    />

        </ScrollView>
    );
 }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f9f9f9',
    },
    heading: {
      fontSize: 28,
      textAlign: 'center',
      marginBottom: 10,
      color: '#e67e22',
      fontWeight: 'bold',
    },
    image: {
      width: '100%',
      height: 250,
      marginBottom: 20,
      borderRadius: 15,
    },
    subheading: {
      fontSize: 24,
      marginBottom: 10,
      color: '#e67e22',
      fontWeight: 'bold',
    },
    listContainer: {
      marginBottom: 20,
    },
    listItem: {
      fontSize: 18,
      marginBottom: 8,
      color: '#555',
    },
    executionTime: {
      fontSize: 18,
      color: '#777',
    },
    executionTimeLabel: {
      fontWeight: 'bold',
      color: '#555',
    },
    multilineInput: {
        height: 100,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    executionTimeInput: {
        marginLeft: 5,
        width: 50, // Ajustează dimensiunea după necesități
    },
  });

