import React, { useState,useref } from 'react';
import { View, Text, TextInput,StyleSheet,Alert } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";


const OtpVerification = () => {
    
    const [otp0, setOtp0] = useState('');
    const [otp1, setOtp1] = useState('');
    const [otp2, setOtp2] = useState('');
    const [otp3, setOtp3] = useState('');
    
    const handleOtpChange = (value) => {
        setOtp0(value);
    };
    
    
    const handleVerify = () => {
        // Your code to verify the OTP goes here
    };
    
    

    return (
    <>
      <LinearGradient
    style={styles.fullContainer}
    colors={['#43CEA2','#185A9D']}
    start={{x:0,y:0}} end={{x:1,y:1}}>
    <View >
        
        <View style={styles.subcontainer}>

            <View>
                <Text style={styles.help}>Need Some Help?</Text>
            </View>

                <View style={styles.otp}>
                <Text style={styles.title}>OTPVerification</Text>
                </View>

                <View  style={styles.enter}>
                <Text style={styles.sent} >Please Enter 4-digit OTP sent to you at +91 6385287327</Text>
                </View>
                
            <View style={styles.inputWrap}>
                <TextInput style={styles.input}
                    value={otp0}
                    onChangeText={setOtp0}
                    keyboardType="numeric"
                    maxLength={1}
                    
                 />

                 
                <TextInput style={styles.input}
                  
                    value={otp1}
                    onChangeText={setOtp1}
                    keyboardType="numeric"
                    maxLength={1}
                 />

                 
                <TextInput style={styles.input}

                    value={otp2}
                    onChangeText={setOtp2}
                    keyboardType="numeric"
                    maxLength={1}
                 />

                 
                <TextInput style={styles.input}

                    value={otp3}
                    onChangeText={setOtp3}
                    keyboardType="numeric"
                    maxLength={1}
                 />

            </View> 

            <View>
                <Text style={styles.resend}>Resend Code</Text>
            </View>

            <View  style={styles.verify}>
                <Text style={styles.last }
                  onPress={ handleOtpChange} >Verify
                </Text>
                </View>
            

         </View>   

    </View>
    </LinearGradient>
    </>

);
    };  

const styles=StyleSheet.create({
    fullContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
 
     //  backgroundColor:'skyblue',
    },
        subcontainer: {
            justifyContent:'space-between',
            //  alignItems: "center",
            height: "65%",
            width: "93%",
            padding:20,
            
            paddingLeft: 30,
            borderRadius: 20,
            backgroundColor: "rgba(0,0,0,0.1)",
            marginTop:85
          },
        otp:{
            // height: "20%",
            // fontSize:55,
            // fontWeight:'bold',
            // textAlign:'center',
            marginTop: 25,
        },
        enter:{


        },
        verify:{

        width: 300,
        backgroundColor: '#002D5BAD',
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 10,
        paddingHorizontal: 18,
        border:'none',
        },
           
        //BOX
        //BOX
        //BOX
        //BOX

        inputWrap:{
        flexDirection:'row',
        margin:7,
        paddingTop: 10
        
        },


        input:{
        width:'21%',
        padding:17,
        paddingBottom: 0,
        margin:5,
        fontSize:30,
        height:60,
        borderRadius:10,
        borderWidth:3,
        borderColor:'grey',
        justifyContent:'center',
        backgroundColor:'white',
        },
        //Text
        //Text
        //Text
        //Text

        help:{
            textAlign: 'right',
            paddingRight: 7,
        },

        title:{
            fontSize:28,
            fontWeight:'bold',
        },

        sent:{


        },

        resend:{
            textAlign: 'right',
            paddingRight: 10
        },

        last:{


        },


        });
  export default OtpVerification ;
