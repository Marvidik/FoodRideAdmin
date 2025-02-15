import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'; // Assuming you have a CustomButton component

export default function MainOrders({ name, image, quantity,restaurant,address,Phone,Phone2,onPress}) {
    return (
        <View style={styles.card}>
          <Image source={image } style={styles.image} />
          <View>
                <Text style={styles.text1}> Food: {name}</Text>
                <Text style={styles.text2}>Quantity: {quantity}</Text>
                <Text style={styles.text3}>Address: {address}</Text>
                <Text style={styles.text4}>Phone: {Phone}</Text>
                <Text style={styles.text3}>Phone2: {Phone2}</Text>
                <Text style={styles.text4}>Restaurant: {restaurant}</Text>
                <CustomButton style={styles.but} title={"Order Sent"} onPress={onPress}/>
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
        height:190
    },
    image: {
      width:150,
      height: 200,
      resizeMode: 'cover',
    },
    text1:{
        fontSize: 14,
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
        marginTop:5,
        width:150
    }

  });
  