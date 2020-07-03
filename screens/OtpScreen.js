import React, { useState } from 'react';
import { StyleSheet, Text, View , TextInput , Image , TouchableOpacity ,Alert} from 'react-native';

OtpScreen = ({route , navigation}) => {
	const [code, setCode] = useState('');
	const {confirm} = route.params;
	const [n1, setN1] = useState('');
	const [n2, setN2] = useState('');
	const [n3, setN3] = useState('');
	const [n4, setN4] = useState('');
	const [n5, setN5] = useState('');
	const [n6, setN6] = useState('');	

	async function confirmCode() {
    try {
    	setCode(n1+n2+n3+n4+n5+n6);
    	console.log(code);
    	console.log(confirm);
     
        
        if (code.length===6) {
        	navigation.navigate('EduOne');
        }else{
        	Alert.alert(
      "Something went wrong",
      "Please try again !",
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
        }
      	
     
    } catch (error) {
    	console.log(error);
      Alert.alert(
      "Something went wrong",
      "Please try again !",
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
    }
  }
  return (
		<View style={styles.container}>
      	<View style={styles.circle} />
      	<View >
        
    	<View style={{marginHorizontal:32}}>
    	<Text style={styles.header}>Enter OTP sent to your mobile number</Text>
    	<View style={{flexDirection:'row'}}>
    	<TextInput style={styles.input} placeHolder="DesignIntoCode" 
    	keyboardType='numeric' maxLength={1}
    	value={n1} onChangeText={setN1}
    	/>
    	<TextInput style={styles.input} placeHolder="DesignIntoCode" 
    	keyboardType='numeric' maxLength={1}
    	value={n2} onChangeText={setN2}
    	/>
    	<TextInput style={styles.input} placeHolder="DesignIntoCode" 
    	keyboardType='numeric' maxLength={1}
    	value={n3} onChangeText={setN3}
    	/>
    	<TextInput style={styles.input} placeHolder="DesignIntoCode" 
    	keyboardType='numeric' maxLength={1}
    	value={n4} onChangeText={setN4}
    	/>
    	<TextInput style={styles.input} placeHolder="DesignIntoCode" 
    	keyboardType='numeric' maxLength={1}
    	value={n5} onChangeText={setN5}
    	/>
    	<TextInput style={styles.input} placeHolder="DesignIntoCode" 
    	keyboardType='numeric' maxLength={1}
    	value={n6} onChangeText={setN6}
    	/>
    	</View>
    
	    <View style={{alignItems: "flex-end",marginTop:64}}>
    	<TouchableOpacity style={styles.continu} onPress={confirmCode}>
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
    justifyContent:'center'
    
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
    width :50,
    margin:4,
    borderWidth:StyleSheet.hairlineWidth,
    borderColor:"#BAB7C3",
    borderRadius:30,
    paddingHorizontal:16,
    color:"#514E5A",
    

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

export default OtpScreen;