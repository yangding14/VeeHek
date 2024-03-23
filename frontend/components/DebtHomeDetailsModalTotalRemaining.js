import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, fonts, sh, sw } from '../styles/GlobalStyle';

function DebtHomeDetailsModalTotalRemaining(props) {
    let current = 400;
    let total = 800;

    const styles = StyleSheet.create({
        cardBg: {
            backgroundColor: colors.greyBlue,
            borderRadius: sh(20),
            paddingHorizontal: sw(40),
            paddingVertical: sh(20),
            marginTop: sh(20),
        },
        textMonth: {
            color: colors.white,
            fontFamily: fonts.InterBold,
            fontSize: sh(16)
        },
        textTotalRemaining: {
            color: colors.white,
            fontFamily: fonts.InterRegular,
            fontSize: sh(16),
            textAlign: 'center'
        },
        textCurrentRemaining: {
            color: colors.white,
            fontFamily: fonts.InterSemiBold,
            fontSize: sh(30),
            marginTop: sh(20),
            marginBottom: sh(0),
            textAlign: 'center'
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
            width: `${current/total*100}%`,
            top: -sh(20)
        }
    })

    return (
        <View style={styles.cardBg}>
            <Text style={styles.textCurrentRemaining}>Total Debt</Text>
            <Text style={styles.textTotalRemaining}>RM{current}/RM{total}</Text>
            <View style={styles.progressBarBg} />
            <View style={styles.progressBar} />

        </View>
    );
}



export default DebtHomeDetailsModalTotalRemaining;