import React from 'react';
import { Text, View } from 'react-native';
import { appStyles, fonts, sh } from '../styles/GlobalStyle';
import WalletHomeTotalRemaining from '../components/WalletHomeTotalRemaining';

function Wallet_Home(props) {
    return (
        <View style={appStyles.appBackground}>
            {/* TODO: Put user name here as variable */}
            <Text style={{fontFamily: fonts.RubikBold, fontSize: sh(36)}}>Hi, Song Jun</Text>
            
            <WalletHomeTotalRemaining />
        </View>
    );
}

export default Wallet_Home;