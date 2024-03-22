import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { colors, fonts, sh, sw} from '../styles/GlobalStyle';

function DebtRepaymentBox(props) {
    return (
        <View style= {debtBox.debtBoxCSS}>
            <Text style= {debtBox.Title}>Debt Repayment Plan</Text>
            <View style = {debtBox.placeholder}>
            <Text style= {debtBox.placeholderFront}>Total debt to repay:</Text>
            {/* HERE IS WHERE THE DEBT AMOUNT WILL BE DISPLAYED */}
            <Text style = {debtBox.placeholderBack}>RM696969</Text>
            </View>
            <View style = {debtBox.placeholder}>
            <Text style= {debtBox.placeholderFront}>Repayment plan method:</Text>
            {/* HERE IS WHERE THE DEBT REPAYMENT METHOD WILL BE DISPLAYED */}
            <Text style = {debtBox.placeholderBack}>Snowball</Text>
            </View>
            <View style = {debtBox.placeholder}>
            <Text style= {debtBox.placeholderFront}>Repayment duration:</Text>
            {/* HERE IS WHERE THE DEBT REPAYMENT DURATION WILL BE DISPLAYED */}
            <Text style = {debtBox.placeholderBack}>2 years</Text>
            </View>
            <Text style= {{fontFamily: fonts.PoppinsRegular,fontSize: sh(16),color: colors.bgWhite, marginTop: sh(20)}}>Repayment plan:</Text>
            <View style = {debtBox.RepaymentPlanBox}>
                <Text>- PLACEHOLDER</Text>
                <Text>- PLACEHOLDER</Text>
                <Text>- PLACEHOLDER</Text>

            </View>

        </View>
    );
}

const debtBox = StyleSheet.create({

    debtBoxCSS:{
                flexDirection: 'column',
                marginTop: sh(30),
                backgroundColor: colors.greyBlue,
                padding: sh(40),
                borderRadius: sh(20),
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 4},
                shadowOpacity: 0.55,
            },

    Title:{
        marginBottom: sh(10),
        alignSelf: 'center',
        paddingVertical:sh(10),
        paddingHorizontal: sw(10),
        width: sh(220),
        alignItems: 'center',
        fontFamily: fonts.PoppinsSemiBold,
        borderRadius: sh(8),
        backgroundColor: colors.bgWhite,
        color: colors.greyBlue,
    },
    
    placeholder: {
        marginTop: sh(15),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    placeholderFront: {
        fontFamily: fonts.PoppinsRegular,
        fontSize: sh(16),
        color: colors.bgWhite

    },

    placeholderBack: {
        backgroundColor: colors.bgWhite,
        fontFamily: fonts.PoppinsRegular,
        paddingHorizontal: sw(10),
    },

    RepaymentPlanBox: {
        rowGap: sh(5),
        fontFamily: fonts.PoppinsRegular,
        fontSize: sh(14),
        backgroundColor: colors.bgWhite,
        color: colors.greyBlue,
        borderRadius: sh(8),
        padding: sh(20),
        paddingVertical: sh(10),
        marginTop: sh(15)
    }
})

export default DebtRepaymentBox;