import React from 'react';
import { appStyles,fonts, sh, sw, colors } from '../styles/GlobalStyle';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

function BudgetEnvelopePage(props) {
    return (
        <View style = {appStyles.appBackground}>
            <View style = {{flexDirection: 'row', alignItems: 'center',gap: sw(20), alignSelf:'center'}}>
        {/* TouchableOpacity for back button */}
            <Image source={require('../assets/arrow-left.png')}/>
            <Text style = {envelopePage.headerTitle}>Model Name</Text>
            </View>
            <View style = {envelopePage.box}>
                <Text style = {envelopePage.title}>Generate Budget Envelopes</Text>
                <Text style = {{fontFamily: fonts.RubikRegular, fontSize: sh(14), color: colors.bgWhite, alignSelf: 'center', marginVertical: sh(30)}}>Preview Envelopes To Be Generated</Text>
                <View style = {[envelopePage.envelope, {backgroundColor:'#EBADA2' }]}>
                    <Image style = {envelopePage.icon} source={require('../assets/Food.png')}/>
                    <Text style= {envelopePage.envelopeText}>Food</Text>
                    <Text style = {envelopePage.envelopeBudget}>RM 150</Text>
                </View>
                <View style = {[envelopePage.envelope, {backgroundColor:'#B9CEBF' }]}>
                    <Image style = {envelopePage.icon} source={require('../assets/Debt.png')}/>
                    <Text style= {envelopePage.envelopeText}>Debt</Text>
                    <Text style = {envelopePage.envelopeBudget}>RM 1000</Text>
                </View>
                <View style = {[envelopePage.envelope, {backgroundColor:'#F8D186' }]}>
                    <Image style = {envelopePage.icon} source={require('../assets/Transportation.png')}/>
                    <Text style= {envelopePage.envelopeText}>Transportation</Text>
                    <Text style = {envelopePage.envelopeBudget}>RM 150</Text>
                </View>
            </View>
            <TouchableOpacity style = {envelopePage.editEnvelope}>
                <Text style = {{fontFamily: fonts.PoppinsSemiBold, fontSize: sh(18)}}>Edit Envelopes</Text>
            </TouchableOpacity>
            {/* FUNCTION HERE TO GENERATE ENVELOPES */} 
            <Text style = {envelopePage.selection}>OK, Use this plan for the next month</Text>
            <Text style = {envelopePage.selection}>No, I want another plan</Text>

        </View>
    );
}

const envelopePage = StyleSheet.create({

    headerTitle: {
        fontFamily: fonts.RubikBold,
        fontSize: sh(36),
    },

    title : {
            marginBottom: sh(10),
            alignSelf: 'center',
            paddingVertical:sh(10),
            paddingHorizontal: sw(10),
            width: sh(275),
            alignItems: 'center',
            fontFamily: fonts.PoppinsSemiBold,
            borderRadius: sh(8),
            backgroundColor: colors.bgWhite,
            color: colors.greyBlue,
        },

    box: {
        flexDirection: 'column',
        marginTop: sh(30),
        backgroundColor: colors.greyBlue,
        padding: sh(40),
        borderRadius: sh(20),
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.55,
    },

    envelope : {
        padding: sh(10),
        borderRadius: sh(8),
        marginVertical: sh(5),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    envelopeText : {
        fontFamily: fonts.PoppinsBold,
        fontSize: sh(20),
    },

    envelopeBudget :{
        fontFamily: fonts.PoppinsMedium,
        fontSize: sh(16),
    },

    icon : {
        width: sh(50),
        height: sh(50)
    },

    editEnvelope: {
        alignSelf: 'flex-end',
        marginTop: sh(20),
        backgroundColor: '#D2DEE5',
        width: sw(150),
        alignItems: 'center',
        padding: sh(10),
        borderRadius: sh(8),
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.35,
        marginBottom: sh(80)
    },

    selection :{
        fontFamily: fonts.PoppinsMedium,
        fontSize: sh(20),
        textDecorationLine: 'underline',
        margin: sh(5)
    }

})

export default BudgetEnvelopePage;