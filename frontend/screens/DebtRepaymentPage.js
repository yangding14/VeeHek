import React from 'react';
import { Text, StyleSheet, View, Image ,TouchableOpacity} from 'react-native';
import {appStyles, colors, fonts, sh, sw} from '../styles/GlobalStyle';
import DebtRepaymentBox from '../components/DebtRepaymentBox';

function DebtRepaymentPage(props) {
    return (
        <View style= {appStyles.appBackground}>
            <View style = {{flexDirection: 'row', alignItems: 'center',gap: sw(20), alignSelf:'center'}}>
        {/* TouchableOpacity for back button */}
            <Image source={require('../assets/arrow-left.png')}/>
            <Text style = {debtPage.headerTitle}>Model Name</Text>
            </View>
            <DebtRepaymentBox/>
            <TouchableOpacity style = {debtPage.downloadButton}>
            <Text style= {{fontFamily: fonts.PoppinsSemiBold, fontSize: sh(16)}}>Download as PDF</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {debtPage.emailButton}>
            <Text style= {{fontFamily: fonts.PoppinsSemiBold, fontSize: sh(16)}}>Email a Copy</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {debtPage.saveButton}>
            <Text style= {{fontFamily: fonts.PoppinsSemiBold, fontSize: sh(16)}}>Save</Text>
            </TouchableOpacity>
            
        </View>
    );
}

const debtPage = StyleSheet.create({
    headerTitle: {
        fontFamily: fonts.RubikBold,
        fontSize: sh(36)
    },

    downloadButton : {
        alignSelf: 'center',
        marginTop: sh(20),
        backgroundColor: '#C0C3C5',
        borderColor: '#000',
        borderWidth:sh(3),
        borderRadius: sh(8),
        opacity: 0.8,
        alignItems: 'center',
        paddingVertical: sh(10),
        paddingHorizontal: sw(15),
        width: sw(150),
        marginTop: sh(80)
    },

    emailButton : {
        alignSelf: 'center',
        marginTop: sh(10),
        backgroundColor: '#FBC6C6',
        borderColor: '#000',
        borderWidth:sh(3),
        borderRadius: sh(8),
        opacity: 0.8,
        alignItems: 'center',
        paddingVertical: sh(10),
        paddingHorizontal: sw(15),
        width: sw(150),  },

    saveButton : {
        alignSelf: 'center',
        marginTop: sh(10),
        backgroundColor: '#B3D5B5',
        borderColor: '#000',
        borderWidth:sh(3),
        borderRadius: sh(8),
        opacity: 0.8,
        alignItems: 'center',
        paddingVertical: sh(10),
        paddingHorizontal: sw(15),
        width: sw(150),
    }
})


export default DebtRepaymentPage;