import React from 'react';
import { Image, Keyboard, Modal, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { colors, fonts, sh, sw } from '../styles/GlobalStyle';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';

function Wallet_EnvelopeNewOperation({isVisible, setIsVisible, setData}) {
    const [date, setDate] = React.useState(new Date());
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
    }
    const [operationType, setOperationType] = useState('expense'); // Track the operation type (expense or income)
    const [operationName, setOperationName] = useState('');
    const [operationAmount, setOperationAmount] = useState(''); // Track the operation amount

    const handleCreate = () => {
        setData(prev => [{
            OperationName: operationName === '' ? 'Food' : operationName,
            OperationDate: date.toDateString(),
            OperationAmount: operationType === 'expense' ? `- RM ${operationAmount}` : `+ RM ${operationAmount}`
        }, ...prev]);
        setIsVisible(false);
    }

    return (
        <Modal visible={isVisible} transparent={true} animationType='slide' >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <View style={styles.bg}>
                    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                        <TouchableWithoutFeedback hitSlop={40} onPress={() => setIsVisible(false)}>
                            <Image source={require('../assets/arrow_left.png')} style={{flex: 1, resizeMode: 'contain', top: sh(6)}} />
                        </TouchableWithoutFeedback>
                        <Text style={{fontFamily: fonts.RubikBold, fontSize: sh(26), textAlign: 'center', flex: 3}}>New Operation</Text>
                        <TouchableWithoutFeedback hitSlop={40} onPress={handleCreate} >
                            <Text style={{fontFamily: fonts.PoppinsMedium, fontSize: sh(18), color: colors.yellow, flex: 1, top: sh(4)}}>Create</Text>
                        </TouchableWithoutFeedback>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: sh(20) }}>
                        <TouchableWithoutFeedback onPress={() => setOperationType('expense')}>
                            <View style={styles.button}>
                                <Text style={[styles.text, operationType === 'expense' && styles.textFocused]}>Expense</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => setOperationType('income')}>
                            <View style={styles.button}>
                                <Text style={[styles.text, operationType === 'income' && styles.textFocused]}>Income</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>

                    {/* <Image source={require('../assets/logo.png')} style={{alignSelf: 'center', marginTop: sh(20)}} /> */}


                    <View style={styles.line} />
                    <TextInput value={operationAmount} onChangeText={(input) => setOperationAmount(input)} inputMode='numeric' placeholder='RM 0' style={{marginTop: sh(20), width: '100%', textAlign:'center', fontFamily: fonts.RubikBold, fontSize: sh(24)}} />
                    <View style={styles.line} />
                    <View style={{alignItems: 'center', marginTop: sh(20)}}>
                        <DateTimePicker mode="date" value={date} onChange={onChange} />
                    </View>
                    <View style={styles.line} />
                    <TextInput value={operationName} onChangeText={(input) => setOperationName(input)} inputMode='text' placeholder='Expense Name (Optional)' style={{marginTop: sh(20), width: '100%', textAlign:'center', fontFamily: fonts.RubikBold, fontSize: sh(24)}} />
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
}

const styles = StyleSheet.create({
    bg:{
        backgroundColor: 'white',
        height: '100%',
        marginTop: '23%',
        borderTopLeftRadius: sw(24),
        borderTopRightRadius: sw(24),
        paddingTop: sh(30),

        shadowRadius: sw(4), //for ios
        shadowColor:colors.black, //for ios
        shadowOpacity: 0.12, //for ios
        shadowOffset:{height: sh(1)}, //for ios
        elevation: 2 //for android
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

export default Wallet_EnvelopeNewOperation;