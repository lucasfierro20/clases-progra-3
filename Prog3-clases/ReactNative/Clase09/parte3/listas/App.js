import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductList from './src/screens/ProductList';

export default function App() {
  return (
    <View>
      <Text styles={styles.texto}>Probando FlatLists</Text>
      <ProductList/>
    </View>
  );
}

const styles = StyleSheet.create({
 texto:{
    fontWeight:'bold',
    alignItems: 'center',
 }
});
