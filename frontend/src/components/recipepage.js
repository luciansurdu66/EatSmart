import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';

export default class RecipePage extends Component {
    state = {
        isModalVisible: false,
    };

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    onFinishPress = () => {
        this.toggleModal();
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
                    placeholderTextColor='gray'
                    value={this.state.recipe_name}
                    onChangeText={(text) => this.onChangeIngredient('recipe_name', text)}
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
                    placeholderTextColor='gray'
                    value={this.state.recipe_ingredients}
                    onChangeText={(text) => this.onChangeIngredient('recipe_ingredients', text)}
                    multiline
                />
                <Text style={styles.subheading}>Method:</Text>
                <TextInput
                    style={[styles.textInput, styles.multilineInput]}
                    placeholder="How to do the recipe?"
                    placeholderTextColor='gray'
                    value={this.state.recipe_method}
                    onChangeText={(text) => this.onChangeIngredient('recipe_method', text)}
                    multiline
                />
                <TouchableOpacity style={styles.finishButton} onPress={this.onFinishPress}>
                    <Text style={styles.finishButtonText}>Finish</Text>
                </TouchableOpacity>
                <Modal isVisible={this.state.isModalVisible}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Congrats 🎉</Text>
                        <Text style={styles.modalText}>Keep up the good work!</Text>
                        <TouchableOpacity style={styles.modalButton} onPress={() => { this.props.navigation.navigate('RecipeSearch'); this.toggleModal(); }}>
                            <Text style={styles.modalButtonText}>Try another recipe</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
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
    color: '#556B2F',
    fontWeight: 'bold',
},
textInput: {
    fontSize: 18,
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
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
executionTimeLabel: {
    fontWeight: 'bold',
    color: '#555',
},
executionTimeInput: {
    marginLeft: 5,
    width: 50,
},
finishButton: {
  backgroundColor: '#68904D',
  paddingVertical: 15,
  borderRadius: 10,
  marginTop: 20,
  marginBottom: 30,
  alignItems: 'center',
},
finishButtonText: {
  color: '#fff',
  fontSize: 18,
  fontWeight: 'bold',
},
    modalContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
    },
    modalTitle: {
        fontSize: 24,
        color: '#e67e22',
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    modalText: {
        fontSize: 18,
        color: '#555',
        textAlign: 'center',
        marginBottom: 20,
    },
    modalButton: {
        backgroundColor: '#e67e22',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
