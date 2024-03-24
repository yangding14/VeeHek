import React from 'react';
import { fonts, sh } from '../styles/GlobalStyle';
import { View, Text, KeyboardAvoidingView, TextInput } from 'react-native';

function Test(props) {
    return (
        <View style={{flex:1, alignContent: 'center', justifyContent: 'flex-end'}}>
            <KeyboardAvoidingView behavior='position'>
            {/* <Text style={{fontFamily: fonts.PoppinsBlack, fontSize: sh(40), textAlign: 'center' }}>NI QU CHI DA BIAN</Text> */}
            <TextInput placeholder='NI QU CHI DA BIAN' style={{width: '100%', fontFamily: fonts.PoppinsBlack, fontSize: sh(40)}} />
            </KeyboardAvoidingView>
        </View>
    );
}

export default Test;