import React from 'react';
import { FlatList, FlatListComponent, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import { appStyles, fonts, sh, sw } from '../styles/GlobalStyle';
import WalletHomeTotalRemaining from '../components/WalletHomeTotalRemaining';
import WalletHomeRow from '../components/WalletHomeRow';
import WalletHomeEnvelope from '../components/WalletHomeEnvelope';
import { useNavigation } from '@react-navigation/native';

function Wallet_Home(props) {
    const navigation = useNavigation();

    const onPressEnvelope = () =>{
        navigation.navigate('Wallet_Envelope');
    }

    const envelopeData = [
        { id: '1', EnvelopeName: 'Food', EnvelopeAmount: 'RM800', ImageSrc: require('../assets/food_icon.png') },
        { id: '2', EnvelopeName: 'Travel', EnvelopeAmount: 'RM500', ImageSrc: require('../assets/transport_icon.png') },
        { id: '3', EnvelopeName: 'Travel', EnvelopeAmount: 'RM500', ImageSrc: require('../assets/transport_icon.png') },
        // Add more envelope data as needed
    ];

    return (
        <View style={appStyles.appBackground}>
            {/* TODO: Put user name here as variable */}

            <ScrollView>
                <Text style={{fontFamily: fonts.RubikBold, fontSize: sh(36)}}>Hi, Song Jun</Text>

                <WalletHomeTotalRemaining />

                <Text style={{fontFamily: fonts.RubikBold, fontSize: sh(36), marginTop: sh(30)}}>Envelopes</Text>

                <FlatList
                    data={envelopeData}
                    renderItem={({ item }) => (
                        <WalletHomeEnvelope
                                    itemId={item.id}
                                    EnvelopeName={item.EnvelopeName}
                                    EnvelopeAmount={item.EnvelopeAmount}
                                    ImageSrc={item.ImageSrc}
                                    onPressEnvelope={onPressEnvelope}
                                    />)}
                        // <TouchableWithoutFeedback onPress={onPressEnvelope}>
                            // {/* <View style={{}}> */}
                                
                        //     {/* </View> */}
                        // {/* </TouchableWithoutFeedback> */}
    
                    numColumns={2}
                    style={{alignContent: 'center'}}
                    scrollEnabled={false}
                    // contentContainerStyle={{ paddingHorizontal: sw(30) }}
                />
            </ScrollView>
        </View>
    );
}

export default Wallet_Home;