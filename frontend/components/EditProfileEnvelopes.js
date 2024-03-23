import React from 'react';
import { View, Image, StyleSheet,Text, TouchableOpacity} from 'react-native';
import { sh,fonts,colors, sw } from '../styles/GlobalStyle';
import { useState } from 'react';

function EditProfileEnvelopes(props) {
    const [isSelected, setIsSelected] = useState(false);
    const toggleSelection = () => {
        setIsSelected(!isSelected);
      };

    return (
        <TouchableOpacity
      onPress={toggleSelection}
      style={[
        styles.container,
        styles.shadow,
        isSelected ? styles.selected : {} ]}>
            <Image source={props.source} style={{width:sh(90),
            height:sh(90)}}/> 
            <Text style={{fontFamily:fonts.PoppinsBlack, fontSize:sh(12), marginTop: sh(10)}}>
                {props.text}
                </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        margin: sh(10),
        padding: sh(10),
        backgroundColor: 'white',
        borderRadius: sh(10),
    },
    shadow: {
        shadowRadius: sw(4), //for ios
        shadowColor:colors.black, //for ios
        shadowOpacity: 0.12, //for ios
        shadowOffset:{height: sh(1)}, //for ios
        elevation: 2 //for android
      },
      selected: {
        backgroundColor: colors.grey,
      },
    }
);

export default EditProfileEnvelopes;