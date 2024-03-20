import React from 'react';
import { View, Text, Image } from 'react-native';
import { appStyles, fonts, sh, sw } from '../styles/GlobalStyle';
import WalletEnvelopeTotalRemaining from '../components/WalletEnvelopeTotalRemaining';
import WalletEnvelopeOperation from '../components/WalletEnvelopeOperation';

function Wallet_Envelope(props) {
    return (
        <View style={appStyles.appBackground}>
            <Image source={require('../assets/arrow_left.png')} style={{position: 'absolute', left: sw(20), top: sh(12)}} />
            <Text style={{fontFamily: fonts.RubikBold, fontSize: sh(36), textAlign: 'center'}}>Food</Text>
            <WalletEnvelopeTotalRemaining />

            <Text style={{fontFamily: fonts.RubikBold, fontSize: sh(36), marginTop: sh(30)}}>Operations</Text>
            <WalletEnvelopeOperation />
        </View>
    );
}

export default Wallet_Envelope;