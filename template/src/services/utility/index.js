

/**
 * Created By : Sakthi Naveen M
 * Find By Topic Name :-
 * Check Platform
 * Orientation
 * Development
 * Regex Function
 * Normal Function
 * */

import { Platform,Dimensions } from "react-native";


/** Check Platform **/ 

export const isAndroid = () => Platform.OS === "android";
export const isIOS = () => Platform.OS === "ios";
export const isMacOS = () => Platform.OS === "macos";
export const isWeb = () => Platform.OS === "web";
export const isWindows = () => Platform.OS === "windows";

// isIphoneX: A utility function that can be used to determine if the device is an iPhone X or later
export const isIphoneX = () => {
    const {height, width} = Dimensions.get('window');
    return (
      Platform.OS === 'ios' &&
      !Platform.isPad &&
      !Platform.isTVOS &&
      (height === 812 || width === 812)
    );
};
  
/** Orientation **/ 

// Returns true if the screen is in portrait mode
export const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
};
  
//  Returns true of the screen is in landscape mode
export const isLandscape = () => {
    const dim = Dimensions.get('screen');
    return dim.width >= dim.height;
  };
  
/** Development **/ 

// Used to Log Output
export const Debug = (...props) => console.log(...props);


/** Regex Function **/ 

export const isValidatePhoneNumber = phoneNumber => /^\d{10}$/.test(phoneNumber);

export const isValidUserName = email => {
    const format = /^[0-9a-zA-Z_]{5,}$/;
    return format.test(email);
};

export const isValidPhoneNo = phoneNo => {
    const phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return phoneNumberPattern.test(phoneNo);
  };
  

export const isValidEmail = email => {
    const format =
      /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return format.test(email);
};



/** Normal Function **/ 

// Get Dynamic Color
export const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };