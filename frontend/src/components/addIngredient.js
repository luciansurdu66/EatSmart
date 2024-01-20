import axios from "axios";
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

    const navigation = useNavigation();

    data = 
    [
        {key:'1', value:'kg'},
        {key:'2', value:'g'},
        {key:'3', value:'mg'},
        {key:'4', value:'l'},
        {key:'5', value:'ml'},
    ]

    const addIngredient = () => {
        const ingredient = {
            name: ingredientName,
            quantity: ingredientQuantity,
            unit: ingredientUnit,
            description: ingredientDescription,
        };
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
>>>>>>> Stashed changes
                <Text style={styles.header}>Add New Ingredient</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Ingredient Name"
                    placeholderTextColor= 'gray'
                    value={ingredientName}
                    onChangeText={(text) => setIngredientName(text)}

                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Ingredient Quantity"
                    placeholderTextColor= 'gray'
                    value={ingredientQuantity}
                    onChangeText={(text) => setIngredientQuantity(text)}
                    keyboardType="numeric"
                />
                <SelectList 
                    setSelected={(val) => setIngredientUnit(val)}
                    data={data}
                    save="value"
                    boxStyles={{width: 353, marginBottom: 15, borderColor: '#68904D', backgroundColor: "#FFFFFF" }}
                    searchPlaceholder= "search"
                    placeholder="Choose the unit"
                    dropdownStyles={{backgroundColor: "#FFFFFF", marginBottom: 15}}
                    >
                </ SelectList>
                <TextInput
                    style={[styles.textInput, styles.multilineInput]}
                    placeholder="Ingredient Description"
                    placeholderTextColor= 'gray'
                    value={ingredientDescription}
                    onChangeText={(text) => setIngredientDescription(text)}
                    multiline
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={addIngredient}
                >
                    <Text style={styles.buttonText}>Add Ingredient</Text>
                </TouchableOpacity>
        </ImageBackground>
        );
    }

export default AddIngredient;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: "10%",
        paddingHorizontal: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#68904D'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#68904D',
        borderRadius: 8,
        padding: 15,
        marginBottom: 15,
        width: '100%',
        backgroundColor: "#FFFFFF"
    },
    multilineInput: {
        height: 100,
        backgroundColor: "#FFFFFF"
    },
    button: {
        backgroundColor: '#68904D',
        borderRadius: 50,
        margin: 10,
        paddingVertical: 15,
        paddingHorizontal: 30,
        alignItems: 'center',
        fontSize: 20,
        textShadowColor: 'transparent',
        fontFamily: 'serif'
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    selectList: {
        width: '100%', // sau orice altă valoare dorită
        marginTop: 10,
        backgroundColor: "#FF4FFF"  // sau orice alt spațiere dorită
    },
});

