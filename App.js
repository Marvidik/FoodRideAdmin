import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './HomeScreen';
import { NavigationContainer,useNavigation} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserOrders from './UserOrders';




export default function App() {

  const Stack = createStackNavigator();
  
  return (
    <NavigationContainer>
    <View style={styles.container}>
      <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="HomeEntry" component={HomeScreen} />
      <Stack.Screen options={{ headerShown: false }} name="Food" component={UserOrders} />
    </Stack.Navigator>
       
    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
});
