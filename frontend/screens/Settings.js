import React from 'react';
import SettingsRow from '../components/SettingsRow';
import { View,Text,Image, StyleSheet } from 'react-native';
import { appStyles,colors,fonts,sh } from '../styles/GlobalStyle';


function Settings(props) {
    return (<View style={appStyles.appBackground}>
        <Text style={{fontFamily:fonts.RubikRegular, fontSize:sh(28)}}>
            Song Jun
        </Text>
        <View style={{ borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth, marginVertical: sh(20),}}/>
<Text style={{fontFamily:fonts.RubikRegular, fontSize:sh(20), color:colors.grey}}>
            Account Settings
        </Text>
        <SettingsRow text={"Edit Profile"}/>
        <SettingsRow text={"Change Password"}/>
        <SettingsRow text={"Check Financial Health"}/>
        <SettingsRow text={"Push Notifications"}/>
        <View style={{ borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth, marginVertical: sh(20),}}/>
<Text style={{fontFamily:fonts.RubikRegular, fontSize:sh(20), color:colors.grey}}>
            More
        </Text>
        <SettingsRow text={"About Us"}/>
        <SettingsRow text={"Privacy Policy"}/>
        <SettingsRow text={"Terms and Conditions"}/>
        <SettingsRow text={"Logout"}/>
        </View>
    );
}

export default Settings;