import React from 'react';
import { Modal, StyleSheet, Text, Touchable, TouchableWithoutFeedback, View } from 'react-native';
import { colors, fonts, sh } from '../styles/GlobalStyle';
import DebtHomeDetailsModalTotalRemaining from '../components/DebtHomeDetailsModalTotalRemaining';
import DebtHomeDetailsModalDetails from '../components/DebtHomeDetailsModalDetails';

function Setup_DebtsDetails({isVisible, setIsModalVisible, data, currentIndex}) {
    return (
        <Modal visible={isVisible} transparent={true} animationType='fade'>
            <TouchableWithoutFeedback onPress={() => setIsModalVisible(false)} >
                <View>
                    <View style={{height: '100%', width: '100%', position: 'absolute', backgroundColor: colors.black, opacity: 0.85}} />
                    <View style={styles.bg} >
                        <DebtHomeDetailsModalDetails data={data} currentIndex={currentIndex} />
                        <Text style={styles.textDismiss}>TAP ANYWHERE TO DISMISS</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
}

const styles = StyleSheet.create({
    bg: {
        // backgroundColor: colors.bgWhite,
        justifyContent: 'center',
        width: '100%',
        paddingVertical: '20%',
        height: '100%',
        paddingHorizontal: '15%'
    },
    textDismiss:{
        color: colors.white,
        textAlign: 'center',
        marginTop: '10%',
        fontFamily: fonts.RubikLight,
        fontSize: sh(30),
        opacity: 0.3
    }
})

export default Setup_DebtsDetails;