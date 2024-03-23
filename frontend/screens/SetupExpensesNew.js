import React from 'react';
import { Image, Keyboard, Modal, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { colors, fonts, sh, sw } from '../styles/GlobalStyle';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

function SetupExpensesNew({isVisible, setIsVisible, setData}) {
    const navigation = useNavigation();
    const [date, setDate] = React.useState(new Date());
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
    }
    const [operationType, setOperationType] = useState('expense'); // Track the operation type (expense or income)
    const [operationName, setOperationName] = useState('');
    const [operationAmount, setOperationAmount] = useState(''); // Track the operation amount

    const handleCreate = () => {
        // setData(prev => [{
        //     OperationName: operationName === '' ? 'Food' : operationName,
        //     OperationDate: date.toDateString(),
        //     OperationAmount: operationType === 'expense' ? `- RM ${operationAmount}` : `+ RM ${operationAmount}`
        // }, ...prev]);
        navigation.goBack();
    }

    return (
        <View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>   
                <View style={styles.bg}>
                    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                        <TouchableWithoutFeedback hitSlop={40} onPress={() => navigation.goBack()}>
                            <Image source={require('../assets/arrow_left.png')} style={{flex: 1, resizeMode: 'contain', top: sh(6)}} />
                        </TouchableWithoutFeedback>
                        <Text style={{fontFamily: fonts.RubikBold, fontSize: sh(26), textAlign: 'center', flex: 3}}>New Category</Text>
                        <TouchableWithoutFeedback hitSlop={40} onPress={handleCreate} >
                            <Text style={{fontFamily: fonts.PoppinsMedium, fontSize: sh(18), color: colors.yellow, flex: 1, top: sh(4)}}>Create</Text>
                        </TouchableWithoutFeedback>
                    </View>

                    {/* <Image source={require('../assets/logo.png')} style={{alignSelf: 'center', marginTop: sh(20)}} /> */}


                    <TextInput value={operationName} onChangeText={(input) => setOperationName(input)} inputMode='text' placeholderTextColor={colors.grey} placeholder='Expense Name' style={{marginTop: sh(50), width: '100%', textAlign:'center', fontFamily: fonts.RubikBold, fontSize: sh(24)}} />
                    <View style={styles.line} />
                    <TextInput value={operationAmount} onChangeText={(input) => setOperationAmount(input)} inputMode='numeric' placeholder='RM 0' placeholderTextColor={colors.grey} style={{marginTop: sh(20), width: '100%', textAlign:'center', fontFamily: fonts.RubikBold, fontSize: sh(24)}} />
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
        alignSelf: 'center'
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
    text: {
        fontFamily: fonts.InterBold,
        fontSize: sh(18),
        color: colors.black,
        opacity: 0.5,
        textAlign: 'center',
    },
    textFocused: {
        color: colors.black,
        opacity: 1,
    }
})

export default SetupExpensesNew;