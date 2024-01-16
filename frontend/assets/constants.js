const { Platform } = require("react-native");
import axios from 'axios';
import Constants from 'expo-constants';
import Device from 'expo-device';
import { CooklangRepository } from "cookhub";

if (Platform.OS === 'ios') {
  baseURL = 'http://localhost:5000';
} else if (Platform.OS === 'android' && !Constants.isDevice) {
  baseURL = 'http://10.0.2.2:5000';
} 


  

export default baseURL;