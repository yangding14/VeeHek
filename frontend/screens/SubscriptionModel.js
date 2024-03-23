import React from 'react';
import { Text, StyleSheet, View, Image ,TouchableOpacity} from 'react-native';
import {appStyles, colors, fonts, sh, sw} from '../styles/GlobalStyle';
import MySubscriptionModelBoxView from '../components/MySubscriptionModelBoxView';
import MySubscriptionPlans from '../components/MySubscriptionPlans';
import { useNavigation } from '@react-navigation/native';

function SubscriptionModel(props) {

const navigation = useNavigation();

const onPressSavedPlan = () => {
    navigation.navigate('SavedPlansPage')
}

const onPressBackButton = () => {
    navigation.goBack();
}
    return (
        <View style= {appStyles.appBackground}>
            <View style = {{flexDirection: 'row', alignItems: 'center',gap: sw(20), alignSelf:'center'}}>
            <TouchableOpacity onPress={onPressBackButton}>
            <Image source={require('../assets/arrow-left.png')}/>
            </TouchableOpacity>
            <Text style = {mySubscriptionStyles.headerTitle}>My Subscriptions</Text>
            </View>

            <MySubscriptionModelBoxView/>

            <TouchableOpacity onPress={onPressSavedPlan} style= {mySubscriptionStyles.saveButton}>
                        
                        <Text style = {{fontFamily: fonts.PoppinsSemiBold, fontSize: sh(14)}}>Saved Plans</Text>
            </TouchableOpacity>

            {/* <MySubscriptionPlans/>     */}
   
            </View>
            
    );
}


const mySubscriptionStyles = StyleSheet.create({
    headerTitle: {
        fontFamily: fonts.RubikBold,
        fontSize: sh(36)
    },

    saveButton: {
        marginTop: sh(20),
        backgroundColor: colors.yellow,
        borderRadius: sh(8),
        opacity: 0.8,
        alignItems: 'center',
        paddingVertical: sh(15),
        paddingHorizontal: sw(15),
        width: sw(120)
    }

    
})

export default SubscriptionModel;