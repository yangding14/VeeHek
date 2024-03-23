import React, { useState } from 'react';
import { View, Text, Image, TouchableWithoutFeedback, ScrollView, StyleSheet } from 'react-native';
import { appStyles, colors, fonts, sh, sw } from '../styles/GlobalStyle';
import WalletEnvelopeTotalRemaining from '../components/WalletEnvelopeTotalRemaining';
import WalletEnvelopeDebt from '../components/WalletEnvelopeDebt';
import DebtyBotEntryPoint from '../components/DebtyBotEntryPoint';

function Wallet_EnvelopeDebt({navigation}) {
    const [isChecked, setIsChecked] = useState(false);

    const [isVisible, setIsVisible] = useState(false);

    const [data, setData] = useState([
        {
            DebtName: 'Car Loan',
            DebtDate: 'Due Tomorrow',
            DebtAmount: 'RM 180'
        },
        {
            DebtName: 'PTPTN',
            DebtDate: 'Due 26/03/2024',
            DebtAmount: 'RM 20'
        },
        { 
            DebtName: 'Credit Card',
            DebtDate: '15/03/2024',
            DebtAmount: 'RM 200'
        }
    ])

    return (
        <View style={appStyles.appBackground}>
            <View style={{flexDirection: 'row'}}>
                <TouchableWithoutFeedback hitSlop={40} onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/arrow_left.png')} style={{flex:1, resizeMode: 'contain', top: sh(14)}} />
                </TouchableWithoutFeedback>
                <Text style={{flex: 5, fontFamily: fonts.RubikBold, fontSize: sh(36), textAlign: 'center'}}>Food</Text>
                <View style={{flex: 1}} />
            </View>

            <View style={{marginHorizontal: sw(-40)}}>
                <ScrollView style={{paddingHorizontal: sw(40)}}>
                    <WalletEnvelopeTotalRemaining />

                    <Text style={{fontFamily: fonts.RubikBold, fontSize: sh(36), marginTop: sh(30)}}>Check List</Text>

                    {data.map((item, index) => {
                        return (
                            <WalletEnvelopeDebt DebtName={item.DebtName} DebtDate={item.DebtDate} DebtAmount={item.DebtAmount} key={index} isChecked={isChecked} />
                        )
                    })}

                    <Text style={styles.textBottom}>
                        ⓘ Payment plan: Snow Avalanche Method {"\n"} The snow avalanche method prioritizes tasks based on their impact and effort, focusing on high-impact, low-effort tasks first.
                    </Text>

                    <View style={{height: sh(60)}} />

                </ScrollView>
            </View>

            <DebtyBotEntryPoint />

        </View>
    );
}

const styles = StyleSheet.create({
    textBottom:{
        fontFamily: fonts.PoppinsSemiBold,
        fontSize: sh(12),
        color: colors.black,
        opacity: 0.3,
        paddingTop: sh(20),
    }
})

export default Wallet_EnvelopeDebt;