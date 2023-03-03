// // import React, { useState,useref } from 'react';
// // import { View, Text, TextInput,StyleSheet,Alert, Touchable, TouchableOpacity } from 'react-native';
// // import { LinearGradient } from "expo-linear-gradient";
// // import FirebaseRecaptchaVerifierModal from 'expo-firebase-recaptcha';
// // import {firebaseConfig} from './config';
// // import firebase from 'firebase/compat/app';
// // import {ExpoFirebaseCore} from 'expo-firebase-core';

// // const Verification=()=>{
// // const [phoneNumber,setPhoneNumber] = useState(' ');
// // const [code,setcode] = useState(' ');
// // const [verificationId,setVerificationId] = useState('null');
// //  const recaptchaVerifier = useref('null');

// //     const sendverification = () => {
// //     const phoneProvider = new firebase.auth.PhoneAuthProvider();
// //     phoneProvider
// //        .verifyPhoneNumber(phoneNumber,recaptchaVerifier.current)
// //        .then(setVerificationId);
// //        setPhoneNumber('');
// //  };
 
// //  const confirmCode = () => {
// //     const credential = firebase.auth.PhoneAuthProvider.credential(
// //         verificationId,
// //         code
// //     );
// //     firebase.auth().signInWithCredential(credential)
// //     .then(() => {
// //         setcode(' ');
// //     })
// //     .catch((error) => {
// //         alert(error);
// //     })
// //     Alert.alert(
// //         'Login Successful. Welcome To Dashboard',
// //     )};
// //         return(
// //             <View style = {StyleSheet.container}>
// //                 <FirebaseRecaptchaVerifierModal
// //                 ref={recaptchaVerifier}
// //                 firebaseConfig={firebaseConfig}
// //                 />
// //                 <Text style={StyleSheet.otpText}>
// //                     Login using OTP
// //                 </Text>
// //                 <TextInput
// //                 placeholder='Phone Number with country code'
// //                 onChangeText={setPhoneNumber}
// //                 keyboardType='phone-pad'
// //                 autoCompleteType='tel'
// //                 style={Styles.textInput}
// //                 />
// //                 <TouchableOpacity style={Styles.sendverification} onPress={sendverification}>
// //                     <Text style={Styles.buttonText}>
// //                         Send verificationId
// //                     </Text>
// //                 </TouchableOpacity>
// //                 <TextInput
// //                 placeholder='Confirm Code'
// //                 onChangeText={setcode}
// //                 keyboardType='number-pad'
// //                 style={Styles.textInput}
// //                 />
// //                  <TouchableOpacity style={Styles.sendcode} onPress={sendverification}>
// //                     <Text style={Styles.buttonText}>
// //                         confirm verification
// //                     </Text>
// //                 </TouchableOpacity>
// //             </View>
// //          )  
// //     }

// //     const styles = StyleSheet.create({
// //         container:{
// //             flex:1,
// //             backgroundColor:'#000',
// //             alignItems:'center',
// //             justifyContent:'center',
// //         },
// //         textInput:{
// //             paddingTop:40,
// //             paddingBottom:20,
// //             paddingHorizontal:20,
// //             fontSize:24,
// //             borderBottomColor:'#fff',
// //             borderBottomWidth:2,
// //             marginBottom:20,
// //             textAlign:'center',
// //             color:'#fff'
// //         },
// //         sendverification:{
// //             padding:20,
// //             backgroundColor:'#3498db',
// //             borderRadius:10,
// //         },
// //         sendcode:{
// //             padding:20,
// //             backgroundColor:'#9b59b6',
// //             borderRadius:10,
// //         },
// //         buttonText:{
// //             textAlign:'center',
// //             color:'#fff',
// //             fontWeight:'bold',
// //         },
// //         otpText:{
// //             fontSize:24,
// //             fontWeight:'bold',
// //             color:'#fff',
// //             margin:20,
// //         }
// //     });
   

// // export default Verification;

// // -------------------------------------------------------------------------------------------------------------------------

// import React from "react";
// import { Text, View, TextInput, Button, StyleSheet, TouchableOpacity, Platform } from "react-native";
// import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
// // import firebase from "firebase";
// import {  } from 'firebase'

// // Initialize Firebase JS SDK
// // https://firebase.google.com/docs/web/setup
// try {
//   firebase.initializeApp({
//     apiKey: "AIzaSyD9EkgOUrMNVBAGs25uLqpO3vlhqU1PCX8",
//     authDomain: "phoneotp-bd0ee.firebaseapp.com",
//     databaseURL: "https://phoneotp-bd0ee-default-rtdb.firebaseio.com",
//     projectId: "phoneotp-bd0ee",
//     storageBucket: "phoneotp-bd0ee.appspot.com",
//     messagingSenderId: "117610587698",
//     appId: "1:117610587698:web:ac375976f3c789cd3afe2b",
//     measurementId: "G-QTZFSYYBQS"
//   });
// } catch (err) {
//   // ignore app already initialized error in snack
// }

// export default function App() {
//   const recaptchaVerifier = React.useRef(null);
//   const [phoneNumber, setPhoneNumber] = React.useState();
//   const [verificationId, setVerificationId] = React.useState();
//   const [verificationCode, setVerificationCode] = React.useState();
//   const firebaseConfig = firebase.apps.length ? firebase.app().options : undefined;
//   const [message, showMessage] = React.useState((!firebaseConfig || Platform.OS === 'web')
//     ? { text: "To get started, provide a valid firebase config in App.js and open this snack on an iOS or Android device."}
//     : undefined);

//   return (
//     <View style={{ padding: 20, marginTop: 50 }}>
//       <FirebaseRecaptchaVerifierModal
//         ref={recaptchaVerifier}
//         firebaseConfig={firebaseConfig}
//       />
//       <Text style={{ marginTop: 20 }}>Enter phone number</Text>
//       <TextInput
//         style={{ marginVertical: 10, fontSize: 17 }}
//         placeholder="+1 999 999 9999"
//         autoFocus
//         autoCompleteType="tel"
//         keyboardType="phone-pad"
//         textContentType="telephoneNumber"
//         onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
//       />
//       <Button
//         title="Send Verification Code"
//         disabled={!phoneNumber}
//         onPress={async () => {
//           // The FirebaseRecaptchaVerifierModal ref implements the
//           // FirebaseAuthApplicationVerifier interface and can be
//           // passed directly to `verifyPhoneNumber`.
//           try {
//             const phoneProvider = new firebase.auth.PhoneAuthProvider();
//             const verificationId = await phoneProvider.verifyPhoneNumber(
//               phoneNumber,
//               recaptchaVerifier.current
//             );
//             setVerificationId(verificationId);
//             showMessage({
//               text: "Verification code has been sent to your phone.",
//             });
//           } catch (err) {
//             showMessage({ text: `Error: ${err.message}`, color: "red" });
//           }
//         }}
//       />
//       <Text style={{ marginTop: 20 }}>Enter Verification code</Text>
//       <TextInput
//         style={{ marginVertical: 10, fontSize: 17 }}
//         editable={!!verificationId}
//         placeholder="123456"
//         onChangeText={setVerificationCode}
//       />
//       <Button
//         title="Confirm Verification Code"
//         disabled={!verificationId}
//         onPress={async () => {
//           try {
//             const credential = firebase.auth.PhoneAuthProvider.credential(
//               verificationId,
//               verificationCode
//             );
//             await firebase.auth().signInWithCredential(credential);
//             showMessage({ text: "Phone authentication successful " });
//           } catch (err) {
//             showMessage({ text: `Error: ${err.message}`, color: "red" });
//           }
//         }}
//       />
//       {message ? (
//         <TouchableOpacity
//           style={[StyleSheet.absoluteFill, { backgroundColor: 0xffffffee, justifyContent: "center" }]}
//           onPress={() => showMessage(undefined)}>
//           <Text style={{color: message.color || "blue", fontSize: 17, textAlign: "center", margin: 20, }}>
//             {message.text}
//           </Text>
//         </TouchableOpacity>
//       ) : undefined}
//     </View>
//   );
// }
