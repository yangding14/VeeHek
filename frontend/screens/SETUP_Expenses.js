import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { appStyles, colors, fonts, sh, sw } from '../styles/GlobalStyle';
import SetupExpensesCard from '../components/SetupExpensesCard';

function SETUP_Expenses(props) {
    const onPress = () => {
        console.log('Expense card pressed');
    }

    const handleNext = () => {
        console.log('Next pressed');
        props.navigation.navigate('SETUP_Debts');  
    }

    const handleNewCategory = () => {
        console.log('New category pressed');
    }

    const data = [
        { expenseName: 'Food', expenseAmount: 'RM500'},
        { expenseName: 'Transport', expenseAmount: 'RM1000'},
        { expenseName: 'Rent', expenseAmount: 'RM2000'},
        { expenseName: 'Utilities', expenseAmount: 'RM3000'},
        { expenseName: 'Entertainment', expenseAmount: 'RM4000'}
    ]

    return (
        <View style={[appStyles.appBackground, {marginHorizontal: 0}]}>
            <ScrollView style={{paddingHorizontal: sw(40)}}>

                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{flex:1}} />
                    <Text style={{flex: 5, fontFamily: fonts.RubikBold, fontSize: sh(26), textAlign: 'center'}}>Setup Profile</Text>
                    <TouchableOpacity onPress={handleNext}>
                        <Text style={{flex: 1, fontFamily: fonts.RubikRegular, fontSize: sh(20), textAlign: 'center', color: colors.yellow, top: sh(6)}}>Next</Text>
                    </TouchableOpacity>
                    
                </View>


                <Text style={{fontFamily: fonts.RubikBold, fontSize: sh(26), marginTop: sh(40)}}>Expenses</Text>

                {data.map((item, index) => (
                    <SetupExpensesCard key={index} index={index} expenseName={item.expenseName} expenseAmount={item.expenseAmount} onPress={onPress} />
                    ))
                }

                <TouchableOpacity onPress={handleNewCategory}>
                    <View style={{backgroundColor: colors.greyBlue, padding: sh(20), borderRadius: sh(20), marginTop: sh(40)}}>
                        <Text style={{fontFamily: fonts.RubikBold, fontSize: sh(20), color: colors.white, textAlign: 'center'}}>New Category</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

export default SETUP_Expenses;