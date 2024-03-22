import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, Image, Settings } from 'react-native';
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
import Test from '../screens/Test';
import Wallet_EnvelopeDebt from '../screens/Wallet_EnvelopeDebt';
import Setting from '../screens/Settings';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LR_WelcomePage from '../screens/LR_WelcomePage';
import LR_Register from '../screens/LR_Register';
import LR_ForgotPassword from '../screens/LR_ForgotPassword';
import { colors } from '../styles/GlobalStyle';
import Settings_EditProfile from '../screens/Settings_EditProfile';
import Settings_ChangePassword from '../screens/Settings_ChangePassword';
import Settings_FinancialHealth from '../screens/Settings_FinancialHealth';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const test = createBottomTabNavigator();

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
                <Tab.Navigator initialRouteName='Home' screenOptions={screenOptions}>
                    <Tab.Screen
                        name="Home"
                        component={HomeTab}
                        options={{title: 'Wallet Home'}}
                        initialParams={{name: 'Song Jun'}}
                    />
                    <Tab.Screen
                        name="Settings"
                        component={SettingTab}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </View>
    );
}

function HomeTab(){
    return(
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="Wallet_Home" component={Wallet_Home} />
            <Stack.Screen name="Wallet_Envelope" component={Wallet_Envelope} />
            <Stack.Screen name="Wallet_EnvelopeDebt" component={Wallet_EnvelopeDebt} />
        </Stack.Navigator>
    )
}

function SettingTab(){
    return(
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="SettingsPage" component={Setting} />
            <Stack.Screen name="Settings_EditProfile" component={Settings_EditProfile}/>
            <Stack.Screen name="Settings_ChangePassword" component={Settings_ChangePassword}/>
            <Stack.Screen name="Settings_FinancialHealth" component={Settings_FinancialHealth}/>
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9'
  },
});


export default AppNav;
