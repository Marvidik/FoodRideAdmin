import { View, Text,StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import OrderCard from './OrderCard'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        </View>
        
        <Text style={styles.head}>Recent Orders</Text>
        <ScrollView>
            <OrderCard user={"Idika Ebube"} NoOfFoods={3} image={require("./assets/1.jpeg")} Address={"24B OGBONNA STREET "} phone={"090263453626"}/>
            <OrderCard user={"Idika Ebube"} NoOfFoods={3} image={require("./assets/22.jpeg")} Address={"24B OGBONNA STREET "} phone={"090263453626"}/>
            <OrderCard user={"Idika Ebube"} NoOfFoods={3} image={require("./assets/33.jpeg")} Address={"24B OGBONNA STREET "} phone={"090263453626"}/>
            <OrderCard user={"Idika Ebube"} NoOfFoods={3} image={require("./assets/44.jpeg")} Address={"24B OGBONNA STREET "} phone={"090263453626"}/>
            <OrderCard user={"Idika Ebube"} NoOfFoods={3} image={require("./assets/44.jpeg")} Address={"24B OGBONNA STREET "} phone={"090263453626"}/>
            <OrderCard user={"Idika Ebube"} NoOfFoods={3} image={require("./assets/44.jpeg")} Address={"24B OGBONNA STREET "} phone={"090263453626"}/>
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