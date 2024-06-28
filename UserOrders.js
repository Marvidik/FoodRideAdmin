import { View, Text,StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import OrderCard from './OrderCard'
import MainOrders from './MainOrders'

export default function UserOrders() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        </View>
        
        <Text style={styles.head}>User Orders</Text>
        <ScrollView>
            
            <MainOrders name={"Rice"} NoOfFoods={3} image={require("./assets/1.jpeg")} address={"24B OGBONNA STREET "} restaurant={"Exos Restaur"} quantity={4}/>
            <MainOrders name={"Rice"} NoOfFoods={3} image={require("./assets/22.jpeg")} address={"24B OGBONNA STREET "} restaurant={"Exos Restaur"} quantity={4}/>
            <MainOrders name={"Rice"} NoOfFoods={3} image={require("./assets/33.jpeg")} address={"24B OGBONNA STREET "} restaurant={"Exos Restaur"} quantity={4}/>
            <MainOrders name={"Rice"} NoOfFoods={3} image={require("./assets/44.jpeg")} address={"24B OGBONNA STREET "} restaurant={"Exos Restaur"} quantity={4}/>
            <MainOrders name={"Rice"} NoOfFoods={3} image={require("./assets/1.jpeg")} address={"24B OGBONNA STREET "} restaurant={"Exos Restaur"} quantity={4}/>

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