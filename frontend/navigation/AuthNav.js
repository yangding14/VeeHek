import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, Image, Settings, Text } from 'react-native';
import Debt_Home from '../screens/Debt_Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { colors, fonts, sh, sw } from '../styles/GlobalStyle';
import AppNav from './AppNav';
import SplashPage from '../screens/SplashPage';
import LR_Login from '../screens/LR_Login';
import LR_ForgotPassword from '../screens/LR_ForgotPassword';
import LR_CheckEmail from '../screens/LR_CheckEmail';
import LR_PasswordChanged from '../screens/LR_PasswordChanged';
import LR_Register from '../screens/LR_Register';
import SETUP_Expenses from '../screens/SETUP_Expenses';
import SETUP_Debts from '../screens/SETUP_Debts';

const Stack = createStackNavigator();

// Set default options for all screens within the Stack.Navigator
const screenOptions = {
    headerShown: false, // Hide the header for all screens
};

const navTheme = {
    colors:{
        background: colors.bgWhite
    }
}

function AuthNav() {
    return (
        <View style={styles.container}>
            <NavigationContainer theme={navTheme}>
                <Stack.Navigator initialRouteName='Login' screenOptions = {screenOptions}>
                    <Stack.Screen name = "Login" component={Login}/>
                    <Stack.Screen name = "Register" component={Register}/>
                    <Stack.Screen name = "AppMain" component={AppNav}/>
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}

function Login(){
    return(
        <Stack.Navigator initialRouteName='SplashPage' screenOptions = {screenOptions}>
            <Stack.Screen name = "SplashPage" component={SplashPage}/>
            <Stack.Screen name = "LR_Login" component={LR_Login}/>
            <Stack.Screen name = "LR_ForgotPassword" component={LR_ForgotPassword}/> 
            <Stack.Screen name = "LR_CheckEmail" component={LR_CheckEmail}/> 
            <Stack.Screen name = "LR_PasswordChanged" component={LR_PasswordChanged}/> 
        </Stack.Navigator>
    )
}

function Register(){
    return(
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="LR_Register" component={LR_Register} />
            <Stack.Screen name="SETUP_Expenses" component={SETUP_Expenses} />
            <Stack.Screen name="SETUP_Debts" component={SETUP_Debts} />
        </Stack.Navigator>
    )
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9'
  },
  icon: {
    height: sh(26),
    width: undefined,
    aspectRatio: 1,
    marginBottom: sh(5)
  },
  textUnfocused: {
    fontFamily: fonts.PoppinsRegular,
    fontSize: sh(12)
  },
  textFocused: {
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: sh(12)
  },
});


export default AuthNav;
