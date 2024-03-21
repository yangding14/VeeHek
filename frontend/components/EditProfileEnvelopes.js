import React from 'react';
import { View, Image, StyleSheet,Text, TouchableOpacity} from 'react-native';
import { sh,fonts,colors } from '../styles/GlobalStyle';
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
        shadowColor: '#171717',
        shadowOffset: {width: -10, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 3,
      },
      selected: {
        backgroundColor: colors.grey,
      },
    }
);

export default EditProfileEnvelopes;