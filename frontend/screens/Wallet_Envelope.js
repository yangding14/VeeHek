import React, { useState } from 'react';
import { View, Text, Image, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { appStyles, colors, fonts, sh, sw } from '../styles/GlobalStyle';
import WalletEnvelopeTotalRemaining from '../components/WalletEnvelopeTotalRemaining';
import WalletEnvelopeOperation from '../components/WalletEnvelopeOperation';
import Wallet_EnvelopeNewOperation from './Wallet_EnvelopeNewOperation';

function Wallet_Envelope({navigation}) {

    const [isVisible, setIsVisible] = useState(false);

    const [data, setData] = useState([
        {
            OperationName: 'Song Jun\'s Cake',
            OperationDate: 'Yesterday',
            OperationAmount: '- RM 180'
        },
        {
            OperationName: 'Taco',
            OperationDate: '07/03/2024',
            OperationAmount: '- RM 20'
        },
        {
            OperationName: 'Niu Mo',
            OperationDate: '14/02/2024',
            OperationAmount: '- RM 200'
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

                    <Text style={{fontFamily: fonts.RubikBold, fontSize: sh(36), marginTop: sh(30)}}>Operations</Text>

                    {data.map((item, index) => {
                        return (
                            <WalletEnvelopeOperation OperationName={item.OperationName} OperationDate={item.OperationDate} OperationAmount={item.OperationAmount} key={index} />
                        )
                    })}

                    

                    <Wallet_EnvelopeNewOperation isVisible={isVisible} setIsVisible={setIsVisible} setData={setData} />

                    <View style={{height: sh(200)}} />

                </ScrollView>
            </View>
            <TouchableWithoutFeedback onPress={() => setIsVisible(true)}>
                        <View 
                            style={{
                                width: '100%',
                                height: sh(60),
                                backgroundColor: colors.redLight,
                                borderRadius: sh(20),
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'absolute',
                                bottom: sh(46),
                                left: sw(0),

                                shadowRadius: sw(4), //for ios
                                shadowColor:colors.black, //for ios
                                shadowOpacity: 0.12, //for ios
                                shadowOffset:{height: sh(1)}, //for ios
                                elevation: 2 //for android
                        }}>
                            <Text style={{fontFamily: fonts.PoppinsBold, fontSize: sh(20), color: colors.white}}>New Operation</Text>
                        </View>
                    </TouchableWithoutFeedback>
        </View>
    );
}

export default Wallet_Envelope;