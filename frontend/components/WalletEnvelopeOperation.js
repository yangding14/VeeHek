import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, sh, sw } from '../styles/GlobalStyle';

function WalletEnvelopeOperation(props) {
    return (
        <View style={styles.bg}>
            <Text>Helo</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: colors.white,
        paddingVertical: sh(20),
        paddingHorizontal: sw(20),
        marginTop: sh(20),
        borderRadius: sh(20),

        shadowRadius: sw(4), //for ios
        shadowColor:'black', //for ios
        shadowOpacity: 0.12, //for ios
        shadowOffset:{height: sh(1)}, //for ios
        elevation: 2 //for android
    }
})

export default WalletEnvelopeOperation;