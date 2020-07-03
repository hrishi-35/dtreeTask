import  React,{useEffect,useState} from 'react';
import { Text, View, FlatList , Image , ScrollView} from 'react-native';
import ImageSlider from 'react-native-image-slider';
 

EduOne = ({navigation}) =>{

const[data,setData]=useState('');


useEffect( ()=>{
	fetch('https://chatapptask.000webhostapp.com/api/fetchApi.php',{
		method:'POST'
	})
	.then((response) => response.json())
  	.then((data) => {
    	console.log(data);
    	setData(data);
  	})
    .catch((error) => {
      console.error('err',error);
    })
   
	 });


 
const list = [
{title:'Physics' , img:require('../assets/physics.png')},
{title:'Chemistry' , img:require('../assets/chemistry.png')},
{title:'Mathematics' , img:require('../assets/maths.png')},
]
return(
	<ScrollView>
	<View style={{backgroundColor:'#FFF'}} >
	<View style={{height:250 }} >
	<ImageSlider images={[
    'https://chatapptask.000webhostapp.com/api/uploads/logo.png',
    'https://chatapptask.000webhostapp.com/api/uploads/img2.png',
    'https://chatapptask.000webhostapp.com/api/uploads/img1.jpg'
  	]} 
  	autoPlayWithInterval={3000} />
  	</View>
  	<Text style={{fontSize:18,marginTop:20}} > Categories </Text>
  	<FlatList 
			data={list}
			nestedScrollEnabled
			horizontal={true}
			showsHorizontalScrollIndicator={false} 
			keyExtractor={title => list.title}
			renderItem ={({item})=>{
				return (
					<View style={{margin:10,backgroundColor:'#DCDCDC',borderRadius:16,padding:8}}>
					<Image source={item.img}
        			style={{width:150,height:100,resizeMode: "contain"}}/>
					<Text style={{alignSelf:'center',padding:4}}>{item.title}</Text>
					</View>
					)
			}}
			/>
		<Text style={{fontSize:18,marginTop:20}} > Trending </Text>
  	
			<FlatList 
			data={data}
			nestedScrollEnabled
			
			showsHorizontalScrollIndicator={false} 
			keyExtractor={id => data.id}
			renderItem ={({item})=>{
				return (
					<View style={{margin:5,borderRadius:12,padding:8}}>
					<Text style={{padding:4}}>{item.title}</Text>
					
					<Image source={{uri:item.url}}
        			style={{height:150,resizeMode: "stretch"}}/>
					</View>
					)
			}}
			/>

	<Text>hi</Text>
	</View>
	</ScrollView>)
}
export default EduOne;