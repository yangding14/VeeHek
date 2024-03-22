import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { colors, fonts, sh, sw } from '../styles/GlobalStyle';

function WalletHomeEnvelope({itemId, EnvelopeName, EnvelopeAmount, ImageSrc, onPressEnvelope}) {
    const colorList = [colors.redLight, colors.yellowLight, colors.greenLight, colors.purpleLight]

    const styles = StyleSheet.create({
        bg:{
            backgroundColor: colorList[(itemId-1) % 4],
            borderRadius: sh(20),
            paddingVertical: sh(20),
            paddingHorizontal: sw(20),
            marginTop: sh(20),
            marginRight: itemId % 2 == 0 ? 0 : sw(20),
            width: '45%'
        },
        textEnvName:{
            fontFamily: fonts.PoppinsBold,
            fontSize: sh(20),
            color: colors.white,
        },
        textEnvAmount:{
            fontFamily: fonts.PoppinsMedium,
            fontSize: sh(16),
            color: colors.white,
        }
    })


    return (
        <TouchableOpacity style={styles.bg} onPress={onPressEnvelope}>
            <Text style={styles.textEnvName}>{EnvelopeName}</Text>

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.textEnvAmount}>{EnvelopeAmount}</Text>
                <Image source={ImageSrc} />
            </View>

            
        </TouchableOpacity>
    );
    
}


export default WalletHomeEnvelope;