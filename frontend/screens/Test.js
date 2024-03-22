import React from 'react';
import { fonts, sh } from '../styles/GlobalStyle';
import { View, Text } from 'react-native';

function Test(props) {
    return (
        <View style={{flex:1, alignContent: 'center', justifyContent: 'center'}}>
            <Text style={{fontFamily: fonts.PoppinsBlack, fontSize: sh(40), textAlign: 'center' }}>NI QU CHI DA BIAN</Text>
        </View>
    );
}

export default Test;