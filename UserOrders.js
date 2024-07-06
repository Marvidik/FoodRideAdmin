import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import OrderCard from './OrderCard';
import MainOrders from './MainOrders';
import axios from 'axios'; // Import axios for making API calls
import { showMessage } from "react-native-flash-message";

export default function UserOrders({ route, navigation }) {
    const [orders, setOrders] = useState([]); 
    const { order } = route.params;

    const handleButtonClick = async (id) => {
        try {
          // Make the PATCH request to the API
          const response = await axios.patch(`https://foodride.viziddecors.com/delivered/${id}`, {
            // Add any data you want to send in the request body
            // For example:
            // key: value
          });
    
          showMessage({
            message: "Order Confirmed",
            type: "success",
            style: styles.message,
          });
        } catch (error) {
          // Handle errors if the request fails
          console.error('Error making PATCH request:', error);
        }
      };

    useEffect(() => {
        usersorders();
    });

    const usersorders = async () => {
        try {
            const response = await axios.get(`https://foodride.viziddecors.com/vieworder/${order.secondid}`);
            setOrders(response.data.Orders);
        } catch (error) {
            console.error('Error fetching orders:', error);
            setOrders([]);
            throw error;
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <Text style={styles.head}>User Orders</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                {orders.map((orde, index) => {
                    const details = orde.food_details ? orde.food_details : orde.junk_details;
                    return (
                        <MainOrders
                            key={index}
                            name={details.name}
                            image={{ uri: `https://foodride.viziddecors.com${details.image}` }}
                            quantity={orde.quantity}
                            restaurant={details.restaurant.name}
                            address={orde.profile.address}
                            Phone={orde.profile.phone}
                            Phone2={orde.profile.phone1}
                            onPress={() => handleButtonClick(orde.id)}
                        />
                    );
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    header: {
        height: 40,
        backgroundColor: "#FF7518"
    },
    head: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: "#512213",
        marginLeft: "33%"
    },
    message: {
        marginTop: 64,
        marginHorizontal: 10,
        borderRadius: 10
      },
});
