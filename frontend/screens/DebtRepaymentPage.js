import React from 'react';
import { Text,ScrollView, StyleSheet, View, Image ,TouchableOpacity} from 'react-native';
import {appStyles, colors, fonts, sh, sw} from '../styles/GlobalStyle';
import DebtRepaymentBox from '../components/DebtRepaymentBox';

function DebtRepaymentPage(props) {
    return (
        <View style= {appStyles.appBackground}>
            <DebtRepaymentBox/>
        </View>
    );
}

export default DebtRepaymentPage;