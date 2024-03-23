import React,{useState} from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { appStyles, colors, fonts, sh } from '../styles/GlobalStyle';
import { useNavigation } from '@react-navigation/native';

function Settings_FinancialHealth(props) {
    const navigation = useNavigation();
    const [point, setPoint] = useState(40);
    const [addPoint, setAddPoint] = useState(10);
    const [spending, setSpending] = useState(50);
    const [debts, setDebts] = useState(25);
    const [savings, setSavings] = useState(25);
    const [date, setDate] = useState('18 Mac 2024');
    const [comment, setComment] = useState('Good');

    const getComment = (point) => {
        if (point >= 60) {
            return 'Good';
        } else if (point >= 30) {
            return 'Poor';
        } else {
            return 'Bad';
        }
    };

    const getTintColor = (point) => {
        if (point >= 60) {
            return colors.green;
        } else if (point >= 40) {
            return colors.yellow;
        } else if (point >= 20) {
            return colors.orange;
        } else {
            return colors.red;
        }
    };
    return (
        <View style={[appStyles.appBackground, {alignItems: "center"}]}>
            <View style={styles.header}>
            <TouchableWithoutFeedback hitSlop={40} onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/arrow_left.png')} style={styles.backButton} />
                </TouchableWithoutFeedback>
            <Text style={styles.headerText}>Financial Health</Text>
            </View>
        <AnimatedCircularProgress
        size={sh(380)}
        width={10}
        fill={point}
        tintColor={getTintColor(point)}
        arcSweepAngle={180}
        rotation={270}
        lineCap='round'
        backgroundColor={colors.grey}
        >
            {
                (fill) => (<View style={styles.progressBarContainer}>
                    <Text style={{fontFamily:fonts.InterRegular, fontSize:sh(24),  color:colors.greyBlue, opacity:0.6} }>
                        {getComment(point)}
                    </Text>
                    <Text style={{fontFamily:fonts.InterBold, fontSize:sh(56), color:colors.greyBlue} }>
                    {point}
                </Text>
                <Text style={{fontFamily:fonts.InterRegular, fontSize:sh(24), flex:1, color:colors.greyBlue}}>
                    +{addPoint} pts
                </Text>
                </View>
                )
            }
        </AnimatedCircularProgress>
        <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: sh(-160),marginEnd:sh(-5)}}>
            <Text style={{fontFamily:fonts.InterRegular, fontSize:sh(20), color:colors.greyBlue, opacity:0.6}}>0</Text>
            <Text style={{fontFamily:fonts.InterRegular, fontSize:sh(20), color:colors.greyBlue, opacity:0.6,flex: 1, textAlign: 'center'}}>Last update on {date}</Text>
            <Text style={{fontFamily:fonts.InterRegular, fontSize:sh(20), color:colors.greyBlue, opacity:0.6}}>100</Text>
            </View>

            <View style={[styles.container, styles.shadow]}>
                <View style={{flexDirection:"row", justifyContent: "space-between", alignItems:"center"}}>
                <View style={{justifyContent: "space-between", width: '85%'}}>
                    <Text style={styles.bodyText}>Spending</Text>
                    <Text style={spending<50? styles.subText:styles.subTextOrange}>{spending<50?'Good':'Needs Improvement'}</Text>
                </View>
                <Text style={[styles.bodyText]}>{spending}%</Text>
                </View>
                <View style={{width:'100%', borderBottomColor: colors.grey, borderBottomWidth: StyleSheet.hairlineWidth, marginVertical: sh(20)}}/>
                <View style={{flexDirection:"row", justifyContent: "space-between", alignItems:"center"}}>
                <View style={{justifyContent: "space-between", width: '85%'}}>
                    <Text style={styles.bodyText}>Debts</Text>
                    <Text style={debts<30? styles.subText:styles.subTextOrange}>{debts<30?'Good':'Needs Improvement'}</Text>
                </View>
                <Text style={[styles.bodyText]}>{debts}%</Text>
                </View>
                <View style={{width:'100%', borderBottomColor: colors.grey, borderBottomWidth: StyleSheet.hairlineWidth, marginVertical: sh(20)}}/>
                <View style={{flexDirection:"row", justifyContent: "space-between", alignItems:"center"}}>
                <View style={{justifyContent: "space-between", width: '85%'}}>
                    <Text style={styles.bodyText}>Savings</Text>
                    <Text style={savings>=20? styles.subText:styles.subTextOrange}>{savings>=20?'Good':'Needs Improvement'}</Text>
                </View>
                <Text style={[styles.bodyText]}>{savings}%</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: sh(40),
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
   progressBarContainer:{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: sh(30),
     },
     container:{
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: sh(40),
        padding: sh(10),
        backgroundColor: 'white',
        borderRadius: sh(10),
        width: '100%',
    },
    shadow: {
        shadowColor: '#171717',
        shadowOffset: {width: -10, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 3,
      },
    bodyText:{
        fontFamily:fonts.InterBold,
        fontSize:sh(24),
        color:colors.greyBlue,
    },
    subText:{
        fontFamily:fonts.InterMedium,
        fontSize:sh(18),
        color:colors.green,
        opacity:0.6,
        marginTop: sh(8)
    },
    subTextOrange:{
        fontFamily:fonts.InterMedium,
        fontSize:sh(18),
        color:colors.orange,
        opacity:0.6,
        marginTop: sh(8)
    },
});

export default Settings_FinancialHealth;