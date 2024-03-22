import React from 'react';
import { View } from 'react-native';
import { sh } from '../styles/GlobalStyle';

function newpage(props) {
    return (
        <View style={{height: sh(20)}}>
            <View style={{flex:3}}></View>
            <View style={{flex:1}}></View>

        </View>
    );
}

export default newpage;