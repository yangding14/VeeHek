import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { appStyles, sh, fonts, colors } from "../styles/GlobalStyle";

function Settings_PrivacyPolicy(props) {
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
        <Text style={{ flex: 1, textAlign: "center", fontFamily: fonts.RubikBold, fontSize: sh(30),}}>Privacy Policy</Text>
      </View>
        <ScrollView>

            <Text style = {{fontFamily: fonts.PoppinsSemiBold, fontSize: sh(17),textAlign: 'left',paddingTop: 30, opacity:0.5}}>Last updated: March 18, 2024</Text>
            <Text style = {{fontFamily: fonts.Poppins, fontSize: sh(16),textAlign: 'justify',paddingTop: 10}}>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</Text>
            <Text style = {{fontFamily: fonts.Poppins, fontSize: sh(16),textAlign: 'justify',paddingTop: 10}}>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</Text>
            <Text style = {{fontFamily: fonts.PoppinsBold, fontSize: sh(20),textAlign: 'justify',paddingTop: 30}}>Interpretation and Definitions</Text>
            <Text style = {{fontFamily: fonts.PoppinsSemiBold, fontSize: sh(17),textAlign: 'left',paddingTop: 10}}>Interpretation</Text>
            <Text style = {{fontFamily: fonts.Poppins, fontSize: sh(16),textAlign: 'justify',paddingTop: 10}}>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</Text>
            <Text style = {{fontFamily: fonts.PoppinsSemiBold, fontSize: sh(17),textAlign: 'left',paddingTop: 10}}>Definitions</Text>
            <Text style = {{fontFamily: fonts.Poppins, fontSize: sh(16),textAlign: 'justify',paddingTop: 10}}>For the purposes of this Privacy Policy:</Text> 
            <Text style = {{fontFamily: fonts.Poppins, fontSize: sh(16),textAlign: 'justify',paddingTop: 10}}>Account means a unique account created for You to access our Service or parts of our Service.</Text>
            <Text style = {{fontFamily: fonts.Poppins, fontSize: sh(16),textAlign: 'justify',paddingTop: 10}}>Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Debty.</Text>
            <Text style = {{fontFamily: fonts.Poppins, fontSize: sh(16),textAlign: 'justify',paddingTop: 10}}>Country refers to: United States</Text>
            <Text style = {{fontFamily: fonts.Poppins, fontSize: sh(16),textAlign: 'justify',paddingTop: 10}}>Service refers to the Website.</Text>
            <Text style = {{fontFamily: fonts.Poppins, fontSize: sh(16),textAlign: 'justify',paddingTop: 10}}>Service Provider means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</Text>
            <Text style = {{fontFamily: fonts.Poppins, fontSize: sh(16),textAlign: 'justify',paddingTop: 10}}>Third-party Social Media Service refers to any website or any social network website through which a User can log in or create an account to use the Service.</Text>
            <Text style = {{fontFamily: fonts.Poppins, fontSize: sh(16),textAlign: 'justify',paddingTop: 10}}>Website refers to Debty, accessible from https://debty.com</Text>
            <Text style = {{fontFamily: fonts.PoppinsBold, fontSize: sh(20),textAlign: 'justify',paddingTop: 30}}>Collecting and Using Your Personal Data</Text>
            <Text style = {{fontFamily: fonts.PoppinsSemiBold, fontSize: sh(17),textAlign: 'left',paddingTop: 10}}>Types of Data Collected</Text>
            <Text style = {{fontFamily: fonts.Poppins, fontSize: sh(16),textAlign: 'justify',paddingTop: 10}}>Personal Data</Text>
            <Text style = {{fontFamily: fonts.Poppins, fontSize: sh(16),textAlign: 'justify',paddingTop: 10}}>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</Text>
            <Text style = {{fontFamily: fonts.Poppins, fontSize: sh(16),textAlign: 'justify',paddingTop: 10}}>Email address</Text>
            <Text style = {{fontFamily: fonts.Poppins, fontSize: sh(16),textAlign: 'justify',paddingTop: 10}}>First name and last name</Text>
            <Text style = {{fontFamily: fonts.Poppins, fontSize: sh(16),textAlign: 'justify',paddingTop: 10}}>Phone number</Text>
            <Text style = {{fontFamily: fonts.Poppins, fontSize: sh(16),textAlign: 'justify',paddingTop: 10}}>Address, State, Province, ZIP/Postal code, City</Text>
            <Text style = {{fontFamily: fonts.Poppins, fontSize: sh(16),textAlign: 'justify',paddingTop: 10}}>Usage Data</Text>
            <Text style = {{fontFamily: fonts.Poppins, fontSize: sh(16),textAlign: 'justify',paddingTop: 10}}>Usage Data is collected automatically when using the Service.</Text>
            <Text style = {{fontFamily: fonts.Poppins, fontSize: sh(16),textAlign: 'justify',paddingTop: 10}}>Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</Text>
            <Text style = {{fontFamily: fonts.PoppinsBold, fontSize: sh(20),textAlign: 'justify',paddingTop: 30}}>Use of Your Personal Data</Text>
            <Text style = {{fontFamily: fonts.Poppins, fontSize: sh(16),textAlign: 'justify',paddingTop: 10}}>The Company may use Personal Data for the following purposes:</Text>
            <Text style = {{fontFamily: fonts.Poppins, fontSize: sh(16),textAlign: 'justify',paddingTop: 10}}>• To provide and maintain our Service, including to monitor the usage of our Service.</Text>
            <Text style = {{fontFamily: fonts.Poppins, fontSize: sh(16),textAlign: 'justify',paddingTop: 10}}>To manage Your Account: to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</Text>
            <Text style = {{fontFamily: fonts.Poppins, fontSize: sh(16),textAlign: 'justify',paddingTop: 10}}>For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</Text>
            <Text style = {{fontFamily: fonts.Poppins, fontSize: sh(16),textAlign: 'justify',paddingTop: 10}}>To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</Text>
            <Text style = {{fontFamily: fonts.Poppins, fontSize: sh(16),textAlign: 'justify',paddingTop: 10}}>To provide You with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</Text>
            <Text style = {{fontFamily: fonts.Poppins, fontSize: sh(16),textAlign: 'justify',paddingTop: 10}}>To manage Your requests: To attend and manage Your requests to Us.</Text>
            <Text style = {{fontFamily: fonts.Poppins, fontSize: sh(16),textAlign: 'justify',paddingTop: 10}}>For business transfers: We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</Text>
            <Text style = {{fontFamily: fonts.Poppins, fontSize: sh(16),textAlign: 'justify',paddingTop: 10}}>For other purposes: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</Text>
            <Text style = {{fontFamily: fonts.PoppinsBold, fontSize: sh(20),textAlign: 'justify',paddingTop: 30}}>Retention of Your Personal Data</Text>
            <Text style = {{fontFamily: fonts.Poppins, fontSize: sh(16),textAlign: 'justify',paddingTop: 10}}>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</Text>
            <Text style = {{fontFamily: fonts.Poppins, fontSize: sh(16),textAlign: 'justify',paddingTop: 10}}>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</Text>
            <Text style = {{fontFamily: fonts.PoppinsBold, fontSize: sh(20),textAlign: 'justify',paddingTop: 30}}>Transfer of Your Personal Data</Text>
            <Text style = {{fontFamily: fonts.Poppins, fontSize: sh(16),textAlign: 'justify',paddingTop: 10}}>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</Text>
            <Text style = {{fontFamily: fonts.Poppins, fontSize: sh(16),textAlign: 'justify',paddingTop: 10}}>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</Text>
            <Text style = {{fontFamily: fonts.Poppins, fontSize: sh(16),textAlign: 'justify',paddingTop: 10}}>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</Text>
            <Text style = {{fontFamily: fonts.PoppinsBold, fontSize: sh(20),textAlign: 'justify',paddingTop: 30}}>Disclosure of Your Personal Data</Text>
            <Text style = {{fontFamily: fonts.Poppins, fontSize: sh(16),textAlign: 'justify',paddingTop: 10}}>Business Transactions</Text>
            <Text style = {{fontFamily: fonts.Poppins, fontSize: sh(16),textAlign: 'justify',paddingTop: 10}}>If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</Text>
            <Text style = {{fontFamily: fonts.Poppins, fontSize: sh(16),textAlign: 'justify',paddingTop: 10}}>Law enforcement</Text>
        </ScrollView>

    </View>
  );
}

export default Settings_PrivacyPolicy;
