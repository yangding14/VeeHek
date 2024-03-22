import React from 'react';
import { View, Text, Image, ScrollView } from "react-native";
import { appStyles, sh,sw, fonts } from "../styles/GlobalStyle";

function Settings_TermsAndCon(props) {
    return (
        <View style={appStyles.appBackground}>
            <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Image source={require("../assets/arrowLeft.png")} />
        <Text style={{ flex: 1, textAlign: "center", fontFamily: fonts.RubikBold, fontSize: sh(20),paddingBottom:sh(10)}}>Terms and Condition</Text>
      </View>
      <View style = {{marginHorizontal: -sw(40)}}>
      <ScrollView style ={{paddingHorizontal: sw(40)}}>
            
            <Text style={{fontFamily: fonts.Poppins, fontSize: sh(17),textAlign: 'justify',paddingTop: sh(20)}}>Welcome to Debty, your dedicated ally in navigating the path to financial freedom and stability. Debty was conceived by a group of financial experts and technology enthusiasts united by the mission to democratize debt management for all.</Text>
            <Text style={{fontFamily: fonts.Poppins, fontSize: sh(17),textAlign: 'justify',paddingTop: sh(20)}}>In the modern world, managing debt can often feel like an uphill battle. The burden of debt not only limits financial opportunities but can also lead to significant stress, affecting one's ability to enjoy life to the fullest. Recognizing the urgency of this issue, Debty aims to simplify the debt management process, providing tools and resources that educate and empower individuals to regain control of their finances.</Text>
            <Text style={{fontFamily: fonts.Poppins, fontSize: sh(17),textAlign: 'justify',paddingTop: sh(20)}}>At Debty, we uphold the belief that smart debt management is foundational to achieving financial health. Our platform is designed to deliver personalized debt repayment strategies, enable progress tracking towards financial objectives, and enhance financial literacy among our users. Debty offers a supportive and informative environment to assist you in every step.</Text>
            <Text style={{fontFamily: fonts.Poppins, fontSize: sh(17),textAlign: 'justify',paddingTop: sh(20)}}>By using our services, you agree to the following terms and conditions:</Text>
            <Text style={{fontFamily: fonts.Poppins, fontSize: sh(17),textAlign: 'justify',paddingTop: sh(20)}}>1. You must be at least 18 years old to use our services.</Text>
            <Text style={{fontFamily: fonts.Poppins, fontSize: sh(17),textAlign: 'justify'}}>2. You must provide accurate and complete information when using our services.</Text>
            <Text style={{fontFamily: fonts.Poppins, fontSize: sh(17),textAlign: 'justify'}}>3. You must not use our services for any illegal or unauthorized purpose.</Text>
            <Text style={{fontFamily: fonts.Poppins, fontSize: sh(17),textAlign: 'justify'}}>4. You must not use our services to violate any laws in your jurisdiction.</Text>
            <Text style={{fontFamily: fonts.Poppins, fontSize: sh(17),textAlign: 'justify'}}>5. You must not use our services to violate the rights of others.</Text>
            <Text style={{fontFamily: fonts.Poppins, fontSize: sh(17),textAlign: 'justify'}}>6. You must not use our services to harass, abuse, or harm others.</Text>
            <Text style={{fontFamily: fonts.Poppins, fontSize: sh(17),textAlign: 'justify'}}>7. You must not use our services to send spam or other unauthorized communications.</Text>
            <Text style={{fontFamily: fonts.Poppins, fontSize: sh(17),textAlign: 'justify'}}>8. You must not use our services to transmit any viruses or other harmful code.</Text>
            <Text style={{fontFamily: fonts.Poppins, fontSize: sh(17),textAlign: 'justify'}}>9. You must not use our services to collect others' personal information.</Text>
            <Text style={{fontFamily: fonts.Poppins, fontSize: sh(17),textAlign: 'justify'}}>10. You must not use our services to interfere with or disrupt our services.</Text>
            <Text style={{fontFamily: fonts.Poppins, fontSize: sh(17),textAlign: 'justify'}}>11. You must not use our services to violate the privacy of others.</Text>
            <Text style={{fontFamily: fonts.Poppins, fontSize: sh(17),textAlign: 'justify'}}>12. You must not use our services to violate the intellectual property rights of others.</Text>
            <Text style={{fontFamily: fonts.Poppins, fontSize: sh(17),textAlign: 'justify'}}>13. You must not use our services to violate any other rights of others.</Text>
            <Text style={{fontFamily: fonts.Poppins, fontSize: sh(17),textAlign: 'justify'}}>14. You must not use our services to violate any other terms and conditions.</Text>
            <Text style={{fontFamily: fonts.Poppins, fontSize: sh(17),textAlign: 'justify'}}>15. You must not use our services to violate any other policies.</Text>

            <Text style={{fontFamily: fonts.Poppins, fontSize: sh(17),textAlign: 'justify',paddingTop: sh(20)}}>We reserve the right to terminate or suspend your account and access to our services if you violate any of the terms and conditions.</Text>
            <Text style={{fontFamily: fonts.Poppins, fontSize: sh(17),textAlign: 'justify',paddingTop: sh(20)}}>We reserve the right to change the terms and conditions at any time without notice.</Text>
            <Text style={{fontFamily: fonts.Poppins, fontSize: sh(17),textAlign: 'justify',paddingTop: sh(20)}}>If you have any questions about the terms and conditions, please contact us: </Text>    
            <Text style={{fontFamily: fonts.Poppins, fontSize: sh(17),paddingTop: sh(10), paddingBottom:sh(150)}}>By email: {'\t'}   
            <Text style ={{fontFamily: fonts.Poppins,textDecorationLine: 'underline'}}>debtyVeeHack@gmail.com </Text></Text>
            </ScrollView>
            </View>
        </View>
    );
}

export default Settings_TermsAndCon;