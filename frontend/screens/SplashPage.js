import React from 'react';
import { View, Text, Image, ScrollView, ImageBackground} from "react-native";
import { appStyles, sh,sw, fonts, colors } from "../styles/GlobalStyle";

function SplashPage(props) {
    return (
        
        <View style={{flex:1}}>
            <Image source={require('../assets/SplashPage.png')} style ={{height: '100%'}} />
        </View>

    );
}

export default SplashPage;