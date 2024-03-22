import React,{useState} from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback } from 'react-native';
import { appStyles, colors, fonts, sh } from '../styles/GlobalStyle';
import { useNavigation } from '@react-navigation/native';

function Settings_ChangePassword(props) {
    const navigation = useNavigation();
    const [password, setPassword] = useState(''); 
    const [isPasswordSecure, setIsPasswordSecure] = useState(true);
    const [isConfirmPasswordSecure, setIsConfirmPasswordSecure] = useState(true);
    return (
        <View style={appStyles.appBackground}>
            <View style={styles.header}>
            <TouchableWithoutFeedback hitSlop={40} onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/arrow_left.png')} style={styles.backButton} />
                </TouchableWithoutFeedback>
            <Text style={styles.headerText}>Edit Profile</Text>
            </View>
            <Text style={{fontFamily:fonts.RubikRegular, fontSize:sh(18), color:colors.grey, paddingTop:sh(20)}}>
            Create a new password. Ensure it differs from previous ones for security.
        </Text>
        <Text style={{fontFamily:fonts.RubikRegular, fontSize:sh(20), paddingTop:sh(50)}}> Password</Text>
        <View style={styles.inputContainer}>
        <TextInput
        style={styles.inputBox}  
        placeholder="Enter your new password" 
        secureTextEntry={isPasswordSecure} 
         />
         <TouchableOpacity
                onPress={() => setIsPasswordSecure(!isPasswordSecure)}
                style={styles.toggle}
            >
                {isPasswordSecure ? 
                <Image source={require('../assets/iconEye.png')} style={{height:sh(25), width:sh(25)}}/> 
                : <Image source={require('../assets/iconEyeSlash.png')} style={{height:sh(25), width:sh(25)}}/>}
            </TouchableOpacity>
         </View>
        <Text style={{fontFamily:fonts.RubikRegular, fontSize:sh(20), paddingTop:sh(30)}}> Confirm Password</Text>
        <View style={styles.inputContainer}>
        <TextInput
        style={styles.inputBox}  
        placeholder="Re-enter password" 
        secureTextEntry={isConfirmPasswordSecure} 
         />
         <TouchableOpacity
                onPress={() => setIsConfirmPasswordSecure(!isConfirmPasswordSecure)}
                style={styles.toggle}
            >
                {isConfirmPasswordSecure ? 
                <Image source={require('../assets/iconEye.png')} style={{height:sh(25), width:sh(25)}}/> 
                : <Image source={require('../assets/iconEyeSlash.png')} style={{height:sh(25), width:sh(25)}}/>}
            </TouchableOpacity>
         </View>
        <TouchableOpacity
                onPress={() => {}}
                style={styles.button}
                >
                <Text style={styles.buttonText}>Update</Text>
                </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: sh(20),
    },
    backButton: {
        resizeMode: 'contain',
    },
    headerText: {
        flex: 1, 
        textAlign: 'center', 
        fontWeight: 'bold', 
        fontFamily:fonts.RubikRegular, 
        fontSize:sh(20)
    },
    inputBox:{
        flex: 1,
        height: 40,
        paddingLeft: 10,
        paddingRight: 70,
        fontFamily:fonts.PoppinsMedium,
        fontSize:sh(16),
    },
    button: {
        backgroundColor: colors.greyBlue,
        paddingVertical: sh(10),
        paddingHorizontal: sh(20),
        borderRadius: 10,
        marginVertical: sh(30),
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText: {
        fontFamily: fonts.PoppinsMedium,
        fontSize: sh(16),
        color: 'white', 
      },
      container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
    },
    toggle: {
        position: 'absolute',
        right: 10,
        height: '100%',
        justifyContent: 'center',
        padding: 3,
    },
    
});

export default Settings_ChangePassword;