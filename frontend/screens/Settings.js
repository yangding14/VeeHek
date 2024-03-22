import React,{useState} from 'react';
import SettingsRow from '../components/SettingsRow';
import { View,Text,Image, StyleSheet } from 'react-native';
import { appStyles,colors,fonts,sh } from '../styles/GlobalStyle';
import { useNavigation } from '@react-navigation/native';


function Settings(props) {
    const navigation = useNavigation();

    const onPressSettingRow = (setting) =>{
        navigation.navigate(setting);
    }
    const [name, setName] = useState("Song Jun");
    return (<View style={appStyles.appBackground}>
        <Text style={{fontFamily:fonts.RubikRegular, fontSize:sh(28)}}>
            {name}
        </Text>
        <View style={{ borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth, marginVertical: sh(20),}}/>
<Text style={{fontFamily:fonts.RubikRegular, fontSize:sh(20), color:colors.grey}}>
            Account Settings
        </Text>
        <SettingsRow text={"Edit Profile"} onPressSettingRow={()=>onPressSettingRow("Settings_EditProfile")} />
        <SettingsRow text={"Change Password"} onPressSettingRow={()=>onPressSettingRow("Settings_ChangePassword")}/>
        <SettingsRow text={"Check Financial Health"} onPressSettingRow={()=>onPressSettingRow("Settings_FinancialHealth")}/>
        <SettingsRow text={"Push Notifications"}/>
        <View style={{ borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth, marginVertical: sh(20),}}/>
<Text style={{fontFamily:fonts.RubikRegular, fontSize:sh(20), color:colors.grey}}>
            More
        </Text>
        <SettingsRow text={"About Us"} onPressSettingRow={()=>onPressSettingRow("Settings_AboutUs")}/>
        <SettingsRow text={"Privacy Policy"} onPressSettingRow={()=>onPressSettingRow("Settings_PrivacyPolicy")}/>
        <SettingsRow text={"Terms and Conditions"} onPressSettingRow={()=>onPressSettingRow("Settings_TermsAndCon")}/>
        <SettingsRow text={"Logout"} onPressSettingRow={onPressSettingRow}/>
        </View>
    );
}

export default Settings;