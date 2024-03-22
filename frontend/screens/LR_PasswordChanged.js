import React ,{ useRef }from 'react';
import { View ,Text , Image, TextInput, TouchableOpacity} from 'react-native';
import { appStyles, sh, sw,fonts, colors } from '../styles/GlobalStyle';

function LR_PasswordChanged(props) {
    return (
        <View style={{flex:1}}>
            <Image source={require('../assets/ForgotPwBg.png')} style ={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} />
        <View style={{alignItems: 'center',justifyContent: 'center',marginHorizontal: sw(40),marginTop: sh(80)}}>
            
            <View style = {{paddingTop: 30}}>
                <Image source={require('../assets/SuccessTick.png')} /> 
            </View>
            <Text style={{fontFamily: fonts.PoppinsSemiBold, fontSize: sh(20),paddingTop: 20}}>Successful
            </Text>
            <Text style={{fontFamily: fonts.PoppinsRegular, fontSize: sh(16),textAlign: 'center',paddingTop: 20, opacity :0.5}}>Congratulations! Your password has been changed. Click continue to login
            </Text>
            <TouchableOpacity onPress={handleContinue} style={{backgroundColor:colors.yellow,borderRadius: 8, borderColor: 'white', alignItems: 'center',paddingVertical: 15 ,paddingHorizontal:30, width: '100%', marginTop:30}}>
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