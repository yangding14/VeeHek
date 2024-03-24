import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, fonts, sh, sw } from '../styles/GlobalStyle';

function DebtHomeTotalRemaining({data}) {
    const toInt = (stringValue) => {
        return parseInt(stringValue.replace(/[^\d]/g, ''))
    }
    let paid = 0;
    let total = 0;

    data.map((item, index) => {
        paid += toInt(item.totalRepaid) - toInt(item.totalInterestPaid);
        total += toInt(item.amountBorrowed);
    })

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
            width: `${paid/total*100}%`,
            top: -sh(20)
        }
    })

    return (
        <View style={styles.cardBg}>
            <Text style={styles.textCurrentRemaining}>Total Debt</Text>
            <Text style={styles.textTotalRemaining}>RM{paid}/RM{total}</Text>
            <View style={styles.progressBarBg} />
            <View style={styles.progressBar} />

        </View>
    );
}



export default DebtHomeTotalRemaining;