import React , { useRef } from 'react';
import { View ,Text , Image, TextInput, TouchableOpacity} from 'react-native';
import { sh, sw,fonts, colors } from '../styles/GlobalStyle';

function LR_CheckEmail(props) {
    const inputRefs = Array(5).fill(0).map((_, i) => useRef(null));

    const focusNextInput = (index) => {
        if (index < inputRefs.length - 1) {
            inputRefs[index + 1].current.focus();
        }
    };
    return (
        <View style={{flex:1}}>
            <Image source={require('../assets/ForgotPwBg.png')} style ={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} />
            <Image source={require('../assets/BackButton.png')} style ={{ top: sh(50), left: sw(20)}} />
            
            <View style = {{ alignItems: 'flex-start',justifyContent: 'flex-start',marginHorizontal: sw(40),marginTop: sh(80)}}>
                <Text style = {{fontFamily : fonts.PoppinsBold , fontSize : sh(20), color: 'black', marginBottom:sh(10)}}>Check Your Email</Text>
                <Text style = {{fontFamily : fonts.PoppinsRegular , fontSize : sh(13), color: 'black',opacity: 0.5, marginBottom:sh(20)}}>We sent a reset link to{' '}  
                <Text style = {{textDecorationLine: 'underline',color:'blue',fontSize : sh(13)}}>cheokcheok@gmail.com </Text>
                . Please enter the 5 digit code that mentioned in the email.</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: sh(30) }}>
                {[...Array(5)].map((_, index) => (
                    <View key={index} style={{ width: sw(50), height: sh(50), borderRadius: sh(8), backgroundColor: 'white', borderColor: 'black', borderWidth: sw(1), marginHorizontal: sw(10) }}>
                        <TextInput
                            ref={inputRefs[index]}
                            placeholder=" "
                            placeholderTextColor="grey"
                            style={{ fontFamily: fonts.PoppinsRegular, fontSize: sh(16), color: 'black', textAlign: 'center' }}
                            maxLength={1}
                            keyboardType="numeric"
                            onChangeText={(text) => {
                                if (text.length === 1) {
                                    focusNextInput(index);
                                }
                            }}
                            onKeyPress={({ nativeEvent }) => {
                                if (nativeEvent.key === 'Backspace' && index > 0 && !nativeEvent.repeat) {
                                    inputRefs[index - 1].current.focus();
                                }
                            }}
                        />
                    </View>
                ))}
            </View>
            

                <TouchableOpacity onPress={handleVerifyCode} style={{backgroundColor:colors.greyBlue,borderRadius: sh(8), borderColor: 'white', alignItems: 'center', justifyContent: 'center',paddingVertical: sh(15) ,paddingHorizontal:sw(30),width: '100%'}}>
                    <Text style={{ fontFamily: fonts.PoppinsRegular, fontSize: sh(16), color: 'white' }}>Verify Code</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    const handleVerifyCode = () => {
        props.navigation.navigate('LR_Register');
    };
}

export default LR_CheckEmail;