import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CustomButton from './CustomButton'; // Assuming you have a CustomButton component

export default function OrderCard({ user, image, NoOfFoods,Address,phone,onPress}) {
    return (
        <View style={styles.card}>
          <Image source={image } style={styles.image} />
          <View>
                <Text style={styles.text1}> User: {user}</Text>
                <Text style={styles.text2}>No Of Foods: {NoOfFoods}</Text>
                <Text style={styles.text3}>Address: {Address}</Text>
                <Text style={styles.text4}>Phone: {phone}</Text>
                <CustomButton style={styles.but} title={"View Orders"} onPress={onPress}/>
          </View>    
        </View>
      );
}


const styles = StyleSheet.create({
    card:{
        flexDirection:"row",
        marginTop:5,
        width: '95%',
        flex: 1,
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        elevation: 5,
        alignSelf:"center",
        height:150
    },
    image: {
      width:180,
      height: 200,
      resizeMode: 'cover',
      alignSelf:"center"
    },
    text1:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color:"#512213",
        marginLeft:10,
        
    },
    text2:{
        fontSize: 16,
        color: '#888',
        marginBottom: 5,
        marginLeft:10,
    },
    text3:{
        fontSize: 16,
        marginBottom: 5,
        color:"#512213",
        marginLeft:10,
    },
    text4:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#27ae60',
        marginLeft:10,
    },
    but:{
        marginLeft:10,
        marginTop:5
    }

  });
  

  