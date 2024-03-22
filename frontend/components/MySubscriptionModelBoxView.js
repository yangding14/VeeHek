import React from 'react';
import { View, Text, StyleSheet , Image, TouchableOpacity} from 'react-native';
import {colors, fonts, sh, sw} from '../styles/GlobalStyle';


function MySubscriptionModel(props) {
    return (
        <View style= {box.mySubscriptionBox}>
            <Image style= {{width:70, height: 70}}source={require('../assets/DebtyFull.png')}/>
            <Text style = {{fontFamily: fonts.PoppinsRegular, fontSize: sh(24), color: colors.bgWhite, paddingVertical: sh(5)}}>Model Name</Text>
            <Text style = {{fontFamily: fonts.PoppinsLight, fontSize: sh(14), color: colors.bgWhite}}>Placeholder of the description of the model will be over here</Text>
            <View style = {box.borderLine}/>
            <Text style = {{fontFamily: fonts.PoppinsLight, fontSize: sh(18), color: colors.bgWhite}}>Explore Me:</Text>
            <TouchableOpacity style= {box.buttonCSS}>
                        {/* onPress function waiting */}
                        <Text style={box.buttonText}>Generate Debt Repayment Plan</Text>
                        <Image source={require('../assets/whiteBg-arrow-right.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style= {box.buttonCSS}>
                        {/* onPress function waiting */}
                        <Text style={box.buttonText}>Generate Budget Envelope</Text>
                        <Image source={require('../assets/whiteBg-arrow-right.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style= {box.buttonCSS}>
                        {/* onPress function waiting */}
                        <Text style={box.buttonText}>24/7 Financial Advisor Chatbot</Text>
                        <Image source={require('../assets/whiteBg-arrow-right.png')}/>
                    </TouchableOpacity>
                    <View style = {{padding: sh(20)}}/>
        </View>
        
    );
}

const box = StyleSheet.create({
    mySubscriptionBox: {
        flexDirection: 'column',
        marginTop: sh(30),
        backgroundColor: colors.greyBlue,
        padding: sh(20),
        borderRadius: sh(20),
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.55,
    },

    borderLine : {
        borderBottomColor: colors.bgWhite,
        borderBottomWidth: 1,
        marginVertical: sh(20)
    },

    buttonCSS:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor:colors.white,
        borderRadius: sh(8),
        padding: sh(10),
        width: '100%',
        paddingVertical: sh(3),
        marginTop: sh(15)

    },

    buttonText:{
        fontFamily:fonts.PoppinsSemiBold,
        fontSize: sh(14),
        color: colors.greyBlue,

    },  

   
})

export default MySubscriptionModel;