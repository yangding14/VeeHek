import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, fonts, sh, sw } from '../styles/GlobalStyle';

function WalletEnvelopeOperation({OperationName, OperationDate, OperationAmount}) {
    return (
        <View style={styles.bg}>
            <View style={{flexDirection: 'row'}}>

                <Image source={require('../assets/food_themed.png')} style={styles.imgStyle} />


                <View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.textOperationName}>{OperationName}</Text>
                        <Text style={styles.textOperationDate}>   |  {OperationDate}</Text>
                    </View>

                    <Text style={styles.textOperationAmount}>{OperationAmount}</Text>
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
        fontSize: sh(16),
        color: colors.black,
    },
    textOperationDate:{
        fontFamily: fonts.InterSemiBold,
        fontSize: sh(10),
        color: colors.black,
        opacity: 0.3,
        marginTop: sh(6)
    },
    textOperationAmount:{
        fontFamily: fonts.InterSemiBold,
        fontSize: sh(16),
        color: colors.black,
        marginTop: sh(16)
    },
    imgStyle:{
        // width: sw(40),
        // height: sh(40),
        marginRight: sw(20)
    }
})

export default WalletEnvelopeOperation;