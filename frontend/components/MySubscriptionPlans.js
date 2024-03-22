import React from 'react';
import { Text,ScrollView, StyleSheet, View, Image ,TouchableOpacity} from 'react-native';
import {appStyles, colors, fonts, sh, sw} from '../styles/GlobalStyle';

function MySubscriptionPlans(props) {
    return (
        <View style = {plans.plan}>
            <View style = {plans.planPlaceholder}>
            <Text>Plan 1</Text>
            <Text>Date placeholder {'>'}</Text>
            {/* onPress function here */}
            </View>
            <View style = {plans.borderLine}/>

        </View>
    );
}

const plans = StyleSheet.create({
    plan: {
        paddingVertical: sh(10),
        flexDirection: 'column',
        
    },

    planPlaceholder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    borderLine: {
        borderBottomColor: colors.greyBlue,
        borderBottomWidth: 1,
        marginVertical: sh(5)
    }
})

export default MySubscriptionPlans;