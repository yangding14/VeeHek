import React, { useState } from 'react';
import { ScrollView, KeyboardAvoidingView, TextInput, Image, Alert, Modal, StyleSheet, Text, Pressable, View, TouchableWithoutFeedback } from 'react-native';
import { colors , fonts, sw, sh} from '../styles/GlobalStyle';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleSend = () => {
    setChatMessages(prevMessages => [...prevMessages, { text: message, sender: 'user' }]);
    setMessage(''); 
  };

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

              <View style={{ flexDirection: 'row', alignItems:'center'}}>
                <Pressable onPress={closeModal}>
                <Image source={require('../assets/arrowLeft.png')} style ={{marginLeft: 10}} />
                </Pressable>
                <Text style={[styles.modalTitle,{flex: 1, textAlign: 'center',marginTop:10,fontFamily: fonts.PoppinsBold, fontSize: sh(20)}]}>DebtyBot</Text>
              </View>
              <View style={{ borderBottomWidth: 1, borderBottomColor: 'black',opacity:0.1  }} />
              
              
              <View style={styles.chatContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start'}}>
                  {/* <Image source={require('../assets/DebtyLogo.png')} style = {{height:50, width:50,marginRight:10 }} /> */}
                  <View style={{ backgroundColor: 'black',opacity:0.5, paddingVertical: 10,paddingHorizontal:20, marginTop:5,borderRadius:25}}>
                    <Text style={{ color: 'white' , fontFamily:fonts.InterSemiBold, fontSize:18 }}>Hi songjun. Feel free to ask me anything...</Text>
                  </View>
                </View>
              </View>


              {/* <View style={styles.chatContainer}>
  {chatMessages.map((msg, index) => (
    <View key={index} style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
      {msg.sender === 'user' ? (
        <View style={{ backgroundColor: 'orange', borderRadius: 10, padding: 8, marginBottom: 5, marginRight: 10 }}>
          <Text style={{ color: 'white' }}>{msg.text}</Text>
        </View>
      ) : (
        <View style={{ backgroundColor: 'blue', borderRadius: 10, padding: 8, marginBottom: 5, marginLeft: 10 }}>
          <Text style={{ color: 'white' }}>{msg.text}</Text>
        </View>
      )}
    </View>
  ))}
</View> */}



            <View behavior={'padding'} style={{ flexDirection: 'row', alignItems: 'center', marginBottom:50}}>
                <TextInput
                  style={{ flex: 1,  borderWidth: 1, borderColor: 'gray', borderRadius: 10, padding: 10, marginLeft:10}}
                  value={message}
                  onChangeText={setMessage}
                  placeholder="Message DebtyBot..."
                />
                <Pressable onPress={handleSend}>
                  <Image source={require('../assets/SendButton.png')} style={{marginHorizontal: 10 }} />
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
    marginBottom: 100,
    marginEnd: 50,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  chatContainer: {
    height: 600,
    marginBottom: 0,

  },
  openButton: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  openButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: colors.greyBlue,
    padding: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
