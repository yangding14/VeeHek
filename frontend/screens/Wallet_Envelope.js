import React, { useState } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { appStyles, colors, fonts, sh, sw } from '../styles/GlobalStyle';
import WalletEnvelopeTotalRemaining from '../components/WalletEnvelopeTotalRemaining';
import WalletEnvelopeOperation from '../components/WalletEnvelopeOperation';
import Wallet_EnvelopeNewOperation from './Wallet_EnvelopeNewOperation';

function Wallet_Envelope(props) {

    const [isVisible, setIsVisible] = useState(false);

    const data = [
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
    ]

    return (
        <View style={appStyles.appBackground}>
            <Image source={require('../assets/arrow_left.png')} style={{position: 'absolute', left: sw(50), top: sh(12)}} />
            <Text style={{fontFamily: fonts.RubikBold, fontSize: sh(36), textAlign: 'center'}}>Food</Text>
            <WalletEnvelopeTotalRemaining />

            <Text style={{fontFamily: fonts.RubikBold, fontSize: sh(36), marginTop: sh(30)}}>Operations</Text>

            {data.map((item, index) => {
                return (
                    <WalletEnvelopeOperation OperationName={item.OperationName} OperationDate={item.OperationDate} OperationAmount={item.OperationAmount} key={index} />
                )
            })}

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
                        left: sw(40),
                }}>
                    <Text style={{fontFamily: fonts.PoppinsBold, fontSize: sh(20), color: colors.white}}>New Operation</Text>
                </View>
            </TouchableWithoutFeedback>

            <Wallet_EnvelopeNewOperation isVisible={isVisible} setIsVisible={setIsVisible} />
        </View>
    );
}

export default Wallet_Envelope;