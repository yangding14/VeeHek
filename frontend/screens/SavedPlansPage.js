import React from 'react';
import { appStyles,sw,sh, fonts, colors } from '../styles/GlobalStyle';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function SavedPlansPage(props) {
    const navigation = useNavigation();

    const onPressBackButton = () => {
        navigation.goBack();
    }

    return (
        <View style = {appStyles.appBackground}>
            <View style = {{flexDirection: 'row', alignItems: 'center',gap: sw(20), alignSelf:'center'}}>
            <TouchableOpacity onPress={onPressBackButton}>
            <Image source={require('../assets/arrow-left.png')}/>
            </TouchableOpacity>
            <Text style = {savedPlansPage.headerTitle}>Saved Plans</Text>
            </View>
            <View style = {savedPlansPage.box}>
                <Text style = {savedPlansPage.title}>31/12/2022</Text>
                <View style = {[savedPlansPage.envelope, {backgroundColor:'#EBADA2' }]}>
                    <Image style = {savedPlansPage.icon} source={require('../assets/Food.png')}/>
                    <Text style= {savedPlansPage.envelopeText}>Food</Text>
                    <Text style = {savedPlansPage.envelopeBudget}>RM 150</Text>
                </View>
                <View style = {[savedPlansPage.envelope, {backgroundColor:'#B9CEBF' }]}>
                    <Image style = {savedPlansPage.icon} source={require('../assets/Debt.png')}/>
                    <Text style= {savedPlansPage.envelopeText}>Debt</Text>
                    <Text style = {savedPlansPage.envelopeBudget}>RM 1000</Text>
                </View>
                <View style = {[savedPlansPage.envelope, {backgroundColor:'#F8D186' }]}>
                    <Image style = {savedPlansPage.icon} source={require('../assets/Transportation.png')}/>
                    <Text style= {savedPlansPage.envelopeText}>Transportation</Text>
                    <Text style = {savedPlansPage.envelopeBudget}>RM 150</Text>
                </View>
            </View>
            </View>
    );
}

const savedPlansPage = StyleSheet.create({
    headerTitle: {
        fontFamily: fonts.RubikBold,
        fontSize: sh(36),
    },

    title : {
        marginBottom: sh(10),
        alignSelf: 'center',
        paddingVertical:sh(10),
        paddingHorizontal: sw(10),
        width: sh(120),
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

})  


export default SavedPlansPage;