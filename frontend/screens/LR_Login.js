import React from 'react';
import { View ,Text , Image, TextInput, TouchableOpacity} from 'react-native';
import { appStyles, sh, fonts, colors } from '../styles/GlobalStyle';

function LR_Login(props) {
    return (
        <View style={{flex:1}}>
            <Image source={require('../assets/LoginBg.png')} style ={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} />
            <View style = {{ flexDirection: 'row', alignItems: 'center',justifyContent: 'flex-start',paddingTop: 230}}></View>
            
            <View style = {{ flex : 1,justifyContent: 'center', paddingHorizontal:40}}>
                <Text style = {{fontFamily : fonts.PoppinsMedium , fontSize : 32, color: 'white'}}>Login</Text>
                <View style = {{marginBottom: 20, backgroundColor: colors.greyBlue, borderRadius: 8 , padding: 10, marginTop: 20,borderColor: 'white',borderWidth: 1 }}>
                    <TextInput placeholder = "Email" placeholderTextColor='grey' style = {{fontFamily : fonts.PoppinsRegular , fontSize : 16, color:'white'}}/>
                </View>
                <View style = {{marginBottom: 20, backgroundColor: colors.greyBlue, borderRadius: 8 , padding: 10,borderColor: 'white',borderWidth: 1 }}>
                    <TextInput placeholder = "Password" placeholderTextColor="grey" style = {{fontFamily : fonts.PoppinsRegular , fontSize : 16,color:'white'}}/>
                </View>
                <View style = {{flexDirection: 'row', alignItems: 'flex-start',justifyContent: 'space-between',marginBottom: 20}}>
                    <TouchableOpacity onPress={handleForgotPassword}>
                        <Text style = {{fontFamily : fonts.PoppinsRegular , fontSize : 16, color: 'white'}}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleLogin} style={{ borderRadius: 8, borderColor: 'white', borderWidth: 1, paddingVertical: 15 ,paddingHorizontal:30}}>
                        <Text style={{ fontFamily: fonts.PoppinsRegular, fontSize: 16, color: 'white' }}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{marginTop:40,flexDirection: 'row',justifyContent: 'flex-end'}}>
                <Text style = {{textAlign: 'right',fontFamily : fonts.PoppinsRegular , fontSize : 16, color: 'white'}}>New Here? 
                    <TouchableOpacity onPress={handleRegister}>
                    <Text style = {{textDecorationLine: 'underline',color: colors.yellow,fontSize : 16}}>   Register</Text>
                    </TouchableOpacity></Text>
                </View>
            </View>
        </View>
    );

    const handleLogin = () => {
        props.navigation.navigate('Wallet_Home');
    };

    const handleForgotPassword = () => {
        props.navigation.navigate('LR_Register');
    };
    const handleRegister = () => {
        props.navigation.navigate('LR_Register');
    };
}

export default LR_Login;