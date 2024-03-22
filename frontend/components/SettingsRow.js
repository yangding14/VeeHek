import React from 'react';
import { View,Text, StyleSheet,Image, Switch, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { colors, fonts, sh } from '../styles/GlobalStyle';

function SettingsRow(props) {
    const [isEnabled, setIsEnabled] = React.useState(false);
    if (props.text === "Push Notifications") {
        return (
            <View style={styles.background} >
                <Text style={{fontFamily:fonts.RubikRegular, fontSize:sh(20)}}>
                    {props.text}
                </Text>
                <Switch
                value={isEnabled} 
                onValueChange={(value)=>setIsEnabled(value)} 
                trackColor={{false:colors.grey,true: colors.greyBlue}} 
                thumbColor={isEnabled?colors.bgWhite:colors.greyBlue}/>
            </View>
        );
    }
    return (
        <TouchableOpacity style={styles.background} onPress={props.onPressSettingRow}>
            <Text style={{fontFamily:fonts.RubikRegular, fontSize:sh(20)}}>
                {props.text}
            </Text>
            <Image source={require('../assets/arrow_right.png')} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    background: {
        flexDirection: "row",
        paddingVertical: sh(20),
        alignItems: "center",
        justifyContent: "space-between",
    },
});
export default SettingsRow;