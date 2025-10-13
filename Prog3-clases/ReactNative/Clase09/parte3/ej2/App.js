import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from './src/components/Card';
import ProductsAll from './src/screens/ProductsAll';

export default function App() {
  return(
    <View>
      <ProductsAll/>
    </View>
  )
    
  
}

const styles = StyleSheet.create({
 
});
