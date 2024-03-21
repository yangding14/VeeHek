import React from 'react';
import { Text,ScrollView, StyleSheet, View, Image } from 'react-native';
import {appStyles, colors, fonts, sh, sw} from '../styles/GlobalStyle';

function AISelection(props) {
    return (
        <ScrollView style= {appStyles.appBackground}>
            <Text style={{fontFamily: fonts.RubikBold, fontSize: sh(36), paddingHorizontal: sw(20), paddingBottom: sh(10)}}>AI Selections</Text>
            <View style={styles.viewSubscriptionBox}>
                <View style =  {styles.lineViewSubscriptionBox}/>
                <View style= {styles.flexBoxViewSubscriptionBox}>
                    <Text style= {{color: colors.bgWhite, fontFamily: fonts.PoppinsMedium, fontSize: sh(24)}}>View my subscriptions</Text>
                    <Image source={require('../assets/whiteBg-arrow-right.png')}/>
                </View>
                <View style =  {styles.lineViewSubscriptionBox}/>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    
    viewSubscriptionBox: {
        backgroundColor: colors.greyBlue,
        padding: sh(20),
        borderRadius: sh(20),
    },

    flexBoxViewSubscriptionBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    lineViewSubscriptionBox: {
        marginVertical: sh(5),
        borderBottomColor: colors.bgWhite, 
        borderBottomWidth: StyleSheet.hairlineWidth
    }



})



export default AISelection;