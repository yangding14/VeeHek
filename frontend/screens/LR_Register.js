import React from 'react';
import { View ,Text , Image, TextInput, TouchableOpacity} from 'react-native';
import { sh, sw, fonts, colors } from '../styles/GlobalStyle';

function LR_Register(props) {
    return (
        <View style={{flex:1}}>
            <Image source={require('../assets/RegisterBg.png')} style ={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} />
            <View style = {{ flexDirection: 'row', alignItems: 'center',justifyContent: 'flex-start',paddingTop: sh(230)}}></View>
            
            <View style = {{ flex : 1, justifyContent: 'center', paddingHorizontal: sw(40)}}>
                <Text style = {{fontFamily : fonts.PoppinsMedium , fontSize : sh(35), color: 'white'}}>Register</Text>
                <View style = {{marginBottom: sh(20), backgroundColor: colors.greyBlue, borderRadius: sh(8) , padding: sh(10), marginTop: sh(20), borderColor: 'white',borderWidth: sw(1) }}>
                    <TextInput placeholder = "Full Name" placeholderTextColor='grey' style = {{fontFamily : fonts.PoppinsRegular , fontSize : sh(16), color:'white'}}/>
                </View>
                <View style = {{marginBottom: sh(20), backgroundColor: colors.greyBlue, borderRadius: sh(8) , padding: sh(10), borderColor: 'white',borderWidth: sw(1) }}>
                    <TextInput placeholder = "Email" placeholderTextColor="grey" style = {{fontFamily : fonts.PoppinsRegular , fontSize : sh(16), color:'white'}}/>
                </View>
                <View style = {{marginBottom: sh(20), backgroundColor: colors.greyBlue, borderRadius: sh(8) , padding: sh(10), borderColor: 'white',borderWidth: sw(1) }}>
                    <TextInput placeholder = "Password" placeholderTextColor="grey" style = {{fontFamily : fonts.PoppinsRegular , fontSize : sh(16), color:'white'}}/>
                </View>
                <View style = {{flexDirection: 'column-reverse', alignItems: 'flex-end',marginBottom: sh(20)}}>
                    <TouchableOpacity onPress={handleRegister} style={{ borderRadius: sh(8), borderColor: 'white', borderWidth: sw(1), paddingVertical: sh(15) ,paddingHorizontal: sw(30)}}>
                        <Text style={{ fontFamily: fonts.PoppinsRegular, fontSize: sh(16), color: 'white' }}>Register</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{marginTop: sh(40), flexDirection: 'row', alignContent:'center', alignItems: 'center',justifyContent: 'flex-end'}}>
                <Text style = {{textAlign: 'right',fontFamily : fonts.PoppinsRegular , fontSize : sh(16), color: 'white'}}>Already a member? 
                    <TouchableOpacity onPress={handleLogin}>
                    <Text style = {{textDecorationLine: 'underline',color: colors.yellow, fontSize : sh(16)}}>   Login</Text>
                    </TouchableOpacity></Text>
                </View>
            </View>
        </View>
    );

    const handleLogin = () => {
        // Add your login logic here
        // Navigate to 'Wallet_Home' screen
        props.navigation.navigate('Wallet_Home');
    };

    const handleForgotPassword = () => {
        // Add your registration logic here
        // Navigate to 'LR_Register' screen
        props.navigation.navigate('LR_Register');
    };
    const handleRegister = () => {

        props.navigation.navigate('LR_Register');
    };
}

export default LR_Register;