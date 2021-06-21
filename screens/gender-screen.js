import * as React from 'react';
import { View,
    StyleSheet,
    Text,
    TouchableOpacity, } from 'react-native';
import { globalStyles, themeColors, globalFonts, windowHeight, windowWidth, } from '../styles/global-styles';
import { CreateAccountGraphics, GenderFemaleGraphics, GenderMaleGraphics, } from '../assets/svgs/svg-graphics';
import { ButtonType1 } from '../components/buttons';


export default GenderScreen = () => (
    

    <View
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        
        <View style={styles.container}>
            <View style={styles.headerGraphicsContainer}>
                <CreateAccountGraphics style={{width:'100%'}} />
                <View style={styles.heading}>
                    <Text style={styles.mainHeading}>What is your {'\n'}Gender?</Text>
                    
                </View>
            </View>

        
            <View style={styles.contentContainer}>
            <View style={styles.cardcontainer}>
                <TouchableOpacity>
                    <View style={styles.card}>
                    

                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.card}>

                    </View>
                </TouchableOpacity>
                

            </View>
                <View style={styles.formContainer}>
                    
                    <ButtonType1 style={styles.submitButton} text={"NEXT"}/>
                </View>

                
    
            </View>

        </View>

    </View>
);

const styles = StyleSheet.create({
    container:{
        width:'100%', 
        height:'100%', 
        backgroundColor:themeColors.primary2,
    },
    headerGraphicsContainer:{
        position:'absolute',
        top:0,
        left:0,
    },
    heading:{
        position:'absolute',
        top:80,
        left:30,
    },
    mainHeading:{
        ...globalStyles.formPageMainHeading,
        color:themeColors.secondary2

    },
    
    contentContainer:{
        width:'100%',
        alignItems:'center',
        position:'absolute',
        bottom:80,

    },

    cardcontainer:{
        flexDirection:'row'
    },

    card:{
        width:windowWidth*0.4167,
        height:windowHeight*0.28125,
        marginBottom:60,
        marginHorizontal:10,
        backgroundColor:themeColors.tertiary2,
        borderRadius:10,
        shadowColor:themeColors.secondary1,
        shadowOffset: {width:4, height:4},
        shadowOpacity: 0.4,
        shadowRadius:5,
    },
   
    submitButton:{
        ...globalStyles.formSubmitButton
    },
    footContainer:{
        ...globalStyles.formPageFootContainer

    },
    footText:{
        ...globalStyles.formPageFootText

    }


})
