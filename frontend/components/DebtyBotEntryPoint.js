import React, { useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { sh, sw } from '../styles/GlobalStyle';
import DebtyBot from '../screens/DebtyBot';

function DebtyBotEntryPoint({navigation}) {  
  const [modalVisible, setModalVisible] = useState(false);

    const onPressEnvelope = () => {
        setModalVisible(true);
    }

    return (
        <View style={{ position: 'absolute', top: sh(-30) ,right: sw(-30) }}>
            <TouchableOpacity hitSlop={40} onPress={onPressEnvelope}>
                <Image source={require('../assets/logo.png')} style={{width: 100, height: 100}} />
            </TouchableOpacity>

            <DebtyBot modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </View>
    );
}

export default DebtyBotEntryPoint;