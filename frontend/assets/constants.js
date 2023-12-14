const { Platform } = require("react-native");
import axios from 'axios';
import Constants from 'expo-constants';
import Device from 'expo-device';
import { CooklangRepository } from "cookhub";

async function getPublicIPAddress() {
    try {
      const response = await axios.get('http://127.0.0.1:5000/api/getIp');
      console.log('Public IP address:', response.data.ip);
      return data.ip;
    } catch (error) {
      console.error('Error fetching public IP address:', error.message);
      return null;
    }
  }

  async function determineBaseURL() {
  
    if (Platform.OS === 'ios') {
      baseURL = 'http://localhost:5000';
    } else if (Platform.OS === 'android' && !Constants.isDevice) {
      baseURL = 'http://10.0.2.2:5000';
    } 
    console.log(baseURL);
  }


  

export default determineBaseURL;