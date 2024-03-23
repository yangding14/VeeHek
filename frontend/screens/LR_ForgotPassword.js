import React from 'react';
import { View ,Text , Image, TextInput, TouchableOpacity} from 'react-native';
import { sh, sw,fonts, colors } from '../styles/GlobalStyle';

function LR_ForgotPassword(props) {
    return (
        <View style={{flex:1}}>
            <Image source={require('../assets/ForgotPwBg.png')} style ={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} />
            <Image source={require('../assets/backButton.png')} style ={{ top: sh(50), left: sw(20)}} />
            
            <View style = {{ alignItems: 'flex-start',justifyContent: 'flex-start',marginHorizontal: sw(40),marginTop: sh(80)}}>
                <Text style = {{fontFamily : fonts.PoppinsBold , fontSize : sh(25), color: 'black', marginBottom: sh(10)}}>Forgot Password</Text>
                <Text style = {{fontFamily : fonts.PoppinsRegular , fontSize : sh(15), color: 'black',opacity: 0.5, marginBottom: sh(20)}}>Please enter your email to reset the password</Text>
                <Text style = {{fontFamily : fonts.PoppinsRegular , fontSize : sh(18), color: 'black',marginBottom: sh(10)}}>Your Email</Text>
                <View style = {{width: '100%', marginBottom: sh(20), borderRadius: sh(8) , padding: sh(10),borderColor: 'black',opacity:0.5, borderWidth: 1 }}>
                    <TextInput placeholder = "Enter your email" placeholderTextColor="grey" style = {{fontFamily : fonts.PoppinsRegular , fontSize : sh(16),color:'black'}}/>
                </View>
                <TouchableOpacity onPress={handleResetPassword} style={{backgroundColor:colors.greyBlue,borderRadius: sh(8), borderColor: 'white', alignItems: 'center', justifyContent: 'center',paddingVertical: sh(15) ,paddingHorizontal: sw(30), width: '100%'}}>
                    <Text style={{ fontFamily: fonts.PoppinsRegular, fontSize: sh(18), color: 'white' }}>Reset Password</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    const handleResetPassword = () => {
        props.navigation.navigate('LR_Register');
    };
}

export default LR_ForgotPassword;