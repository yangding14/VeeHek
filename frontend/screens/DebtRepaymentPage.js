import React, {useState} from 'react';
import { TextInput ,Text, StyleSheet, View, Image ,TouchableOpacity, Modal} from 'react-native';
import {appStyles, colors, fonts, sh, sw} from '../styles/GlobalStyle';
import DebtRepaymentBox from '../components/DebtRepaymentBox';

function DebtRepaymentPage(props) {
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    }
    
    return (
        <View style= {appStyles.appBackground}>
            <View style = {{flexDirection: 'row', alignItems: 'center',gap: sw(20), alignSelf:'center'}}>
        {/* TouchableOpacity for back button */}
            <Image source={require('../assets/arrow-left.png')}/>
            <Text style = {debtPage.headerTitle}>Model Name</Text>
            </View>
            <DebtRepaymentBox/>
            <TouchableOpacity style = {debtPage.downloadButton}>
            <Text style= {{fontFamily: fonts.PoppinsSemiBold, fontSize: sh(16)}}>Download as PDF</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {debtPage.emailButton}>
            <Text style= {{fontFamily: fonts.PoppinsSemiBold, fontSize: sh(16)}}>Email a Copy</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress= {toggleModal} style = {debtPage.saveButton}>
            <Text style= {{fontFamily: fonts.PoppinsSemiBold, fontSize: sh(16)}}>Save</Text>
            </TouchableOpacity>
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
                >
                <View style= {debtPage.modalBox}>
                    <Text style = {{fontFamily: fonts.PoppinsSemiBold, fontSize: sh(24)}}>Name this plan:</Text>
                    <TextInput style= {debtPage.textInput}/>
                    <TouchableOpacity onPress= {toggleModal} style = {debtPage.saveButton}>
                    <Text style= {{fontFamily: fonts.PoppinsSemiBold, fontSize: sh(16)}}>Save</Text>
                    {/* SAVE FUNCTION HERE */}
                    </TouchableOpacity>
                </View>
                
                </Modal>
        </View>
    );
}

const debtPage = StyleSheet.create({
    headerTitle: {
        fontFamily: fonts.RubikBold,
        fontSize: sh(36)
    },

    downloadButton : {
        alignSelf: 'center',
        marginTop: sh(20),
        backgroundColor: '#C0C3C5',
        borderColor: '#000',
        borderWidth:sh(3),
        borderRadius: sh(8),
        opacity: 0.8,
        alignItems: 'center',
        paddingVertical: sh(10),
        paddingHorizontal: sw(15),
        width: sw(150),
        marginTop: sh(80)
    },

    emailButton : {
        alignSelf: 'center',
        marginTop: sh(10),
        backgroundColor: '#FBC6C6',
        borderColor: '#000',
        borderWidth:sh(3),
        borderRadius: sh(8),
        opacity: 0.8,
        alignItems: 'center',
        paddingVertical: sh(10),
        paddingHorizontal: sw(15),
        width: sw(150),  
    },

    saveButton : {
        alignSelf: 'center',
        marginTop: sh(10),
        backgroundColor: '#B3D5B5',
        borderColor: '#000',
        borderWidth:sh(3),
        borderRadius: sh(8),
        opacity: 0.8,
        alignItems: 'center',
        paddingVertical: sh(10),
        paddingHorizontal: sw(15),
        width: sw(150),
    },

    modalBox : {
        borderWidth:3,
        borderColor: '#3F9A43' ,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.greenLight,
        borderRadius: sh(20),
        padding: sh(20),
        marginHorizontal: sw(20),
        marginTop: sh(300),
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},   
        shadowOpacity: 0.55,
    },

    textInput : {
        borderRadius: sh(10),
        marginTop: sh(10),
        backgroundColor: "#D9D9D9",
        color: colors.greyBlue,
        height: sh(50),
        width: sw(200), 
        padding: sh(5),
        marginBottom: sh(20)
    }
})


export default DebtRepaymentPage;