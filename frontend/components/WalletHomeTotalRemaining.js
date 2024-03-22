import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, fonts, sh, sw } from '../styles/GlobalStyle';

function WalletHomeTotalRemaining(props) {
    return (
        <View style={styles.cardBg}>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.textMonth}>March 2024</Text>
                <Text style={styles.textTotalRemaining}>- Total Remaining:</Text>
            </View>
            
            <Text style={styles.textCurrentRemaining}>RM 3,578</Text>
            
            <View style={styles.progressBarBg} />
            <View style={styles.progressBar} />

        </View>
    );
}

const styles = StyleSheet.create({
    cardBg: {
        backgroundColor: colors.greyBlue,
        borderRadius: sh(20),
        paddingHorizontal: sw(40),
        paddingVertical: sh(20),
        marginTop: sh(20)
    },
    textMonth: {
        color: colors.white,
        fontFamily: fonts.InterBold,
        fontSize: sh(16)
    },
    textTotalRemaining: {
        color: colors.white,
        fontFamily: fonts.InterRegular,
        fontSize: sh(16)
    },
    textCurrentRemaining: {
        color: colors.white,
        fontFamily: fonts.InterSemiBold,
        fontSize: sh(30),
        marginTop: sh(20),
        marginBottom: sh(0)
    },
    progressBarBg: {
        backgroundColor: colors.white,
        opacity: 0.3,
        borderRadius: sh(10),
        height: sh(20),
        marginTop: sh(20),
    },  
    progressBar: {
        backgroundColor: colors.yellow,
        borderRadius: sh(10),
        height: sh(20),
        // TODO: Change width to dynamic value
        width: '30%',
        top: -sh(20)
    }
})

export default WalletHomeTotalRemaining;