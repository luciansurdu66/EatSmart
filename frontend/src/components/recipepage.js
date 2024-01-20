import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const RecipePage = ({ route }) => {
    const { recipeId } = route.params || { recipeId: 716429 };
    const [recipeDetails, setRecipeDetails] = useState(null);

    useEffect(() => {
        const fetchRecipeDetails = async () => {
            try {
                const response = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=51f681b54480438e82819cd110f546a8`);
                setRecipeDetails(response.data);
            } catch (error) {
                console.error('Error fetching recipe details:', error);
            }
        };

        fetchRecipeDetails();
    }, [recipeId]);
    const [isModalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();
    
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const onFinishPress = () => {
        toggleModal();
    };

    if (!recipeDetails) {
        return (
            <View style={styles.loadingContainer}>
                <Text style={styles.loadingText}>Loading ...</Text>
            </View>
        );
    }

    const stripHtml = (htmlString) => {
        return htmlString.replace(/<[^>]*>?/gm, '');
    };

    const plainInstructions = stripHtml(recipeDetails.instructions);

    const renderInstructions = () => {
        // Assuming instructions are a single string; if it's an array, you can map over it
        const steps = plainInstructions.split('. '); // Splitting by period for demonstration
        return steps.map((step, index) => (
            <Text key={index} style={styles.instructionStep}>
                {index + 1}. {step}
            </Text>
        ));
    };

    return (
        <ScrollView style={styles.container}>
             <Image
                source={{ uri: recipeDetails.image }}
                style={styles.image}
                resizeMode="cover"
            />
            <Text style={styles.heading}>
                {recipeDetails.title}
            </Text>
            <View style={styles.iconContainer}>
                <Icon name="clock-o" size={18} color="#555" />
                <Text style={styles.text}>
                    {" "} {recipeDetails.readyInMinutes} minutes
                </Text>
            </View>
            <Text style={styles.subheading}>Ingredients:</Text>
            <View style={styles.text}>
                {recipeDetails.extendedIngredients.map((ingredient, index) => (
                    <Text key={index} style={styles.ingredient}>
                        {`${ingredient.amount} ${ingredient.unit} ${ingredient.name}`}
                    </Text>
                ))}
            </View>
            <Text style={styles.subheading}>Method:</Text>
            <View style={styles.instructionsContainer}>
                <Text style={styles.instructionsTitle}>Instructions:</Text>
                {renderInstructions()}
            </View>
            <TouchableOpacity style={styles.finishButton} onPress={onFinishPress}>
                    <Text style={styles.finishButtonText}>Finish</Text>
            </TouchableOpacity>
            <Modal isVisible={isModalVisible}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Congrats 🎉</Text>
                    <Text style={styles.modalText}>Keep up the good work!</Text>
                    <TouchableOpacity style={styles.modalButton} onPress={() => { navigation.navigate('RecipeSearch'); toggleModal(); }}>
                        <Text style={styles.modalButtonText}>Try another recipe</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </ScrollView>
    );
    
}

export default RecipePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
},
instructionsContainer: {
    marginTop: 20,
    paddingHorizontal: 15,
},
instructionsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
},
instructionStep: {
    fontSize: 16,
    lineHeight: 24, // Increase line height for better readability
    marginBottom: 10,
},
loadingContainer: {
    flex: 1, // Take up all available space in the container
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    backgroundColor: '#f9f9f9', // Optional background color
},
loadingText: {
    fontSize: 20, // Larger font size for the text
    // Additional styling if needed
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
    marginTop: 10,
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
