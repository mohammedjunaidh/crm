import { Component } from 'react';
import { StyleSheet,  View } from 'react-native';
import Crm from "./src/components/Crm/index";
import Otp from "./src/components/Crm/Otp"
// import Verification from './src/components/Crm/verification';
export default function App() {
  return (
    <View style={styles.container} >
    {/* <> */}
      {/* <Crm/>  */}
       <Otp/>  
      {/* <Verification /> */}
  </View>
  );
};
const styles=StyleSheet.create({
  container:{
     flex:1,
     justifyContent:'center',
    alignItems:'center',
  }
  
})