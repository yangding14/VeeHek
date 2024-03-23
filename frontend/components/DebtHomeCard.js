import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, fonts, sh, sw } from '../styles/GlobalStyle';

function DebtHomeCard({debtName, debtAmount, debtDate}) {
    return (
        <View style={styles.bg}>
            <View style={{flexDirection: 'row'}}>
                <Image source={require('../assets/food_themed.png')} style={styles.imgStyle} />

                
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1}}>
                    <Text style={styles.textOperationName}>{debtName}</Text>
                    <Text style={styles.textOperationDate}>{debtAmount}</Text>
                </View>
                
            </View>

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

export default DebtHomeCard;