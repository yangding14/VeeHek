import React from 'react';
import { Image, Keyboard, Modal, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { colors, fonts, sh, sw } from '../styles/GlobalStyle';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

function SetupDebtsNew({isVisible, setIsVisible, setData}) {
    const navigation = useNavigation();
    const [date, setDate] = React.useState(new Date());
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
    }
    const [operationType, setOperationType] = useState('expense'); // Track the operation type (expense or income)
    const [debtName, setDebtName] = useState('');
    const [amount, setAmount] = useState(''); // Track the operation amount
    const [interestRate, setInterestRate] = useState(''); // Track the operation amount
    const [repaymentAmount, setRepaymentAmount] = useState(''); // Track the operation amount
    const [nextPaymentDate, setNextPaymentDate] = useState(''); // Track the operation amount


    const handleCreate = () => {
        // setData(prev => [{
        //     OperationName: operationName === '' ? 'Food' : operationName,
        //     OperationDate: date.toDateString(),
        //     OperationAmount: operationType === 'expense' ? `- RM ${operationAmount}` : `+ RM ${operationAmount}`
        // }, ...prev]);
        navigation.goBack();
    }

    const FieldRender = ({fieldName, placeholderText, value, action}) => {
        return (
            <>
                <Text style={styles.textFieldName}>{fieldName}</Text>
                <TextInput value={value} onChangeText={action} inputMode='text' placeholderTextColor={colors.grey} placeholder={placeholderText} style={styles.textInput} />
                <View style={styles.line} />
            </>
            )
    } 

    return (
        <View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>   
                <View style={styles.bg}>
                    <View style={{flexDirection: 'row', justifyContent:'space-between', marginBottom: sh(50)}}>
                        <TouchableWithoutFeedback hitSlop={40} onPress={() => navigation.goBack()}>
                            <Image source={require('../assets/arrow_left.png')} style={{flex: 1, resizeMode: 'contain', top: sh(6)}} />
                        </TouchableWithoutFeedback>
                        <Text style={{fontFamily: fonts.RubikBold, fontSize: sh(26), textAlign: 'center', flex: 3}}>New Debt</Text>
                        <TouchableWithoutFeedback hitSlop={40} onPress={handleCreate} >
                            <Text style={{fontFamily: fonts.PoppinsMedium, fontSize: sh(18), color: colors.yellow, flex: 1, top: sh(4)}}>Create</Text>
                        </TouchableWithoutFeedback>
                    </View>

                    {/* <Image source={require('../assets/logo.png')} style={{alignSelf: 'center', marginTop: sh(20)}} /> */}


                    

                    <Text style={styles.textFieldName}>Debt Name</Text>
                    <TextInput value={debtName} onChangeText={(input) => setDebtName(input)} inputMode='text' placeholder='Debt Name' placeholderTextColor={colors.grey} style={styles.textInput} />
                    <View style={styles.line} />
                    <Text style={styles.textFieldName}>Amount</Text>
                    <TextInput value={amount} onChangeText={(input) => setAmount(input)} inputMode='numeric' placeholder='RM 0' placeholderTextColor={colors.grey} style={styles.textInput} />
                    <View style={styles.line} />
                    <Text style={styles.textFieldName}>Interest Rate</Text>
                    <TextInput value={interestRate} onChangeText={(input) => setInterestRate(input)} inputMode='numeric' placeholder='0%' placeholderTextColor={colors.grey} style={styles.textInput} />
                    <View style={styles.line} />
                    <Text style={styles.textFieldName}>Repayment Amount</Text>
                    <TextInput value={repaymentAmount} onChangeText={(input) => setRepaymentAmount(input)} inputMode='numeric' placeholder='RM 0' placeholderTextColor={colors.grey} style={styles.textInput} />
                    <View style={styles.line} />




                    <Text style={styles.textFieldName}>Next Payment Date</Text>
                    <View style={{alignItems: 'flex-start', marginTop: sh(20), paddingLeft: sw(40)}}>
                        <DateTimePicker mode="date" value={date} />
                    </View>
                    <View style={styles.line} />
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    bg:{
        backgroundColor: 'white',
        height: '100%',
        paddingTop: sh(30),
    },
    line:{
        backgroundColor: colors.black,
        opacity: 0.1,
        height: sh(0.5),
        width: '100%',
        marginTop: sh(20),
        alignSelf: 'center',
        marginBottom: sh(20)
    },
    button: {
        fontFamily: fonts.RubikBold,
        fontSize: sh(18),
        paddingVertical: sh(10),
        paddingHorizontal: sw(20),
        borderRadius: sw(10),
        backgroundColor: colors.grey,
        flex: 1,
        marginHorizontal: sw(30),
    },
    textFieldName: {
        fontFamily: fonts.RubikMedium,
        fontSize: sh(18),
        color: colors.black,
        textAlign: 'left',
        marginLeft: sw(40),
    },
    textInput: {
        marginTop: sh(10), 
        width: '100%', 
        textAlign:'left', 
        marginLeft: sw(40),
        fontFamily: fonts.RubikBold, 
        fontSize: sh(24)
    }
})

export default SetupDebtsNew;