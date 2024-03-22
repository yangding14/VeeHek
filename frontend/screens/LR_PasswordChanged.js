import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { sh, sw, fonts, colors } from '../styles/GlobalStyle';

function LR_PasswordChanged(props) {
    return (
        <View style={{flex:1}}>
            <Image source={require('../assets/ForgotPwBg.png')} style ={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} />
        <View style={{alignItems: 'center',justifyContent: 'center',marginHorizontal: sw(40),marginTop: sh(80)}}>
            
            <View style = {{paddingTop: sh(30)}}>
                <Image source={require('../assets/SuccessTick.png')} /> 
            </View>
            <Text style={{fontFamily: fonts.PoppinsSemiBold, fontSize: sh(20),paddingTop: sh(20)}}>Successful
            </Text>
            <Text style={{fontFamily: fonts.PoppinsRegular, fontSize: sh(16),textAlign: 'center',paddingTop: sh(20), opacity :0.5}}>Congratulations! Your password has been changed. Click continue to login
            </Text>
            <TouchableOpacity onPress={handleContinue} style={{backgroundColor:colors.yellow,borderRadius: sh(8), borderColor: 'white', alignItems: 'center',paddingVertical: sh(15) ,paddingHorizontal:sw(30), width: '100%', marginTop: sh(30)}}>
                <Text style={{ fontFamily: fonts.PoppinsRegular, fontSize: sh(16), color: 'white' }}>Continue</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
    const handleContinue = () => {
        props.navigation.navigate('LR_Login');
    };
}

export default LR_PasswordChanged;