import React, { useState } from 'react';
import { ScrollView, KeyboardAvoidingView, TextInput, Image, Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { colors , fonts, sw, sh, appStyles} from '../styles/GlobalStyle';

const DebtyBot = ({modalVisible, setModalVisible}) => {
    const [message, setMessage] = useState('');
    const [chatMessages, setChatMessages] = useState([
        { text: 'Hi! I am DebtyBot. How can I help you today?', sender: 'bot' },
        { text: 'I can help you with your debt management. Just ask me anything!', sender: 'bot'},
        { text: 'How can I pay my debt?', sender: 'user' },
        { text: 'You can pay your debt by going to the Wallet tab and clicking on the Pay Debt button.', sender: 'bot' },
    ]);

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleSend = () => {
        setChatMessages(prevMessages => [...prevMessages, { text: message, sender: 'user' }]);
        setMessage(''); 
    };

    const BotChatBubble = ({text}) => {
        return(
            <View style={{ flexDirection: 'row', alignItems: 'flex-start'}}>
                <View style={{ backgroundColor: 'black',opacity:0.5, paddingVertical: sh(10),paddingHorizontal:sw(20), marginTop:sh(5),borderRadius:sh(25), marginRight: sw(40)}}>
                    <Text style={{ color: 'white' , fontFamily:fonts.InterSemiBold, fontSize:sh(18) }}>{text}</Text>
                </View>
            </View>
        )
    }

    const UserChatBubble = ({text}) => {
        return(
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                <View style={{ backgroundColor: 'orange', paddingVertical: sh(10), paddingHorizontal: sw(20), marginTop: sh(5), borderRadius:sh(25) }}>
                    <Text style={{ color: 'white' , fontFamily:fonts.InterSemiBold, fontSize: sh(18) }}>{text}</Text>
                </View>
            </View>
        )
    }

    return (
        <Modal visible={modalVisible} animationType='slide' transparent={true}>
            <View style={styles.bg}>

            
            {/* header (title + back button) */}
            <View style={{ flexDirection: 'row', alignItems:'center', marginTop: sh(30) }}>
                <Pressable onPress={closeModal}>
                    <Image source={require('../assets/backButton.png')} style ={{flex: 1, marginLeft: sw(40), height: sh(20), width: undefined, aspectRatio: 1, marginBottom: sh(4)}} />
                </Pressable>
                <Text style={[styles.modalTitle,{flex: 5, textAlign: 'center',fontFamily: fonts.PoppinsBold, fontSize: sh(20)}]}>DebtyBot</Text>
                <View style={{flex: 1}} />
            </View>
            {/* Header seperation line */}
            <View style={{ borderBottomWidth: 1, borderBottomColor: 'black',opacity:0.1, marginBottom: sh(10), marginTop: sh(16)  }} />

            <ScrollView style={styles.chatContainer}>
                {/* Chat messages */}
                {chatMessages.map((msg, index) => (
                    <View key={index} style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                        {msg.sender === 'user' ? (
                            <UserChatBubble text={msg.text} />
                        ) : (
                            <BotChatBubble text={msg.text} />
                        )}
                    </View>
                ))}
            </ScrollView>

            {/* Input */}
            <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={sh(100)}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: sh(16), marginHorizontal: sw(10)}}>
                    <TextInput
                        style={{ flex: 8, borderWidth: sw(1), borderColor: 'gray', borderRadius: sh(15), padding: sh(10), marginLeft: sw(10), fontFamily: fonts.InterSemiBold, fontSize: sh(18)}}
                        value={message}
                        placeholder="Message DebtyBot..."
                        onChangeText={setMessage}
                        />
                    <Pressable onPress={handleSend}>
                        <Image source={require('../assets/SendButton.png')} style={{marginHorizontal: sw(10), flex: 2, height: sh(34), width: sh(34), resizeMode: 'contain' }} />
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    bg:{
        backgroundColor: 'white',
        flex: 1,
        marginTop: '23%',
        borderTopLeftRadius: sw(24),
        borderTopRightRadius: sw(24),

        shadowRadius: sw(4), //for ios
        shadowColor:colors.black, //for ios
        shadowOpacity: 0.12, //for ios
        shadowOffset:{height: sh(1)}, //for ios
        elevation: 2 //for android
    },
    container:{
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: colors.bgWhite,
    },
    modalTitle: {
        fontSize: sh(20),
        fontWeight: 'bold',
        marginBottom: sh(10),
        textAlign: 'center',
    },
    chatContainer: {
        height: sh(650),
        marginBottom: 0,
        paddingHorizontal: sw(20),
    },
    openButton: {
        backgroundColor: '#2196F3',
        borderRadius: sh(20),
        padding: sh(10),
        elevation: 2,
    },
    openButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    closeButton: {
        backgroundColor: colors.greyBlue,
        padding: sh(15),
        borderBottomLeftRadius: sh(20),
        borderBottomRightRadius: sh(20),
    },
    closeButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default DebtyBot;
