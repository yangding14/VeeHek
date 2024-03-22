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
import Wallet_Home from '../screens/Wallet_Home';
import Wallet_Envelope from '../screens/Wallet_Envelope';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LR_WelcomePage from '../screens/LR_WelcomePage';
import LR_Register from '../screens/LR_Register';
import LR_ForgotPassword from '../screens/LR_ForgotPassword';
import { colors } from '../styles/GlobalStyle';

const Stack = createStackNavigator();
const Tab = createStackNavigator();

// Set default options for all screens within the Stack.Navigator
const screenOptions = {
    headerShown: false, // Hide the header for all screens
};

const navTheme = {
    colors:{
                    background: colors.bgWhite
                }
}

function AppNav() {
    return (
        <View style={styles.container}>
            <NavigationContainer theme={navTheme}>
                <Stack.Navigator initialRouteName='Wallet_Home' screenOptions={screenOptions}>
                    <Stack.Group>
                        <Stack.Screen
                            name="Home"
                            component={Home}
                            options={{title: 'Wallet Home'}}
                            initialParams={{name: 'Song Jun'}}
                        />
                    </Stack.Group>
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}

function Home(){
    return(
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Wallet_Home" component={Wallet_Home} />
            <Tab.Screen name="Wallet_Envelope" component={Wallet_Envelope} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple'
  },
});


export default AppNav;
