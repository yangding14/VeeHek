import React from 'react';
import { Text,ScrollView, StyleSheet, View, Image, Touchable, TouchableOpacity } from 'react-native';
import {appStyles, colors, fonts, sh, sw} from '../styles/GlobalStyle';
import AISelection_ModelBox from '../components/AISelection_ModelBox';
import AISelectionFooter from '../components/AISelectionFooter';
import { useNavigation } from '@react-navigation/native';

function AISelection(props) {

const navigation = useNavigation();

const onPressSubscription = () => {
    navigation.navigate('SubscriptionModel');
}


    return (
        <ScrollView showsVerticalScrollIndicator= {false} style= {appStyles.appBackground}>
            <Text style={{fontFamily: fonts.RubikBold, fontSize: sh(36), paddingHorizontal: sw(20), paddingBottom: sh(10)}}>Select Your Finance AI Partner</Text>
            <TouchableOpacity onPress={onPressSubscription}>
            <View style={styles.viewSubscriptionBox}>
                    <View style =  {styles.lineViewSubscriptionBox}/>
                        
                            <View style= {styles.flexBoxViewSubscriptionBox}>
                                <Text style= {{color: colors.bgWhite, fontFamily: fonts.PoppinsMedium, fontSize: sh(24)}}>View my subscriptions</Text>
                                <TouchableOpacity onPress={onPressSubscription}>
                                    <Image source={require('../assets/whiteBg-arrow-right.png')}/>
                                </TouchableOpacity>    
                            </View>
                <View style =  {styles.lineViewSubscriptionBox}/>
            </View>
            </TouchableOpacity>    
            <AISelection_ModelBox modelName = {'Freebie'}/>
            <AISelection_ModelBox modelName = {'Wisey'}/>
            <AISelection_ModelBox modelName = {'Debty'}/>
            <View style={{padding:sh(50)}}></View>
            <AISelectionFooter />

        
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