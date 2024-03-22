import React from 'react';
import { Text, StyleSheet, View, Image} from 'react-native';
import { colors, fonts, sh, sw} from '../styles/GlobalStyle';

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