import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { appStyles, colors, fonts, sh, sw } from '../styles/GlobalStyle';
import DebtHomeCard from '../components/DebtHomeCard';
import Setup_DebtsDetails from './Setup_DebtsDetails';

function SETUP_Debts(props) {
    const onPress = () => {
        console.log('Expense card pressed');
    }

    const handleFinish = () => {
        console.log('Next pressed');
        props.navigation.navigate('AppMain');
    }

    const handleNewCategory = () => {
        console.log('New category pressed');
    }

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const toggleModalVisibility = (index) => {
        console.log('Toggle modal visibility', index);
        setCurrentIndex(index);
        setIsModalVisible(true);
    };

    const data = [
        { debtName: 'PTPTN Loan', debtAmount: 'RM500', loanType: 'Education', amountBorrowed: 'RM1000', interestRate: '3%', repaymentPeriod: '5 years', monthlyRepayment: 'RM100', totalInterestPaid: 'RM500', totalRepaid: 'RM1500'},
        { debtName: 'Car Loan', debtAmount: 'RM1000', loanType: 'Car', amountBorrowed: 'RM2000', interestRate: '4%', repaymentPeriod: '5 years', monthlyRepayment: 'RM200', totalInterestPaid: 'RM1000', totalRepaid: 'RM3000'},
        { debtName: 'House Loan', debtAmount: 'RM2000', loanType: 'House', amountBorrowed: 'RM3000', interestRate: '5%', repaymentPeriod: '5 years', monthlyRepayment: 'RM300', totalInterestPaid: 'RM1500', totalRepaid: 'RM4500'},
        { debtName: 'Personal Loan', debtAmount: 'RM3000', loanType: 'Personal', amountBorrowed: 'RM4000', interestRate: '6%', repaymentPeriod: '5 years', monthlyRepayment: 'RM400', totalInterestPaid: 'RM2000', totalRepaid: 'RM6000'},
        { debtName: 'Business Loan', debtAmount: 'RM4000', loanType: 'Business', amountBorrowed: 'RM5000', interestRate: '7%', repaymentPeriod: '5 years', monthlyRepayment: 'RM500', totalInterestPaid: 'RM2500', totalRepaid: 'RM7500'}
    ]

    return (
        <View style={[appStyles.appBackground, {marginHorizontal: 0, height: '100%'}]}>
            <ScrollView style={{paddingHorizontal: sw(40)}}>

                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{flex:1}} />
                    <Text style={{flex: 5, fontFamily: fonts.RubikBold, fontSize: sh(26), textAlign: 'center'}}>Setup Profile</Text>
                    <TouchableOpacity onPress={handleFinish}>
                        <Text style={{flex: 1, fontFamily: fonts.RubikRegular, fontSize: sh(20), textAlign: 'center', color: colors.yellow, top: sh(6)}}>Finish</Text>
                    </TouchableOpacity>
                    
                </View>


                <Text style={{fontFamily: fonts.RubikBold, fontSize: sh(26), marginTop: sh(40)}}>Debts</Text>

                {data.map((item, index) => (
                    <DebtHomeCard
                        key={index}
                        index={index}
                        debtName={item.debtName}
                        debtAmount={item.debtAmount}
                        debtDate={item.debtDate}
                        onPress={() => toggleModalVisibility(index)} // Open modal on card press
                    />
                ))}

                <TouchableOpacity onPress={handleNewCategory}>
                    <View style={{backgroundColor: colors.greyBlue, padding: sh(20), borderRadius: sh(20), marginTop: sh(40)}}>
                        <Text style={{fontFamily: fonts.RubikBold, fontSize: sh(20), color: colors.white, textAlign: 'center'}}>New Debt</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>

            <Setup_DebtsDetails isVisible={isModalVisible} setIsModalVisible={setIsModalVisible} data={data} currentIndex={currentIndex} />
        </View>
    );
}

export default SETUP_Debts;