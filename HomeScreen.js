import { View, Text,StyleSheet,ScrollView } from 'react-native'
import OrderCard from './OrderCard'
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'; // Import axios for making API calls

export default function HomeScreen({ navigation }) {
    const [userorders, setUserorders] = useState([]);


    useEffect(() => {
        usersorders();
      }, []);
    
      const usersorders = async () => {
        try {
          const response = await axios.get('https://foodride.viziddecors.com/userswithorders/');
          setUserorders(response.data.users);
          
        } catch (error) {
          console.error('Error fetching ads:', error);
          setUserorders([]);
          throw error;
        }
      };
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        </View>
        
        <Text style={styles.head}>Recent Orders</Text>
        <ScrollView>
      {userorders.map((order, index) => (
        <OrderCard
          key={index}
          user={order.username}
          NoOfFoods={order.no_of_foods}
          image={require("./assets/logo.jpeg")}
          Address={order.address}
          phone={order.phone}
          onPress={() => {
            // Pass restaurant data to the "Food" screen
            navigation.navigate("Food", { order });
          }}
        />
      ))}
    </ScrollView>

        
        
    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        
    },
    header:{
        height:40,
        backgroundColor:"#FF7518"
    },
    head:{
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color:"#512213",
        marginLeft:"33%"
    }
   
})