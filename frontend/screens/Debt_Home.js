import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import DebtHomeTotalRemaining from '../components/DebtHomeTotalRemaining';
import { appStyles, fonts, sh } from '../styles/GlobalStyle';
import DebtHomeCard from '../components/DebtHomeCard';

function Debt_Home(props) {
    const data = [
        { debtName: 'PTPTN Loan', debtAmount: 'RM500', debtDate: 'Due on 20th July 2021' },
        { debtName: 'Car Loan', debtAmount: 'RM300', debtDate: 'Due on 30th July 2021' },
        { debtName: 'House Loan', debtAmount: 'RM200', debtDate: 'Due on 5th August 2021' },
        { debtName: 'Credit Card', debtAmount: 'RM100', debtDate: 'Due on 10th August 2021' },
    ]
    return (
        <View style={appStyles.appBackground}>
            <ScrollView>
                <DebtHomeTotalRemaining />
                <Text style={{fontFamily: fonts.RubikBold, fontSize: sh(36), marginTop: sh(30)}}>Debt (4)</Text>

                {data.map((item, index) => (
                    <DebtHomeCard
                        key={index}
                        debtName={item.debtName}
                        debtAmount={item.debtAmount}
                        debtDate={item.debtDate}
                    />
                ))}
            </ScrollView>

        </View>
    );
}

export default Debt_Home;