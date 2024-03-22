import React, { useState } from 'react';
import { ScrollView, KeyboardAvoidingView, TextInput, Image, Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { colors , fonts, sw, sh} from '../styles/GlobalStyle';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
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
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>

              {/* header (title + back button) */}
              <View style={{ flexDirection: 'row', alignItems:'center'}}>
                <Pressable onPress={closeModal}>
                  <Image source={require('../assets/arrowLeft.png')} style ={{marginLeft: sw(10)}} />
                </Pressable>
                <Text style={[styles.modalTitle,{flex: 1, textAlign: 'center',marginTop:sh(10),fontFamily: fonts.PoppinsBold, fontSize: sh(20)}]}>DebtyBot</Text>
              </View>

              <View style={{ borderBottomWidth: 1, borderBottomColor: 'black',opacity:0.1  }} />
                <View style={styles.chatContainer}>
                  
                


                  {chatMessages.map((msg, index) => (
                    <View key={index} style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                      {msg.sender === 'user' ? (
                        <UserChatBubble text={msg.text} />
                      ) : (
                        <BotChatBubble text={msg.text} />
                      )}
                    </View>
                  ))}

              </View>



                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: sh(50)}}>
                  <TextInput
                    style={{ flex: 1, borderWidth: sw(1), borderColor: 'gray', borderRadius: sh(10), padding: sh(10), marginLeft: sw(10)}}
                    value={message}
                    onChangeText={setMessage}
                    placeholder="Message DebtyBot..."
                  />
                  <Pressable onPress={handleSend}>
                    <Image source={require('../assets/SendButton.png')} style={{marginHorizontal: sw(10) }} />
                  </Pressable>
                </View>

              </View>


          </View>
        
      </Modal>
      <Pressable
        style={[styles.openButton]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.openButtonText}>Hey DebtyBot</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: sh(100),
    marginEnd: sw(50),
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: sh(20),
    borderTopRightRadius: sh(20),
    padding: sh(20),
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

export default App;