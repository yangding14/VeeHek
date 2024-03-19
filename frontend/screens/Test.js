import React from 'react';
import { fonts, sh } from '../styles/GlobalStyle';
import { View, Text } from 'react-native';

function Test(props) {
    return (
        <View style={{flex:1, alignContent: 'center', justifyContent: 'center'}}>
            <Text style={{fontFamily: fonts.PoppinsBlack, fontSize: sh(40), textAlign: 'center' }}>Test</Text>
        </View>
    );
}

export default Test;