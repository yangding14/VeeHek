import React from 'react';
import { Image, Keyboard, Modal, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { colors, fonts, sh, sw } from '../styles/GlobalStyle';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';

function Wallet_EnvelopeNewOperation({isVisible, setIsVisible}) {
    const [date, setDate] = React.useState(new Date());
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
    }
    const [operationType, setOperationType] = useState('expense'); // Track the operation type (expense or income)

    return (
        <Modal visible={isVisible} transparent={true} animationType='slide' >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <View style={styles.bg}>
                    <TouchableWithoutFeedback hitSlop={40} onPress={() => setIsVisible(false)}>
                        <Image source={require('../assets/arrow_left.png')} style={{position: 'absolute', left: sw(50), top: sh(36)}} />
                    </TouchableWithoutFeedback>
                    <Text style={{fontFamily: fonts.RubikBold, fontSize: sh(26), textAlign: 'center'}}>New Operation</Text>
                    <Text style={{position: 'absolute', right: sw(30), top: sh(34), fontFamily: fonts.PoppinsMedium, fontSize: sh(18), color: colors.yellow}}>Create</Text>

                    <View style={{ flexDirection: 'row', marginTop: sh(20) }}>
                        <TouchableWithoutFeedback onPress={() => setOperationType('expense')}>
                            <View style={[styles.text, operationType === 'expense' && styles.textFocused]}>
                                <Text >Expense</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => setOperationType('income')}>
                            <View style={[styles.text, operationType === 'income' && styles.textFocused]}>
                                <Text >Income</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>

                    {/* <Image source={require('../assets/logo.png')} style={{alignSelf: 'center', marginTop: sh(20)}} /> */}


                    <View style={styles.line} />
                    <TextInput inputMode='numeric' placeholder='RM 0' style={{marginTop: sh(20), width: '100%', textAlign:'center', fontFamily: fonts.RubikBold, fontSize: sh(24)}} />
                    <View style={styles.line} />
                    <View style={{alignItems: 'center', marginTop: sh(20)}}>
                        <DateTimePicker mode="date" value={date} onChange={onChange} />
                    </View>
                    <View style={styles.line} />
                    <TextInput inputMode='text' placeholder='Expense Name (Optional)' style={{marginTop: sh(20), width: '100%', textAlign:'center', fontFamily: fonts.RubikBold, fontSize: sh(24)}} />
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
        borderWidth: 1,
        borderRadius: sw(10),
        backgroundColor: colors.black,
        opacity: 0.15,
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
        opacity: 1,
    }
})

export default Wallet_EnvelopeNewOperation;