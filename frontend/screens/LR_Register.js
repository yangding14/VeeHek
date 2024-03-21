import React from 'react';
import { View ,Text , Image, TextInput, TouchableOpacity} from 'react-native';
import { appStyles, sh, fonts, colors } from '../styles/GlobalStyle';

function LR_Register(props) {
    return (
        <View style={{flex:1}}>
            <Image source={require('../assets/RegisterBg.png')} style ={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} />
            <View style = {{ flexDirection: 'row', alignItems: 'center',justifyContent: 'flex-start',paddingTop: 230}}></View>
            
            <View style = {{ flex : 1,justifyContent: 'center', paddingHorizontal:40}}>
                <Text style = {{fontFamily : fonts.PoppinsMedium , fontSize : 32, color: 'white'}}>Register</Text>
                <View style = {{marginBottom: 20, backgroundColor: colors.greyBlue, borderRadius: 8 , padding: 10, marginTop: 20,borderColor: 'white',borderWidth: 1 }}>
                    <TextInput placeholder = "Full Name" placeholderTextColor='grey' style = {{fontFamily : fonts.PoppinsRegular , fontSize : 16, color:'white'}}/>
                </View>
                <View style = {{marginBottom: 20, backgroundColor: colors.greyBlue, borderRadius: 8 , padding: 10,borderColor: 'white',borderWidth: 1 }}>
                    <TextInput placeholder = "Email" placeholderTextColor="grey" style = {{fontFamily : fonts.PoppinsRegular , fontSize : 16,color:'white'}}/>
                </View>
                <View style = {{marginBottom: 20, backgroundColor: colors.greyBlue, borderRadius: 8 , padding: 10,borderColor: 'white',borderWidth: 1 }}>
                    <TextInput placeholder = "Password" placeholderTextColor="grey" style = {{fontFamily : fonts.PoppinsRegular , fontSize : 16,color:'white'}}/>
                </View>
                <View style = {{flexDirection: 'column-reverse', alignItems: 'flex-end',marginBottom: 20}}>
                    <TouchableOpacity onPress={handleRegister} style={{ borderRadius: 8, borderColor: 'white', borderWidth: 1, paddingVertical: 15 ,paddingHorizontal:30}}>
                        <Text style={{ fontFamily: fonts.PoppinsRegular, fontSize: 16, color: 'white' }}>Register</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{marginTop:40,flexDirection: 'row', alignItems: 'flex-start',justifyContent: 'flex-end'}}>
                <Text style = {{textAlign: 'right',fontFamily : fonts.PoppinsRegular , fontSize : 16, color: 'white'}}>Already a member? 
                    <TouchableOpacity onPress={handleLogin}>
                    <Text style = {{textDecorationLine: 'underline',color: colors.yellow,fontSize : 16}}>   Login</Text>
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