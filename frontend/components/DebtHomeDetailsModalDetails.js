import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts, sh, sw } from '../styles/GlobalStyle';

function DebtHomeDetailsModalDetails({data, currentIndex}) {
    const Field = ({fieldName, field}) => {
        return(
            <>
                <View style={styles.line} />
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.textFieldName}>{fieldName}</Text>
                    <Text style={styles.textField}>{field}</Text>
                </View>
            </>
        )
    }
    return (
        <View style={styles.bg}>
            <Text style={styles.textDebtName}>{data[currentIndex].debtName}</Text>
            <Field fieldName='Loan Type' field={data[currentIndex].loanType} />
            <Field fieldName='Amount Borrowed' field={data[currentIndex].amountBorrowed} />
            <Field fieldName='Interest Rate' field={data[currentIndex].interestRate} />
            <Field fieldName='Repayment Period' field={data[currentIndex].repaymentPeriod} />
            <Field fieldName='Monthly Payment' field={data[currentIndex].monthlyPayment} />
            <Field fieldName='Total Interest Paid' field={data[currentIndex].totalInterestPaid} />
            <Field fieldName='Total Repaid' field={data[currentIndex].totalRepaid} />
            
        </View>
    );
}

const styles = StyleSheet.create({
    bg:{
        backgroundColor: colors.white,
        paddingTop: sh(20),
        paddingBottom: sh(30),
        paddingHorizontal: sw(20),
        marginTop: sh(30),
        borderRadius: sh(20),
        shadowRadius: sw(4), //for ios
        shadowColor:colors.black, //for ios
        shadowOpacity: 0.12, //for ios
        shadowOffset:{height: sh(1)}, //for ios
        elevation: 2 //for android
    },
    textDebtName:{
        fontFamily: fonts.InterSemiBold,
        fontSize: sh(20),
        color: colors.black,
        textAlign: 'center'
    },
    line:{
        backgroundColor: colors.grey,
        height: sh(0.4),
        marginVertical: sh(20),
    },
    textFieldName:{
        fontFamily: fonts.InterRegular,
        fontSize: sh(16),
        color: colors.black,
    },
    textField:{
        fontFamily: fonts.InterSemiBold,
        fontSize: sh(16),
        color: colors.black,
    }
})

export default DebtHomeDetailsModalDetails;