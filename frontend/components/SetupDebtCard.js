import React from 'react';
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { colors, fonts, sh, sw } from '../styles/GlobalStyle';

function SetupDebtCard({index, debtName, debtAmount, onPress}) {
    const colorList = [colors.redLight, colors.yellowLight, colors.greenLight, colors.purpleLight]

    return (
        <View style={styles.bg}>
            <TouchableWithoutFeedback onPress={onPress}>
                <View style={{flexDirection: 'row'}}>
                    {/* circle eclipse filled view */}
                    <View style={{backgroundColor: colorList[(index) % 4], height: sh(40), width: undefined, aspectRatio: 1, borderRadius: sh(20), marginRight: sw(20)}} />

                    
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1}}>
                        <Text style={styles.textOperationName}>{debtName}</Text>
                        <Text style={styles.textOperationDate}>{debtAmount}</Text>
                    </View>
                    
                </View>
            </TouchableWithoutFeedback>

        </View>
    );
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: colors.white,
        paddingVertical: sh(20),
        paddingHorizontal: sw(20),
        marginTop: sh(20),
        borderRadius: sh(20),

        shadowRadius: sw(4), //for ios
        shadowColor:colors.black, //for ios
        shadowOpacity: 0.12, //for ios
        shadowOffset:{height: sh(1)}, //for ios
        elevation: 2 //for android
    },
    textOperationName:{
        fontFamily: fonts.InterSemiBold,
        fontSize: sh(20),
        color: colors.black,
    },
    textOperationDate:{
        fontFamily: fonts.InterSemiBold,
        fontSize: sh(20),
        color: colors.black,
    },
    imgStyle:{
        // width: sw(40),
        // height: sh(40),
        marginRight: sw(20)
    }
})

export default SetupDebtCard;