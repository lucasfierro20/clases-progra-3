import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import HomeMenu from './src/components/HomeMenu';
import DynamicForm from './src/components/DynamicForm';
import Users from './src/screens/Users';
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="HomeMenu" component={HomeMenu}/>
      <Stack.Screen name="DynamicForm" component={DynamicForm}/>
      <Stack.Screen name="Users" component={Users}/>
      <Stack.Screen name="Login" component={Login} options={{tabBarIcon: ()=><MaterialIcons name="login" size={24} color="black" />}}/>
      <Stack.Screen name="Register" component={Register} options={{tabBarIcon: ()=><FontAwesome5 name="sign-out-alt" size={24} color="black" />}}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});