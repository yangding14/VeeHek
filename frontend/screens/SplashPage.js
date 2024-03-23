import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image} from "react-native";

function SplashPage({navigation}) {
    // timer for splash screen
    setTimeout(() => {
        console.log('Splash Page');
        navigation.navigate('LR_Login');
    }, 2000);
    return (
        <View style={{flex:1}}>
            <Image source={require('../assets/SplashPage.png')} style ={{height: '100%'}} />
        </View>

    );
}

export default SplashPage;