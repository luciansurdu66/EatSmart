import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Animated, Dimensions } from 'react-native';
import styles from '../styles/burgerMenu.style';
import { Modal } from 'bootstrap';

const BurgerMenu = ({isVisible, toggleMenu}) => {
    const menuAnimation = useRef(new Animated.Value(0)).current;
    const screenWidth = Dimensions.get('window').width;
    
    useEffect(() => {
        Animated.timing(menuAnimation, {
            toValue: isVisible ? 1 : 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [isVisible]);

    const menuTranslateX = menuAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [-screenWidth, 0],
    });

    return (
        <Modal animationType="slide" transparent={true} visible={isVisible}>
            <View style={styles.container}>
                <TouchableOpacity onPress={toggleMenu} style={styles.burgerButton}>
                    <Text style={styles.burgerButtonText}>&#x2630;</Text>
                </TouchableOpacity>
                <Animated.View style={[styles.menu, {transform: [{translateX: menuTranslateX}]}]}>
                    <Text style={styles.menuContent}>Menu Content Goes Here</Text>
                    <TouchableOpacity onPress={toggleMenu} style={styles.closeButton}>
                        <Text style={styles.closeButtonText}>&times;</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </Modal>
    ); 
};

export default BurgerMenu;