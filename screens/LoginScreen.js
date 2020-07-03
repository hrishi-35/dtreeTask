import React, { useState } from 'react';
import { StyleSheet, Text, View , TextInput , Image , TouchableOpacity ,Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

 LoginScreen = ({navigation}) => {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);
  const [number , setNumber] = useState('');
  const [rollno , setRollno] = useState('');

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    console.log(confirmation);
    setConfirm(confirmation);
  }

  verifyOtp = async () =>{
  	if (number.length===10) {
  	 signInWithPhoneNumber('+91'+number);
  		console.log('aa',confirm);
  		navigation.navigate('Otp',{confirm});
  }else{
  	Alert.alert(
      "Invalid Mobile Number",
      "Please make sure you enter a valid mobile number",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  	console.log('error');
  }
}

  

  
    return (
		<View style={styles.container}>
      	<View style={styles.circle} />
      	<View style={{marginTop:64}}>
        <Image source={require("../assets/logo.png")}
        style={{width:100,height:100,alignSelf:"center"}}/>
    	<View style={{marginHorizontal:32}}>
    	<Text style={styles.header}>Roll number</Text>
    	<TextInput style={styles.input} placeHolder="DesignIntoCode" 
    	onChangeText={setRollno} value={rollno}
    	/>
    	<Text style={styles.header}>Parent Mobile number</Text>
    	<TextInput style={styles.input} placeHolder="DesignIntoCode" 
    	onChangeText={setNumber} value={number}
    	maxLength={10} keyboardType='numeric'
    	/>
    
	    <View style={{alignItems: "flex-end",marginTop:64}}>
    	<TouchableOpacity style={styles.continu} onPress={()=>verifyOtp()}>
    	<View style={{flex:1,justifyContent:'center'}} ><Text style={{fontSize:32,color:'#fff'}}>-></Text></View>
    	</TouchableOpacity>
    	</View>
    	</View>
       	</View>
    	</View>
    );
  }

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F5F7',
    
  },
  circle:{
    width : 500,
    height :600 ,
    borderRadius :500 /2,
    backgroundColor :"#FFF",
    position:"absolute",
    left:-120,
    top:-20
  },
  header:{
    fontWeight:"800",
    fontSize:16,
    color:"#514E5A",
    marginTop:16

  },
  input:{
    marginTop:16,
    height:50,
    borderWidth:StyleSheet.hairlineWidth,
    borderColor:"#BAB7C3",
    borderRadius:30,
    paddingHorizontal:16,
    color:"#514E5A",
    fontWeight:"600"

  },
  continu:{
    width:70,
    height:70,
      borderRadius:70/2,
      backgroundColor:"#9075E3",
      alignItems:"center",
      justifyContent:"center"
  }
});


export default LoginScreen;