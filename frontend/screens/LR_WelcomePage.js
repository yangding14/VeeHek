import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';


function LR_WelcomePage(props) {
    const navigation = useNavigation();
    return (
        <>
        <TouchableOpacity onPress={ () => navigation.navigate('LR_Register')}>
            <Image
                source={require('../assets/GetStarted.png')}
            />
        </TouchableOpacity>
        </>
    );
}

export default LR_WelcomePage;