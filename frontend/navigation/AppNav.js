import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
// import LR__Landing_Page from '../screens/LR__Landing_Page';
// import LR__Register_Login from '../screens/LR__Register_Login';
// import LR__Forget_Password from '../screens/LR__Forget_Password';
// import LR__General_Sign_Up from '../screens/LR__General_Sign_Up';
// import LR__Driver_Sign_Up from '../screens/LR__Driver_Sign_Up';
// import LR__Choose_Role from '../screens/LR__Choose_Role';
// import LR__Terms_And_Conditions from '../screens/LR_Terms_&_Conditions';
// import LR__Code_of_Conduct_Notice from '../screens/LR__Code_of_Conduct_Notice';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LR_WelcomePage from '../screens/LR_WelcomePage';
import LR_Register from '../screens/LR_Register';
import LR_ForgotPassword from '../screens/LR_ForgotPassword';

const Stack = createStackNavigator();

// Set default options for all screens within the Stack.Navigator
const screenOptions = {
    headerShown: false, // Hide the header for all screens
};

function AppNav() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptions}>
                <Stack.Group>
                    <Stack.Screen
                        name="LR_WelcomePage"
                        component={LR_WelcomePage}
                    />
                    <Stack.Screen
                        name="LR_Register"
                        component={LR_Register}
                    />
                    <Stack.Screen
                        name="LR_ForgotPassword"
                        component={LR_ForgotPassword}
                    />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNav;
