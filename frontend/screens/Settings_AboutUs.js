import React from 'react';
import { View, Text, Image } from 'react-native';
import { appStyles, sh, fonts, colors } from '../styles/GlobalStyle';

function Settings_AboutUs(props) {
    return (
        <View style={appStyles.appBackground}>
            <View style = {{ flexDirection: 'row', alignItems: 'center',justifyContent: 'flex-start'}}>
            <Image source={require('../assets/arrowLeft.png')} />
            <Text style={{flex: 1, textAlign: 'center',fontFamily: fonts.RubikBold, fontSize: sh(20)}}>About Us</Text>
            </View>

            {/* <Text style={{fontFamily: fonts.RubikBold, fontSize: sh(30),justifyContent: 'center'}}>About Us</Text> */}
            
            <View style = {{ alignItems: 'center',justifyContent: 'center',paddingTop: 30}}>
            <Image source={require('../assets/DebtyLogo.png')} /> 
            {/* <View style = {{alignContent: 'center',justifyContent: 'center',backgroundColor:colors.yellow}}> */}
            </View>
            <Text style={{fontFamily: fonts.Poppins, fontSize: sh(17),textAlign: 'justify',paddingTop: 20}}>Welcome to Debty, your dedicated ally in navigating the path to financial freedom and stability. Debty was conceived by a group of financial experts and technology enthusiasts united by the mission to democratize debt management for all.
            </Text>
            <Text style={{fontFamily: fonts.Poppins, fontSize: sh(17),textAlign: 'justify',paddingTop: 20}}>In the modern world, managing debt can often feel like an uphill battle. The burden of debt not only limits financial opportunities but can also lead to significant stress, affecting one's ability to enjoy life to the fullest. Recognizing the urgency of this issue, Debty aims to simplify the debt management process, providing tools and resources that educate and empower individuals to regain control of their finances.
            </Text>
            <Text style={{fontFamily: fonts.Poppins, fontSize: sh(17),textAlign: 'justify',paddingTop: 20}}>At Debty, we uphold the belief that smart debt management is foundational to achieving financial health. Our platform is designed to deliver personalized debt repayment strategies, enable progress tracking towards financial objectives, and enhance financial literacy among our users. Debty offers a supportive and informative environment to assist you in every step.

            </Text>
        </View>
        
    );
}

export default Settings_AboutUs;