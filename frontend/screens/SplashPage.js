import React from 'react';
import { View, Image} from "react-native";

function SplashPage(props) {
    return (
        
        <View style={{flex:1}}>
            <Image source={require('../assets/SplashPage.png')} style ={{height: '100%'}} />
        </View>

    );
}

export default SplashPage;