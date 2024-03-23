import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import DebtHomeTotalRemaining from '../components/DebtHomeTotalRemaining';
import { appStyles, fonts, sh, sw } from '../styles/GlobalStyle';
import DebtHomeCard from '../components/DebtHomeCard';
import Debt_HomeDetailsModal from './Debt_HomeDetailsModal';

function Debt_Home(props) {
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
        <View style={appStyles.appBackground}>
            <View style={{marginHorizontal: sw(-40)}}>

                <ScrollView style={{paddingHorizontal: sw(40)}}>
                    <DebtHomeTotalRemaining />
                    <Text style={{fontFamily: fonts.RubikBold, fontSize: sh(36), marginTop: sh(30)}}>Debt ({data.length})</Text>

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
                </ScrollView>

            </View>
            <Debt_HomeDetailsModal isVisible={isModalVisible} setIsModalVisible={setIsModalVisible} data={data} currentIndex={currentIndex} />
        </View>
    );
}

export default Debt_Home;