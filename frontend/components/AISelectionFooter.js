import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { colors,sh,sw } from '../styles/GlobalStyle';

function AISelectionFooter(props) {
    return (
        <View style={footerStyle.footerContainer}>
            <View style={footerStyle.borderLine}></View>
            <Image style = {footerStyle.logoStyle} source={require('../assets/logo.png')} />
            <View style={footerStyle.borderLine}></View>

        </View>
    );
}

const footerStyle = StyleSheet.create({

    footerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    borderLine: {
        flex: 1,
        borderBottomWidth:1,
        borderColor: colors.greyBlue
    },

    logoStyle: {
        width: 80,
        height: 80,
    }
})

export default AISelectionFooter;