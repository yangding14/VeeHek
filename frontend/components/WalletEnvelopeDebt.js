import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { colors, fonts, sh, sw } from '../styles/GlobalStyle';

function WalletEnvelopeDebt({DebtName, DebtDate, DebtAmount, isChecked}) {
    const [checked, setChecked] = useState(isChecked);

    const handlePress = () => {
        setChecked(!checked); // Toggle the checked state
    }
    
    return (
        <View style={styles.bg}>
            <TouchableWithoutFeedback onPress={handlePress}>
                <View style={{flexDirection: 'row'}}>

                    {checked ? 
                        <Image source={require('../assets/checked.png')} style={styles.imgStyle} /> 
                        : 
                        <Image source={require('../assets/unchecked.png')} style={styles.imgStyle} />
                    }


                    <View>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.textDebtName}>{DebtName}</Text>
                            <Text style={styles.textDebtDate}>   |  {DebtDate}</Text>
                        </View>

                        <Text style={styles.textDebtAmount}>{DebtAmount}</Text>
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
    textDebtName:{
        fontFamily: fonts.InterSemiBold,
        fontSize: sh(16),
        color: colors.black,
    },
    textDebtDate:{
        fontFamily: fonts.InterSemiBold,
        fontSize: sh(10),
        color: colors.black,
        opacity: 0.3,
        marginTop: sh(6)
    },
    textDebtAmount:{
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

export default WalletEnvelopeDebt;