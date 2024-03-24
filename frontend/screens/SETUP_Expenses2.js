import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, FlatList, ScrollView, TouchableOpacity,TouchableWithoutFeedback } from 'react-native';
import { appStyles,sh,fonts,colors, sw } from '../styles/GlobalStyle';
import Slider from '@react-native-community/slider';
import EditProfileEnvelopes from '../components/EditProfileEnvelopes';
import { useNavigation } from '@react-navigation/native';


function SETUP_Expenses2(props) {
    const navigation = useNavigation();

    const handleNext = () => {
        navigation.navigate('SETUP_Debts');
    }

    const [income, setIncome] = React.useState(0);
    const rangeValues = [0, 20000];
    const data = [
        { id: '1', source: require('../assets/iconDebt.png'), text: 'Debt' },
        { id: '2', source: require('../assets/iconTransport.png'), text: 'Transport' },
        { id: '3', source: require('../assets/iconMobile.png'), text: 'Mobile & Data' },
        { id: '4', source: require('../assets/iconFood.png'), text: 'Food' },
        { id: '5', source: require('../assets/iconWifi.png'), text: 'Internet' },
        { id: '6', source: require('../assets/iconPharmacy.png'), text: 'Pharmacy' },
        { id: '7', source: require('../assets/iconEntertainment.png'), text: 'Entertainment' },
        { id: '8', source: require('../assets/iconRental.png'), text: 'Rental' },
        { id: '9', source: require('../assets/iconFuel.png'), text: 'Fuel' }, 
      ];
    return (
        <View style={[appStyles.appBackground, {marginHorizontal: sw(0)}]}>
            {/* header */}
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: sw(24)}}>
                <View style={{flex:1}} />
                <Text style={{flex: 5, fontFamily: fonts.RubikBold, fontSize: sh(26), textAlign: 'center'}}>Setup Profile</Text>
                <TouchableOpacity onPress={handleNext}>
                    <Text style={{flex: 1, fontFamily: fonts.RubikRegular, fontSize: sh(20), textAlign: 'center', color: colors.yellow, top: sh(6)}}>Next</Text>
                </TouchableOpacity>
            </View>
        <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal: sw(40)}}>
            <View>
                <Text style={styles.bodyText}>
                    Full Name
                </Text>
                <TextInput style={styles.inputBox} defaultValue="Song Jun"/>
            </View>
            <View>
                <Text style={styles.bodyText}>
                    Income
                </Text>
                <Text style={{fontFamily:fonts.PoppinsMedium, fontSize:sh(20), marginBottom: sh(10)}}>
                    RM {income}
                </Text>
                <Slider 
                style={{width: '100%', height: 40}}
                minimumValue={0}
                maximumValue={20000}
                minimumTrackTintColor={colors.greyBlue}
                maximumTrackTintColor={colors.yellow}
                thumbTintColor={colors.greyBlue}
                onValueChange={(value)=>setIncome(value)}
                step={200}
                />
                <View style={styles.rangeIndicatorContainer}>
        {rangeValues.map((value, index) => (
          <Text key={index} style={styles.rangeIndicatorText}>
            {value}
          </Text>
        ))}
                </View>
            </View>
            
                <Text style={styles.bodyText}>
                    Envelopes
                </Text>
                <View style={{marginHorizontal: sw(-30), alignItems: 'center'}}>
                    <FlatList
                    style={{marginBottom: sh(20)}}
                    data={data} 
                    numColumns={3}
                    keyExtractor={(item) => item.id} 
                    scrollEnabled={false}
                    renderItem={({ item }) => (<EditProfileEnvelopes source={item.source} text={item.text} />)}
                    />
                </View>
        </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: sh(20),
        paddingHorizontal: sw(40)
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
    bodyText:{
        fontFamily: fonts.RubikBold, 
        fontSize: sh(22), 
        marginTop: sh(20),
        marginBottom: sh(10),
    },
    inputBox:{
        borderColor: colors.grey, 
        borderWidth: 1,
        marginBottom: sh(10),
        fontFamily:fonts.PoppinsMedium,
        fontSize:sh(20),
        padding: sh(8),
        borderRadius: sh(10),
    },
    rangeIndicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: sh(15),
        marginTop: sh(-10),
        marginBottom: sh(20),
      },
      rangeIndicatorText: {
        color: colors.greyBlue, 
        fontSize: 12,
        marginRight: sh(-15),
      },
      button: {
        backgroundColor: colors.greyBlue,
        paddingVertical: sh(10),
        paddingHorizontal: sh(20),
        borderRadius: 10,
        marginVertical: sh(20),
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText: {
        fontFamily: fonts.PoppinsMedium,
        fontSize: sh(16),
        color: 'white', 
      },
    }
);

export default SETUP_Expenses2;