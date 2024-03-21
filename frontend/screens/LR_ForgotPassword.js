import React from 'react';
import { View ,Text , Image, TextInput, TouchableOpacity} from 'react-native';
import { appStyles, sh, sw,fonts, colors } from '../styles/GlobalStyle';

function LR_ForgotPassword(props) {
    return (
        <View style={{flex:1}}>
            <Image source={require('../assets/ForgotPwBg.png')} style ={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} />
            <Image source={require('../assets/BackButton.png')} style ={{ top: 50, left: 20}} />
            
            <View style = {{ alignItems: 'flex-start',justifyContent: 'flex-start',marginHorizontal: sw(40),marginTop: sh(80)}}>
                <Text style = {{fontFamily : fonts.PoppinsBold , fontSize : 20, color: 'black', marginBottom:10}}>Forgot Password</Text>
                <Text style = {{fontFamily : fonts.PoppinsRegular , fontSize : 13, color: 'black',opacity: 0.5, marginBottom:20}}>Please enter your email to reset the password</Text>
                <Text style = {{fontFamily : fonts.PoppinsRegular , fontSize : 16, color: 'black',marginBottom:10}}>Your Email</Text>
                <View style = {{width: '100%', marginBottom: 20, borderRadius: 8 , padding: 10,borderColor: 'black',opacity:0.5, borderWidth: 1 }}>
                    <TextInput placeholder = "Enter your email" placeholderTextColor="grey" style = {{fontFamily : fonts.PoppinsRegular , fontSize : 16,color:'black'}}/>
                </View>
                <TouchableOpacity onPress={handleResetPassword} style={{backgroundColor:colors.greyBlue,borderRadius: 8, borderColor: 'white', alignItems: 'center', justifyContent: 'center',paddingVertical: 15 ,paddingHorizontal:30,width: '100%'}}>
                    <Text style={{ fontFamily: fonts.PoppinsRegular, fontSize: 16, color: 'white' }}>Reset Password</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    const handleResetPassword = () => {
        props.navigation.navigate('LR_Register');
    };
}

export default LR_ForgotPassword;