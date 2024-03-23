import React from 'react';
import { View ,Text , Image, TextInput, TouchableOpacity} from 'react-native';
import { sh, sw, fonts, colors } from '../styles/GlobalStyle';

function LR_Login(props) {
    const handleLogin = () => {
        props.navigation.navigate('AppMain');
    };

    const handleForgotPassword = () => {
        props.navigation.navigate('LR_ForgotPassword');
    };
    const handleRegister = () => {
        props.navigation.navigate('Register');
    };

    return (
        <View style={{flex:1}}>
            <Image source={require('../assets/LoginBg.png')} style ={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} />
            <View style = {{ flexDirection: 'row', alignItems: 'center',justifyContent: 'flex-start',paddingTop: sh(230)}}></View>
            
            <View style = {{ flex : 1,justifyContent: 'center', paddingHorizontal: sw(40)}}>
                <Text style = {{fontFamily : fonts.PoppinsMedium , fontSize : sh(35), color: 'white'}}>Login</Text>
                <View style = {{marginBottom: sw(20), backgroundColor: colors.greyBlue, borderRadius: sh(8) , padding: sh(10), marginTop: sh(20),borderColor: 'white',borderWidth: sw(1) }}>
                    <TextInput placeholder = "Email" placeholderTextColor='grey' style = {{fontFamily : fonts.PoppinsRegular , fontSize : sh(16), color:'white'}}/>
                </View>
                <View style = {{marginBottom: sh(20), backgroundColor: colors.greyBlue, borderRadius: sh(8) , padding: sh(10), borderColor: 'white',borderWidth: sw(1) }}>
                    <TextInput placeholder = "Password" placeholderTextColor="grey" style = {{fontFamily : fonts.PoppinsRegular , fontSize : sh(16),color:'white'}}/>
                </View>
                <View style = {{flexDirection: 'row', alignItems: 'flex-start',justifyContent: 'space-between',marginBottom: 20}}>
                    <TouchableOpacity onPress={handleForgotPassword}>
                        <Text style = {{fontFamily : fonts.PoppinsRegular , fontSize : sh(16), color: 'white'}}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleLogin} style={{ borderRadius: sh(8), borderColor: 'white', borderWidth: sw(1), paddingVertical: sh(15) ,paddingHorizontal: sw(30)}}>
                        <Text style={{ fontFamily: fonts.PoppinsRegular, fontSize: sh(16), color: 'white' }}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{marginTop: sh(40), flexDirection: 'row',justifyContent: 'flex-end'}}>
                <Text style = {{textAlign: 'right',fontFamily : fonts.PoppinsRegular , fontSize : sh(16), color: 'white'}}>New Here? 
                    <TouchableOpacity hitSlop={50 } onPress={handleRegister}>
                    <Text style = {{textDecorationLine: 'underline',color: colors.yellow,fontSize : sh(16)}}>   Register</Text>
                    </TouchableOpacity></Text>
                </View>
            </View>
        </View>
    );

    
}

export default LR_Login;