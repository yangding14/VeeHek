import React, {useState} from 'react';
import { StyleSheet, View, Image, Text, Modal, TouchableOpacity} from 'react-native';
import {appStyles, colors, fonts, sh, sw} from '../styles/GlobalStyle';


const FeaturesAdvantageText = ({text}) => (
    <View style = {selectionBoxStyles.featureCSS}>
    <Image source={require('../assets/advantageIcon.png')}/>
    <Text style = {selectionBoxStyles.featureText}>{text}</Text>
    </View>   
);

const FeaturesDisadvantageText = ({text}) => {
    return (
        <View style = {selectionBoxStyles.featureCSS}>
        <Image source={require('../assets/disadvantageIcon.png')}/>
        <Text style = {selectionBoxStyles.featureText}>{text}</Text>
        </View>   
    );
}




function AISelection_ModelBox(props) {
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    }


    if (props.modelName == "Debty") {
    return (
            <View style =  {selectionBoxStyles.modelBox} >
                <View style = {{flex:1.15, paddingRight: sw(10), borderRightWidth: sw(1), borderRightColor: colors.bgWhite}}>
                <View style = {selectionBoxStyles.rowFlex}>
                <Image source={require('../assets/Debty.png')}/>
                <Text style= {{color: colors.bgWhite, fontFamily: fonts.PoppinsRegular, fontSize: sh(34), padding:sw(10)}}>Debty</Text>
                </View>
                <Text style = {{color: colors.bgWhite, fontFamily: fonts.PoppinsMedium, flexDirection:'row',paddingTop: sh(5)}}>
                <Text style= {{fontSize: sh(32)}}>RM40</Text>
                <Text style= {{fontSize: sh(16)}}>/Month</Text>
                </Text>
                <View style={{flex: 1, borderBottomColor: colors.bgWhite, borderBottomWidth: 1}} />
                <Text style= {{color: colors.bgWhite, fontFamily: fonts.PoppinsLight, fontSize: sh(14), paddingTop:sh(5)}}>Debty is the pinnacle of financial assistance, offering a holistic approach to managing your finances. From personalized debt repayment plans to round-the-clock guidance, Debty is your trusted companion on the journey to financial freedom.</Text>
                <Text 
               onPress={toggleModal} style= {{color: colors.yellow, fontFamily: fonts.PoppinsRegular, fontSize: sh(12),paddingTop: sh(10)}}>View more {'>'}</Text>
                </View>

                <View style = {{flex:1, paddingLeft: sw(10)}}>
                    <Text style = {{color:colors.bgWhite, fontFamily: fonts.PoppinsRegular,fontSize:sh(12), flexDirection: 'column'}}>Features:</Text>
                    <FeaturesAdvantageText text='Financial Health Assessment'/>
                    <FeaturesAdvantageText text='Smart Envelope Budget Tracking'/>
                    <FeaturesAdvantageText text='24/7 Financial Coach AI Chatbot'/>
                    <FeaturesAdvantageText text='Trained on the Best Finance AI Model'/>
                    <FeaturesAdvantageText text='AI Debt Repayment Plan Generation Monthly'/>
                    <FeaturesAdvantageText text='Automatic AI Monthly Budget Envelope Generation'/>
                    <TouchableOpacity style= {selectionBoxStyles.buttonCSS}>
                        {/* onPress function waiting */}
                        <Text style={selectionBoxStyles.buttonText}>Subscribe</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
                >
                <View style={selectionBoxStyles.modalContainer}>
                    <View style = {selectionBoxStyles.modalContainerChild}>
                    <View style = {{flexDirection: 'column'}}>
                    <TouchableOpacity onPress={toggleModal}>
                    <Image style= {{marginBottom: sh(15)}} source={require('../assets/whiteBg-arrow-left.png')}/>
                    </TouchableOpacity>
                    <Text style = {{color: colors.bgWhite, fontFamily: fonts.PoppinsRegular, fontSize: sh(52)}}>Debty</Text>
                    <Text style = {{color: colors.bgWhite, fontFamily: fonts.PoppinsMedium, flexDirection:'row',paddingTop: sh(5)}}>
                    <Text style= {{fontSize: sh(42)}}>RM40</Text>
                    <Text style= {{fontSize: sh(22)}}>/Month</Text>
                    </Text>
                    <Text style= {{width: sw(255),color: colors.bgWhite, fontFamily: fonts.PoppinsLight, fontSize: sh(16), paddingTop:sh(10)}}>Debty, your ultimate financial partner, provides AI-generated monthly debt repayment plans, automatic budget envelope generation, 24/7 financial coaching chatbot, trained on top finance AI models, personalized financial health assessments & smart envelope budget tracking, bringing users towards financial stability.</Text>
                    </View>
                    <Image style = {{alignSelf: 'center'}} source={require('../assets/DebtyFull.png')}/>   
                    </View> 
                    </View> 
                </Modal>
            </View>



    );
}
else if (props.modelName == "Wisey") {
    return (
    <View style =  {selectionBoxStyles.modelBox} >
                <View style = {{flex:1.15, paddingRight: sw(10), borderRightWidth: sw(1), borderRightColor: colors.bgWhite}}>
                <View style = {selectionBoxStyles.rowFlex}>
                <Image source={require('../assets/Wisey.png')}/>
                <Text style= {{color: colors.bgWhite, fontFamily: fonts.PoppinsRegular, fontSize: sh(34), padding:sw(10)}}>Wisey</Text>
                </View>
                <Text style = {{color: colors.bgWhite, fontFamily: fonts.PoppinsMedium, flexDirection:'row',paddingTop: sh(5)}}>
                <Text style= {{fontSize: sh(32)}}>RM25</Text>
                <Text style= {{fontSize: sh(16)}}>/Month</Text>
                </Text>
                <View style={{flex: 1, borderBottomColor: colors.bgWhite, borderBottomWidth: 1}} />
                <Text style= {{color: colors.bgWhite, fontFamily: fonts.PoppinsLight, fontSize: sh(14), paddingTop:sh(5)}}>Wisey cultivates financial wisdom with health assessments, budget tracking, an AI chatbot, and debt plans. Its personalized insights guide users toward prosperity, making every decision wise.</Text>
                <Text  onPress={toggleModal} style= {{color: colors.yellow, fontFamily: fonts.PoppinsRegular, fontSize: sh(12),paddingTop: sh(10)}}>View more {'>'}</Text>
                </View>

                <View style = {{flex:1, paddingLeft: sw(10)}}>
                    <Text style = {{color:colors.bgWhite, fontFamily: fonts.PoppinsRegular,fontSize:sh(12), flexDirection: 'column'}}>Features:</Text>
                    <FeaturesAdvantageText text='Financial Health Assessment'/>
                    <FeaturesAdvantageText text='Smart Envelope Budget Tracking'/>
                    <FeaturesAdvantageText text='24/7 Financial Coach AI Chatbot'/>
                    <FeaturesAdvantageText text='AI Debt Repayment Plan Generation Monthly'/>
                    <FeaturesDisadvantageText text='Automatic AI Monthly Budget Envelope Generation'/>
                    <FeaturesDisadvantageText text='Trained on the Best Finance AI Model'/>

                    <TouchableOpacity style= {selectionBoxStyles.buttonCSS}>
                        {/* onPress function waiting */}
                        <Text style={selectionBoxStyles.buttonText}>Subscribe</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
                >
                <View style={selectionBoxStyles.modalContainer}>
                    <View style = {selectionBoxStyles.modalContainerChild}>
                    <View style = {{flexDirection: 'column'}}>
                    <TouchableOpacity onPress={toggleModal}>
                    <Image style= {{marginBottom: sh(15)}} source={require('../assets/whiteBg-arrow-left.png')}/>
                    </TouchableOpacity>
                    <Text style = {{color: colors.bgWhite, fontFamily: fonts.PoppinsRegular, fontSize: sh(52)}}>Wisey</Text>
                    <Text style = {{color: colors.bgWhite, fontFamily: fonts.PoppinsMedium, flexDirection:'row',paddingTop: sh(5)}}>
                    <Text style= {{fontSize: sh(42)}}>RM25</Text>
                    <Text style= {{fontSize: sh(22)}}>/Month</Text>
                    </Text>
                    <Text style= {{width: sw(245),color: colors.bgWhite, fontFamily: fonts.PoppinsLight, fontSize: sh(16), paddingTop:sh(10)}}>Wisey's comprehensive offerings encompass thorough financial assessments, robust budget tracking tools, continuous support from a 24/7 AI chatbot, and meticulously crafted personalized debt plans fostering an environment for informed decision-making and achieving sustained financial stability.</Text>
                    </View>
                    <Image style = {{alignSelf: 'center'}} source={require('../assets/WiseyFull.png')}/>   
                    </View> 
                    </View>
                </Modal>
            </View>
)}
// Freebie caters to essential financial needs by providing health assessments, budget tracking, and round-the-clock AI chatbot support. Despite its absence of debt plans, it remains steadfast as a dependable companion for effective financial management and guidance.
else {
    return (
        <View style =  {selectionBoxStyles.modelBox} >
            <View style = {{flex:1.15, paddingRight: sw(10), borderRightWidth: sw(1), borderRightColor: colors.bgWhite}}>
                {/* model icon and freebie text  */}
                <View style = {[selectionBoxStyles.rowFlex, {flexShrink: 1}]}>
                    <Image source={require('../assets/Freebie.png')}/>
                    <Text style= {{color: colors.bgWhite, fontFamily: fonts.PoppinsRegular, fontSize: sh(34), padding:sw(10), flexShrink: 1}}>Freebie</Text>
                </View>
                
                {/* free text */}
                <Text style = {{color: colors.bgWhite, fontFamily: fonts.PoppinsMedium, flexDirection:'row',paddingTop: sh(5)}}>
                    <Text style= {{fontSize: sh(32)}}>FREE</Text>
                </Text>
                {/* line below free text */}
                <View style={{flex: 1, borderBottomColor: colors.bgWhite, borderBottomWidth: 1}} />
                {/* model description text */}
                <Text style= {{color: colors.bgWhite, fontFamily: fonts.PoppinsLight, fontSize: sh(14), paddingTop:sh(5)}}>Freebie offers vital tools like health assessment, smart budget tracking, and 24/7 AI chatbot. Lacking debt repayment plans and automatic budgeting envelopes, Freebie still stands as a trustworthy, free companion.</Text>
                <Text onPress={toggleModal} style= {{color: colors.yellow, fontFamily: fonts.PoppinsRegular, fontSize: sh(12),paddingTop: sh(10)}}>View more {'>'}</Text>
            </View>

            {/* features (right column) */}
            <View style = {{flex:1, paddingLeft: sw(10)}}>
                <Text style = {{color:colors.bgWhite, fontFamily: fonts.PoppinsRegular,fontSize:sh(12), flexDirection: 'column'}}>Features:</Text>
                <FeaturesAdvantageText text='Financial Health Assessment'/>
                <FeaturesAdvantageText text='Smart Envelope Budget Tracking'/>
                <FeaturesAdvantageText text='24/7 Financial Coach AI Chatbot'/>
                <FeaturesDisadvantageText text='AI Debt Repayment Plan Generation Monthly'/>
                <FeaturesDisadvantageText text='Automatic AI Monthly Budget Envelope Generation'/>
                <FeaturesDisadvantageText text='Trained on the Best Finance AI Model'/>

                <TouchableOpacity style= {selectionBoxStyles.buttonCSS}>
                    {/* onPress function waiting */}
                    <Text style={selectionBoxStyles.buttonText}>Subscribe</Text>
                </TouchableOpacity>
            </View>
            
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <View style={selectionBoxStyles.modalContainer}>
                    <View style={selectionBoxStyles.modalContainerChild}>
                        <View style = {{flexDirection: 'column'}}>
                            <TouchableOpacity onPress={toggleModal}>
                                <Image style= {{marginBottom: sh(15)}} source={require('../assets/whiteBg-arrow-left.png')}/>
                            </TouchableOpacity>
                            <Text style = {{color: colors.bgWhite, fontFamily: fonts.PoppinsRegular, fontSize: sh(52)}}>Freebie</Text>
                                <Text style = {{color: colors.bgWhite, fontFamily: fonts.PoppinsMedium, flexDirection:'row',paddingTop: sh(5)}}>
                                <Text style= {{fontSize: sh(42)}}>FREE</Text>
                                </Text>
                            <Text style= {{width: sw(245),color: colors.bgWhite, fontFamily: fonts.PoppinsLight, fontSize: sh(16), paddingTop:sh(10)}}>Freebie caters to essential financial needs with its health assessments, budget tracking, and 24/7 AI chatbot support. Though it lacks debt plans, it remains steadfast as a reliable companion for effective financial management and guidance, supporting users in navigating their financial journey with confidence.</Text>
                        </View>
                        <Image style = {{alignSelf: 'center'}} source={require('../assets/FreebieFull.png')}/>   
                    </View>
                </View> 
            </Modal>
        </View>
    )
}
}
const selectionBoxStyles = StyleSheet.create({
    
    modelBox: {
        flex: 1,
        flexDirection: 'row',
        marginTop: sh(30),
        backgroundColor: colors.greyBlue,
        padding: sh(20),
        borderRadius: sh(20),
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.55,
    },

    rowFlex: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1,
    },

    featureCSS: {
        flexDirection: 'row',
        paddingTop: sh(8),
        alignItems: 'center',
    },

    featureText: {
        color:colors.bgWhite, 
        fontFamily: fonts.PoppinsRegular,
        fontSize:sh(12), 
        paddingLeft: sw(5)
    },

    buttonCSS:{
        backgroundColor:colors.white,
        borderRadius: sh(8),
        alignItems: 'center',
        width: sw(100),
        paddingVertical: sh(3),
        alignSelf: 'center',
        marginTop: sh(15)

    },

    buttonText:{
        fontFamily:fonts.PoppinsSemiBold,
        fontSize: sh(14),
        color: colors.greyBlue,

    },  

    modalContainer: {
        justifyContent: 'flex-end',
        flex:1,
    },
    modalContainerChild: {
        backgroundColor: colors.greyBlue,
        width: '100%',
        padding: sh(30),
        flexDirection: 'row',
        borderTopLeftRadius: sh(20),
        borderTopRightRadius: sh(20),
        bottom: -1
    }
})

export default AISelection_ModelBox;